"use client";
import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";
import ChatInput from "../components/ChatInput";
import Chat from "../components/Chat";
import { ChatProvider, useChatContext } from "../context/ChatContext";

function HomeContent() {
  const { messages } = useChatContext();

  return (
    <div className="bg-custom-dark-1 relative flex h-screen overflow-hidden pt-16 md:pt-4 px-2 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-8 md:py-12">
      <Sidebar />
      <div className="bg-custom-dark-2 relative ml-0 md:ml-8 lg:ml-12 flex-1 rounded-2xl md:rounded-4xl border-[1px] border-white/10">
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
