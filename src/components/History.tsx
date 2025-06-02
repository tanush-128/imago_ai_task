import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const History = () => {
  const { theme } = useTheme();
  // Dummy data for chat sessions
  const chatSessions = [
    {
      id: 1,
      title: "Sales Analysis Q1 2024",
      date: "2024-03-15",
      preview: "Analysis of sales performance and trends for Q1 2024...",
      metrics: {
        revenue: "$245,000",
        growth: "+12.5%",
        customers: "1,234"
      }
    },
    {
      id: 2,
      title: "Customer Behavior Insights",
      date: "2024-03-14",
      preview: "Deep dive into customer purchasing patterns and preferences...",
      metrics: {
        revenue: "$189,000",
        growth: "+8.3%",
        customers: "987"
      }
    },
    {
      id: 3,
      title: "Marketing Campaign Results",
      date: "2024-03-13",
      preview: "Analysis of recent marketing campaign performance and ROI...",
      metrics: {
        revenue: "$156,000",
        growth: "+15.2%",
        customers: "756"
      }
    },
    {
      id: 4,
      title: "Product Performance Review",
      date: "2024-03-12",
      preview: "Comprehensive review of product performance metrics...",
      metrics: {
        revenue: "$198,000",
        growth: "+9.7%",
        customers: "1,089"
      }
    },
    {
      id: 5,
      title: "Competitive Analysis",
      date: "2024-03-11",
      preview: "Market position analysis and competitive landscape review...",
      metrics: {
        revenue: "$167,000",
        growth: "+7.8%",
        customers: "892"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 sm:p-8 md:p-12 w-full"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="rounded-full w-12 h-12"
            >
              <Image src="/logo.svg" alt="Imago AI" width={48} height={48} className="w-full h-full" />
            </motion.div>
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Chat History</h1>
          </div>
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 rounded-lg ${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-black/5'} ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} border-[1px]`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Search History
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-sm text-white hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              New Chat
            </motion.button>
          </div>
        </motion.div>

        {/* Chat Sessions List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=""
        >
          {chatSessions.map((session) => (
            <motion.div
              key={session.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={`/chat/${session.id}`}>
                <div className={`${theme === 'dark' ? 'bg-custom-dark-3' : 'bg-custom-light-1'} rounded-xl border-[1px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} p-6 ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors cursor-pointer my-2`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{session.title}</h3>
                        <span className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>{session.date}</span>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gray-600'} mb-4`}>{session.preview}</p>
                      <div className="flex gap-6">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                          <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Revenue: {session.metrics.revenue}</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                          <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Growth: {session.metrics.growth}</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                          <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>Customers: {session.metrics.customers}</span>
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-800 hover:bg-black/5'} rounded-lg`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 16V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V16M16 8L12 4M12 4L8 8M12 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-800 hover:bg-black/5'} rounded-lg`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default History; 