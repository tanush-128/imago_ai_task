import Image from "next/image";
import { useChatContext } from "../context/ChatContext";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Chat = () => {
  const { messages } = useChatContext();
  const { theme } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-8 md:p-12 w-full"
    >
      <div className="mx-auto w-full">
        <AnimatePresence>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-8"
          >
            <UserMessage message="Show me sales data for the last 6 months" />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 sm:mb-8"
          >
            <BotMessage 
              message={`
               
              `} 
              heading="Sales Analysis"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const UserMessage = ({ message }: { message: string }) => {
  const { theme } = useTheme();
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="flex items-center justify-end gap-2 sm:gap-4"
    >
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className={`${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} rounded-xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-1.5 sm:p-2`}
      >
        <svg
          width="20"
          height="20"
          className="sm:w-6 sm:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.99998H5C4.46957 2.99998 3.96086 3.2107 3.58579 3.58577C3.21071 3.96084 3 4.46955 3 4.99998V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12M18.375 2.62498C18.7728 2.22716 19.3124 2.00366 19.875 2.00366C20.4376 2.00366 20.9772 2.22716 21.375 2.62498C21.7728 3.02281 21.9963 3.56237 21.9963 4.12498C21.9963 4.68759 21.7728 5.22716 21.375 5.62498L12.362 14.639C12.1245 14.8762 11.8312 15.0499 11.509 15.144L8.636 15.984C8.54995 16.0091 8.45874 16.0106 8.37191 15.9883C8.28508 15.9661 8.20583 15.9209 8.14245 15.8575C8.07907 15.7942 8.03389 15.7149 8.01164 15.6281C7.9894 15.5412 7.9909 15.45 8.016 15.364L8.856 12.491C8.95053 12.169 9.12453 11.876 9.362 11.639L18.375 2.62498Z"
            stroke={theme === 'dark' ? "#7C7676" : "#4B5563"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className={`${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} flex items-center gap-2 sm:gap-4 rounded-xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} px-3 sm:px-5 py-2 sm:py-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
      >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-500"
        >
          <span className="text-base sm:text-lg font-semibold text-white">MC</span>
        </motion.div>
        <div className="text-sm sm:text-base">
          {message}
        </div>
      </motion.div>
    </motion.div>
  );
};

const BotMessage = ({ message, heading }: { message: string, heading: string }) => {
  const { theme } = useTheme();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <div className="flex justify-start items-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className={`${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} flex flex-col gap-4 rounded-xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-5 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} flex-grow`}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex items-center gap-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} pb-4`}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="rounded-full w-12 h-12"
            >
              <Image src="/logo.svg" alt="Imago AI" width={48} height={48} className="w-full h-full" />
            </motion.div>
            <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-center`}>{heading}</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="ml-0 sm:ml-[60px] h-[400px] overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="flex w-full gap-4 items-center">
                <div className={`${theme === 'dark' ? 'bg-custom-dark-4' : 'bg-custom-light-2'} rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} flex-1 p-6`}>
                  <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Monthly Sales Performance 2024</h3>
                  <div className="relative h-[300px] flex items-end justify-between gap-2 mb-6 px-2">
                    <div style={{height: "180px"}} className="w-full max-w-[50px] bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg relative group">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        $65,200
                      </div>
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Jan</div>
                    </div>
                    <div style={{height: "225px"}} className="w-full max-w-[50px] bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg relative group">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        $78,900
                      </div>
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Feb</div>
                    </div>
                    <div style={{height: "135px"}} className="w-full max-w-[50px] bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg relative group">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        $52,300
                      </div>
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Mar</div>
                    </div>
                    <div style={{height: "270px"}} className="w-full max-w-[50px] bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg relative group">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        $92,500
                      </div>
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Apr</div>
                    </div>
                    <div style={{height: "195px"}} className="w-full max-w-[50px] bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg relative group">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        $68,800
                      </div>
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>May</div>
                    </div>
                    <div style={{height: "240px"}} className="w-full max-w-[50px] bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-lg relative group">
                      <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'} px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        $84,100
                      </div>
                      <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Jun</div>
                    </div>
                    <div className={`absolute left-0 bottom-0 w-full h-[1px] ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}></div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className={`${theme === 'dark' ? 'bg-custom-dark-4' : 'bg-custom-light-2'} rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-6`}>
                    <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Key Insights</h4>
                    <ul className={`space-y-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                        Highest sales: April ($92,500)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        Lowest sales: March ($52,300)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                        Average monthly sales: $73,633
                      </li>
                    </ul>
                  </div>
                  <div className={`${theme === 'dark' ? 'bg-custom-dark-4' : 'bg-custom-light-2'} rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-6`}>
                    <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Trends</h4>
                    <div className={`space-y-2 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                      <p>Strong recovery observed after March dip, with April showing exceptional performance.</p>
                      <p>Q2 average is 25% higher than Q1, indicating positive growth trajectory.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className={`${theme === 'dark' ? 'bg-custom-dark-4' : 'bg-custom-light-2'} rounded-xl border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-6`}>
                  <h4 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white/90' : 'text-gray-800'}`}>Recommendations</h4>
                  <div className={`space-y-3 text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                    <p>Based on the analysis of your sales data, here are key recommendations:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Investigate March's performance drop to prevent future occurrences</li>
                      <li>Replicate April's successful strategies across other months</li>
                      <li>Maintain the positive momentum seen in Q2</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} hidden sm:flex flex-col gap-2 rounded-xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-2 sm:p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        >
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center rounded-full p-1.5 sm:p-2 ${theme === 'dark' ? 'text-gray-400 hover:bg-white/10 hover:text-white' : 'text-gray-500 hover:bg-black/5 hover:text-gray-800'}`}
          >
            <svg
              width="18"
              height="18"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.5C21 10.1131 20.0518 7.82387 18.364 6.13604C16.6761 4.44821 14.3869 3.5 12 3.5C9.48395 3.50947 7.06897 4.49122 5.26 6.24L3 8.5M3 8.5V3.5M3 8.5H8M3 12.5C3 14.8869 3.94821 17.1761 5.63604 18.864C7.32387 20.5518 9.61305 21.5 12 21.5C14.516 21.4905 16.931 20.5088 18.74 18.76L21 16.5M21 16.5H16M21 16.5V21.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full p-1.5 sm:p-2 text-gray-400 hover:bg-white/10 hover:text-white`}
          >
            <svg
              width="18"
              height="18"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.5V22.5M15 6.38L14 10.5H19.83C20.1405 10.5 20.4467 10.5723 20.7244 10.7111C21.0021 10.85 21.2437 11.0516 21.43 11.3C21.6163 11.5484 21.7422 11.8367 21.7977 12.1422C21.8533 12.4477 21.8369 12.7619 21.75 13.06L19.42 21.06C19.2988 21.4754 19.0462 21.8404 18.7 22.1C18.3538 22.3596 17.9327 22.5 17.5 22.5H4C3.46957 22.5 2.96086 22.2893 2.58579 21.9142C2.21071 21.5391 2 21.0304 2 20.5V12.5C2 11.9696 2.21071 11.4609 2.58579 11.0858C2.96086 10.7107 3.46957 10.5 4 10.5H6.76C7.13208 10.4998 7.49674 10.3958 7.81296 10.1997C8.12917 10.0036 8.38442 9.72321 8.55 9.39L12 2.5C12.4716 2.50584 12.9357 2.61817 13.3578 2.8286C13.7799 3.03902 14.1489 3.34211 14.4374 3.7152C14.7259 4.0883 14.9263 4.52176 15.0237 4.9832C15.1212 5.44464 15.113 5.92213 15 6.38Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full p-1.5 sm:p-2 text-gray-400 hover:bg-white/10 hover:text-white`}
          >
            <svg
              width="18"
              height="18"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 14.5V2.5M8.99992 18.62L9.99992 14.5H4.16992C3.85943 14.5 3.55321 14.4277 3.27549 14.2889C2.99778 14.15 2.75622 13.9484 2.56992 13.7C2.38363 13.4516 2.25772 13.1633 2.20218 12.8578C2.14664 12.5523 2.16298 12.2381 2.24992 11.94L4.57992 3.94C4.70109 3.52457 4.95373 3.15964 5.29992 2.9C5.64611 2.64036 6.06718 2.5 6.49992 2.5H19.9999C20.5304 2.5 21.0391 2.71071 21.4141 3.08579C21.7892 3.46086 21.9999 3.96957 21.9999 4.5V12.5C21.9999 13.0304 21.7892 13.5391 21.4141 13.9142C21.0391 14.2893 20.5304 14.5 19.9999 14.5H17.2399C16.8678 14.5002 16.5032 14.6042 16.187 14.8003C15.8707 14.9964 15.6155 15.2768 15.4499 15.61L11.9999 22.5C11.5283 22.4942 11.0642 22.3818 10.6421 22.1714C10.2201 21.961 9.85099 21.6579 9.56252 21.2848C9.27404 20.9117 9.07361 20.4782 8.97618 20.0168C8.87876 19.5554 8.88688 19.0779 8.99992 18.62Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full p-1.5 sm:p-2 text-gray-400 hover:bg-white/10 hover:text-white`}
          >
            <svg
              width="18"
              height="18"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8M9 2.5H15C15.5523 2.5 16 2.94772 16 3.5V5.5C16 6.05228 15.5523 6.5 15 6.5H9C8.44772 6.5 8 6.05228 8 5.5V3.5C8 2.94772 8.44772 2.5 9 2.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full p-1.5 sm:p-2 text-gray-400 hover:bg-white/10 hover:text-white`}
          >
            <svg
              width="18"
              height="18"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 9.5C16.6491 10.3655 17 11.4181 17 12.5C17 13.5819 16.6491 14.6345 16 15.5M19.364 18.864C20.1997 18.0283 20.8627 17.0361 21.315 15.9442C21.7673 14.8522 22.0001 13.6819 22.0001 12.5C22.0001 11.3181 21.7673 10.1478 21.315 9.05582C20.8627 7.96389 20.1997 6.97173 19.364 6.136M11 5.202C10.9998 5.06271 10.9583 4.92661 10.8809 4.81086C10.8034 4.69511 10.6934 4.6049 10.5647 4.55163C10.436 4.49835 10.2944 4.48439 10.1577 4.51151C10.0211 4.53863 9.89559 4.60561 9.797 4.704L6.413 8.087C6.2824 8.21838 6.12703 8.32253 5.95589 8.39342C5.78475 8.46432 5.60124 8.50054 5.416 8.5H3C2.73478 8.5 2.48043 8.60536 2.29289 8.79289C2.10536 8.98043 2 9.23478 2 9.5V15.5C2 15.7652 2.10536 16.0196 2.29289 16.2071C2.48043 16.3946 2.73478 16.5 3 16.5H5.416C5.60124 16.4995 5.78475 16.5357 5.95589 16.6066C6.12703 16.6775 6.2824 16.7816 6.413 16.913L9.796 20.297C9.8946 20.3958 10.0203 20.4631 10.1572 20.4904C10.2941 20.5177 10.436 20.5037 10.5649 20.4503C10.6939 20.3968 10.804 20.3063 10.8815 20.1902C10.959 20.0741 11.0002 19.9376 11 19.798V5.202Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center gap-4 mt-2"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 rounded-lg ${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-black/5'} ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} border-[1px]`}
        >
          <svg width="16" height="16" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add to Your Reports
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 rounded-lg ${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-black/5'} ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} border-[1px]`}
        >
          <svg width="16" height="16" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 rounded-lg ${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-black/5'} ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} border-[1px]`}
        >
          <svg width="16" height="16" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9V13M12 17H12.01M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          More Sources
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Chat;
