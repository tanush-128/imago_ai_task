"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface Message {
  content: string;
  isUser: boolean;
  heading?: string;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (content: string) => void;
  clearMessages: () => void;
  message: string;
  setMessage: (message: string) => void;
  attachedFiles: string[];
  setAttachedFiles: (files: string[]) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (content: string) => {
    setMessages([...messages, { content, isUser: true }]);
    // Here you would typically make an API call to get the AI response
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content: `
UI/UX stands for **User Interface (UI)** and **User Experience (UX)**, two essential aspects of designing digital products such as websites, apps, and software.

- **UI (User Interface)** design is about crafting the visual elements of a digital product, such as buttons, icons, typography, colours, and layout. The goal of UI is to create an appealing, cohesive look and feel that makes it easy for users to navigate and interact with the product.

- **UX (User Experience)** design focuses on the overall experience a user has when interacting with a product. It involves researching user needs and behaviours to ensure the product is intuitive, accessible, and enjoyable to use. UX design considers the flow, structure, and functionality of the product to create a smooth and satisfying user journey.

Together, UI/UX design ensures a product is not only visually attractive but also functional and user-friendly, leading to an engaging and effective experience for users.
`,
          isUser: false,
          heading: "What is UIUX Design?",
        },
      ]);
    }, 1000);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, clearMessages, message, setMessage, attachedFiles, setAttachedFiles }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
} 