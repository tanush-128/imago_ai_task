"use client";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import ChatInput from "../components/ChatInput";
import Chat from "../components/Chat";
import { ChatProvider, useChatContext } from "../context/ChatContext";
import { useTheme } from "next-themes";

function HomeContent() {
  const { messages } = useChatContext();
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-custom-dark-1' : 'bg-custom-light-1'} relative flex h-screen overflow-hidden pt-16 md:pt-12 px-2 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-8 md:py-12`}>
      <Sidebar />
      <div className={`${theme === 'dark' ? 'bg-custom-dark-2' : 'bg-custom-light-2'} relative ml-0 md:ml-8 lg:ml-12 flex-1 rounded-2xl md:rounded-4xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
        <div className="h-full overflow-y-auto pb-32">
          {messages.length === 0 ? <Welcome /> : <Chat />}
        </div>
        <div className="absolute right-0 bottom-0 left-0">
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <ChatProvider>
      <HomeContent />
    </ChatProvider>
  );
}
