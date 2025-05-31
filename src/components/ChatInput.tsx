import { useState } from "react";
import { useChatContext } from "../context/ChatContext";

const ChatInput = () => {
  // const [attachedFile  , setAttachedFile] = useState<string | null>(null);
  const { sendMessage, message, setMessage, attachedFiles, setAttachedFiles } = useChatContext();

  const suggestions = [
    "Create an image for my presentation",
    "What to do with kids' art",
    "Find the decade that a photo is from",
  ];

  const handleSubmit = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 bg-custom-dark-2 pb-2 sm:pb-4 z-50 rounded-b-2xl md:rounded-b-4xl">
      {/* Input Container */}
      <div className="bg-custom-dark-3 relative rounded-2xl md:rounded-full border-[1px] border-white/10 p-2 sm:p-4 focus-within:border-white/20 hover:border-white/20">
        <div className="flex items-center gap-2">
          {/* File Attachment Display */}
          {attachedFiles.map((file) => (
            <div key={file} className="mb-2 sm:mb-3 flex items-center gap-2 text-xs sm:text-sm text-gray-300">
              <svg
                className="h-3 w-3 sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <span className="text-xs sm:text-sm text-gray-300">{file}</span>
              <button
                onClick={() => setAttachedFiles(attachedFiles.filter((f) => f !== file))}
                className="text-gray-400 hover:text-gray-200"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        {/* Input Field and Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="ml-1 sm:ml-2 transition-transform hover:scale-110 active:scale-95">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14C11.1667 14 10.4583 13.7083 9.875 13.125C9.29167 12.5417 9 11.8333 9 11V5C9 4.16667 9.29167 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5V11C15 11.8333 14.7083 12.5417 14.125 13.125C13.5417 13.7083 12.8333 14 12 14ZM11 21V17.925C9.26667 17.6917 7.83333 16.9167 6.7 15.6C5.56667 14.2833 5 12.75 5 11H7C7 12.3833 7.4875 13.5625 8.4625 14.5375C9.4375 15.5125 10.6167 16 12 16C13.3833 16 14.5625 15.5125 15.5375 14.5375C16.5125 13.5625 17 12.3833 17 11H19C19 12.75 18.4333 14.2833 17.3 15.6C16.1667 16.9167 14.7333 17.6917 13 17.925V21H11ZM12 12C12.2833 12 12.5208 11.9042 12.7125 11.7125C12.9042 11.5208 13 11.2833 13 11V5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5V11C11 11.2833 11.0958 11.5208 11.2875 11.7125C11.4792 11.9042 11.7167 12 12 12Z" fill="#E5E5EA"/>
            </svg>
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="Ask anything from here"
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-gray-400 outline-none"
          />

          <label className="cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                const newFiles = Array.from(e.target.files || []).map((file) => file.name);
                setAttachedFiles([...attachedFiles, ...newFiles]);
              }}
            />
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transition-colors hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </label>

          <button
            onClick={handleSubmit}
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 sm:p-2 transition-all hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 rotate-45 transform text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-2 sm:mt-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => setMessage(suggestion)}
            className="rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-white transition-all hover:bg-white/20 active:bg-white/30 hover:scale-105 active:scale-95"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatInput;
