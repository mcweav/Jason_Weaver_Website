import OpenAI from "openai";
import { CHATBOT_SYSTEM_PROMPT } from "@/config/chatbotContext";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      {
        error:
          "The chatbot isn't configured yet — add an OPENAI_API_KEY to enable it.",
      },
      { status: 500 },
    );
  }

  const body = await req.json();
  const messages: ChatMessage[] = Array.isArray(body?.messages)
    ? body.messages
        .filter(
          (m: ChatMessage) =>
            (m?.role === "user" || m?.role === "assistant") &&
            typeof m?.content === "string" &&
            m.content.trim().length > 0,
        )
        .slice(-20)
    : [];

  if (messages.length === 0) {
    return Response.json({ error: "No message provided." }, { status: 400 });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.7,
      max_tokens: 400,
      messages: [
        { role: "system", content: CHATBOT_SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const reply = chatCompletion.choices[0]?.message?.content?.trim();

    return Response.json({
      reply: reply || "Sorry, I don't have an answer for that right now.",
    });
  } catch (error: any) {
    const message =
      error?.error?.message || error?.message || "Something went wrong.";
    return Response.json({ error: message }, { status: 500 });
  }
}
