"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ChatBotContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ChatBotContext = createContext<ChatBotContextValue | null>(null);

export const ChatBotProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatBotContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen((prev) => !prev),
      }}
    >
      {children}
    </ChatBotContext.Provider>
  );
};

export const useChatBot = () => {
  const ctx = useContext(ChatBotContext);
  if (!ctx) {
    throw new Error("useChatBot must be used within a ChatBotProvider");
  }
  return ctx;
};
