"use client";
import Sidebar from "../../../components/Sidebar";
import Chat from "../../../components/Chat";
import { useTheme } from "next-themes";

export default function ChatPage({ params }: { params: { id: string } }) {
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'dark' ? 'bg-custom-dark-1' : 'bg-custom-light-1'} relative flex h-screen overflow-hidden pt-16 md:pt-12 px-2 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-8 md:py-12`}>
      <Sidebar />
      <div className={`${theme === 'dark' ? 'bg-custom-dark-2' : 'bg-custom-light-2'} relative ml-0 md:ml-8 lg:ml-12 flex-1 rounded-2xl md:rounded-4xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
        <div className="h-full overflow-y-auto pb-32">
          <Chat />
        </div>
      </div>
    </div>
  );
} 