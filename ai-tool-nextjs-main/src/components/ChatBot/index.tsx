"use client";

import { useEffect, useRef, useState } from "react";
import { useChatBot } from "./ChatBotContext";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Jason's AI assistant. Ask me anything about his background, skills, or experience.",
};

const ChatBot = () => {
  const { isOpen, close } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const nextMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 z-9999 sm:right-6 lg:top-24 lg:right-8">
      <div className="flex h-[480px] max-h-[70vh] w-[340px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between border-b border-ink/10 px-4.5 py-3.5">
            <div>
              <p className="text-sm font-semibold text-ink">
                Ask about Jason
              </p>
              <p className="text-xs text-ink-2">AI assistant &middot; usually replies instantly</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close chat"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-2 transition-colors hover:bg-gold/10 hover:text-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4.5 py-4"
          >
            {messages.map((message, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm font-medium ${
                  message.role === "user"
                    ? "self-end rounded-br-sm bg-ink text-white"
                    : "self-start rounded-bl-sm bg-ink/5 text-ink"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="flex max-w-[85%] items-center gap-1 self-start rounded-2xl rounded-bl-sm bg-ink/5 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-2 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-2 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-2" />
              </div>
            )}

            {error && (
              <div className="max-w-[90%] self-start rounded-2xl rounded-bl-sm bg-red-500/10 px-3.5 py-2.5 text-sm font-medium text-red-500">
                {error}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-ink/10 p-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a question..."
              disabled={isLoading}
              className="min-w-0 flex-1 rounded-full border border-ink/10 bg-canvas px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-2 focus:border-gold disabled:opacity-60"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="hero-button-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
                <path
                  d="M4 12h15M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
      </div>
    </div>
  );
};

export default ChatBot;
