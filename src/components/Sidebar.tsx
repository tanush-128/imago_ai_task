import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const isHome = pathname === "/";
  const isHistory = pathname === "/history";
  const isSettings = pathname === "/settings";
  const isChat = pathname.startsWith("/chat/");

  return (
    <aside className={`
      ${theme === 'dark' ? 'bg-custom-dark-2' : 'bg-white'} z-50 transition-all duration-300
      fixed top-0 left-0 right-0 md:static
      flex md:flex-col items-center 
      justify-between
      h-16 md:h-full
      px-4 md:px-0 py-2 md:py-6
      md:w-20
      border-b md:border-r md:border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}
      md:rounded-full
    `}>
      <div className="flex md:flex-col items-center md:w-full">
      
        {/* Logo */}
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center md:mb-8">
          <Image
            src="/logo.svg"
            alt="Imago AI"
            width={28}
            height={28}
            className="md:w-8 md:h-8"
          />
        </div>

        {/* New Chat Button */}
        <button className="hidden md:flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 transition-all hover:scale-105 active:scale-95 hover:shadow-lg md:mb-8">
          <span className="text-2xl text-white">+</span>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className={`
        flex md:flex-col
        justify-center items-center gap-3
        md:static top-16 md:top-auto
        md:bg-transparent
        flex-1
      `}>
        <Link
          href="/"
          className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl transition-all hover:bg-opacity-10 active:bg-opacity-20 ${
            isHome 
              ? theme === 'dark' ? "bg-white/10" : "bg-gray-900/10" 
              : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-colors ${isHome 
            ? theme === 'dark' ? "stroke-white" : "stroke-gray-900"
            : theme === 'dark' ? "stroke-gray-400" : "stroke-gray-500"}`}>
            <path d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21M3 10C2.99993 9.70907 3.06333 9.42162 3.18579 9.15771C3.30824 8.89381 3.4868 8.65979 3.709 8.472L10.709 2.473C11.07 2.16791 11.5274 2.00052 12 2.00052C12.4726 2.00052 12.93 2.16791 13.291 2.473L20.291 8.472C20.5132 8.65979 20.6918 8.89381 20.8142 9.15771C20.9367 9.42162 21.0001 9.70907 21 10V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <Link
          href="/history"
          className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl transition-all hover:bg-opacity-10 active:bg-opacity-20 ${
            isHistory 
              ? theme === 'dark' ? "bg-white/10" : "bg-gray-900/10" 
              : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-colors ${isHistory 
            ? theme === 'dark' ? "fill-white" : "fill-gray-900"
            : theme === 'dark' ? "fill-gray-400" : "fill-gray-500"}`}>
            <path d="M12 21C9.7 21 7.69583 20.2375 5.9875 18.7125C4.27917 17.1875 3.3 15.2833 3.05 13H5.1C5.33333 14.7333 6.10417 16.1667 7.4125 17.3C8.72083 18.4333 10.25 19 12 19C13.95 19 15.6042 18.3208 16.9625 16.9625C18.3208 15.6042 19 13.95 19 12C19 10.05 18.3208 8.39583 16.9625 7.0375C15.6042 5.67917 13.95 5 12 5C10.85 5 9.775 5.26667 8.775 5.8C7.775 6.33333 6.93333 7.06667 6.25 8H9V10H3V4H5V6.35C5.85 5.28333 6.8875 4.45833 8.1125 3.875C9.3375 3.29167 10.6333 3 12 3C13.25 3 14.4208 3.2375 15.5125 3.7125C16.6042 4.1875 17.5542 4.82917 18.3625 5.6375C19.1708 6.44583 19.8125 7.39583 20.2875 8.4875C20.7625 9.57917 21 10.75 21 12C21 13.25 20.7625 14.4208 20.2875 15.5125C19.8125 16.6042 19.1708 17.5542 18.3625 18.3625C17.5542 19.1708 16.6042 19.8125 15.5125 20.2875C14.4208 20.7625 13.25 21 12 21ZM14.8 16.2L11 12.4V7H13V11.6L16.2 14.8L14.8 16.2Z"/>
          </svg>
        </Link>

        <Link 
          href="/settings" 
          className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl transition-all hover:bg-opacity-10 active:bg-opacity-20 ${
            isSettings 
              ? theme === 'dark' ? "bg-white/10" : "bg-gray-900/10" 
              : ""
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-colors ${isSettings 
            ? theme === 'dark' ? "fill-white" : "fill-gray-900"
            : theme === 'dark' ? "fill-gray-400" : "fill-gray-500"}`}>
            <path d="M7.5 16.5L14.5 14.5L16.5 7.5L9.5 9.5L7.5 16.5ZM12 13.5C11.5833 13.5 11.2292 13.3542 10.9375 13.0625C10.6458 12.7708 10.5 12.4167 10.5 12C10.5 11.5833 10.6458 11.2292 10.9375 10.9375C11.2292 10.6458 11.5833 10.5 12 10.5C12.4167 10.5 12.7708 10.6458 13.0625 10.9375C13.3542 11.2292 13.5 11.5833 13.5 12C13.5 12.4167 13.3542 12.7708 13.0625 13.0625C12.7708 13.3542 12.4167 13.5 12 13.5ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z"/>
          </svg>
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl transition-all hover:bg-opacity-10 active:bg-opacity-20"
        >
          {theme === 'dark' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors fill-white">
              <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors fill-gray-900">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* User Profile */}
      <div className="flex h-10 w-10 md:h-12 md:w-12 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 transition-all hover:scale-105 active:scale-95 hover:shadow-lg">
        <span className="text-base md:text-lg font-semibold text-white">MC</span>
      </div>
    </aside>
  );
};

export default Sidebar;
