import { useChatContext } from "../context/ChatContext";
import { ActionButton } from "./ActionButton";
import { motion } from "framer-motion";

const Welcome = () => {
  const { setMessage } = useChatContext();
  const actionCards = [
    {
      title: "Create an image for my presentation",
      icon: (
       <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21.5C4.45 21.5 3.97917 21.3042 3.5875 20.9125C3.19583 20.5208 3 20.05 3 19.5V5.5C3 4.95 3.19583 4.47917 3.5875 4.0875C3.97917 3.69583 4.45 3.5 5 3.5H10V5.5H5V19.5H19V14.15L21 16.15V19.5C21 20.05 20.8042 20.5208 20.4125 20.9125C20.0208 21.3042 19.55 21.5 19 21.5H5ZM6 17.5L9 13.5L11.25 16.5L14.25 12.5L18 17.5H6ZM21.55 13.9L18.45 10.8C18.1 11.0333 17.725 11.2083 17.325 11.325C16.925 11.4417 16.5 11.5 16.05 11.5C14.8167 11.5 13.7667 11.0625 12.9 10.1875C12.0333 9.3125 11.6 8.25 11.6 7C11.6 5.75 12.0375 4.6875 12.9125 3.8125C13.7875 2.9375 14.85 2.5 16.1 2.5C17.35 2.5 18.4125 2.9375 19.2875 3.8125C20.1625 4.6875 20.6 5.75 20.6 7C20.6 7.45 20.5333 7.88333 20.4 8.3C20.2667 8.71667 20.1 9.1 19.9 9.45L22.95 12.5L21.55 13.9ZM16.1 9.5C16.8 9.5 17.3917 9.25833 17.875 8.775C18.3583 8.29167 18.6 7.7 18.6 7C18.6 6.3 18.3583 5.70833 17.875 5.225C17.3917 4.74167 16.8 4.5 16.1 4.5C15.4 4.5 14.8083 4.74167 14.325 5.225C13.8417 5.70833 13.6 6.3 13.6 7C13.6 7.7 13.8417 8.29167 14.325 8.775C14.8083 9.25833 15.4 9.5 16.1 9.5Z" fill="#2F82EF"/>
</svg>

      ),
      color: "#223FFA",
    },
    {
      title: "What to do with kids' art",
      icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.5C11.45 22.5 10.9792 22.3042 10.5875 21.9125C10.1958 21.5208 10 21.05 10 20.5H14C14 21.05 13.8042 21.5208 13.4125 21.9125C13.0208 22.3042 12.55 22.5 12 22.5ZM8 19.5V17.5H16V19.5H8ZM8.25 16.5C7.1 15.8167 6.1875 14.9 5.5125 13.75C4.8375 12.6 4.5 11.35 4.5 10C4.5 7.91667 5.22917 6.14583 6.6875 4.6875C8.14583 3.22917 9.91667 2.5 12 2.5C14.0833 2.5 15.8542 3.22917 17.3125 4.6875C18.7708 6.14583 19.5 7.91667 19.5 10C19.5 11.35 19.1625 12.6 18.4875 13.75C17.8125 14.9 16.9 15.8167 15.75 16.5H8.25ZM8.85 14.5H15.15C15.9 13.9667 16.4792 13.3083 16.8875 12.525C17.2958 11.7417 17.5 10.9 17.5 10C17.5 8.46667 16.9667 7.16667 15.9 6.1C14.8333 5.03333 13.5333 4.5 12 4.5C10.4667 4.5 9.16667 5.03333 8.1 6.1C7.03333 7.16667 6.5 8.46667 6.5 10C6.5 10.9 6.70417 11.7417 7.1125 12.525C7.52083 13.3083 8.1 13.9667 8.85 14.5Z" fill="#F1A62D"/>
</svg>

      ),
      color: "#FF7F00",
    },
    {
      title: "Find the decade that a photo is from",
      icon: (
   <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.5C13.25 16.5 14.3125 16.0625 15.1875 15.1875C16.0625 14.3125 16.5 13.25 16.5 12C16.5 10.75 16.0625 9.6875 15.1875 8.8125C14.3125 7.9375 13.25 7.5 12 7.5C10.75 7.5 9.6875 7.9375 8.8125 8.8125C7.9375 9.6875 7.5 10.75 7.5 12C7.5 13.25 7.9375 14.3125 8.8125 15.1875C9.6875 16.0625 10.75 16.5 12 16.5ZM12 14.7C11.25 14.7 10.6125 14.4375 10.0875 13.9125C9.5625 13.3875 9.3 12.75 9.3 12C9.3 11.25 9.5625 10.6125 10.0875 10.0875C10.6125 9.5625 11.25 9.3 12 9.3C12.75 9.3 13.3875 9.5625 13.9125 10.0875C14.4375 10.6125 14.7 11.25 14.7 12C14.7 12.75 14.4375 13.3875 13.9125 13.9125C13.3875 14.4375 12.75 14.7 12 14.7ZM12 19.5C9.56667 19.5 7.35 18.8208 5.35 17.4625C3.35 16.1042 1.9 14.2833 1 12C1.9 9.71667 3.35 7.89583 5.35 6.5375C7.35 5.17917 9.56667 4.5 12 4.5C14.4333 4.5 16.65 5.17917 18.65 6.5375C20.65 7.89583 22.1 9.71667 23 12C22.1 14.2833 20.65 16.1042 18.65 17.4625C16.65 18.8208 14.4333 19.5 12 19.5ZM12 17.5C13.8833 17.5 15.6125 17.0042 17.1875 16.0125C18.7625 15.0208 19.9667 13.6833 20.8 12C19.9667 10.3167 18.7625 8.97917 17.1875 7.9875C15.6125 6.99583 13.8833 6.5 12 6.5C10.1167 6.5 8.3875 6.99583 6.8125 7.9875C5.2375 8.97917 4.03333 10.3167 3.2 12C4.03333 13.6833 5.2375 15.0208 6.8125 16.0125C8.3875 17.0042 10.1167 17.5 12 17.5Z" fill="#37C390"/>
</svg>

      ),
      color: "#37C390",
    },
  ];

  const handleActionClick = (title: string) => {
    setMessage(title);
  };

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
      className="min-h-screen p-4 sm:p-8 md:p-12"
    >
      <div className="mx-auto">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2 text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Hi Milano Cherry
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 md:mb-12 text-xl sm:text-2xl md:text-3xl text-gray-400"
          >
            How can I help you today
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
        >
          {/* Action Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full lg:w-auto"
          >
            {actionCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ActionButton card={card} onClick={() => handleActionClick(card.title)} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-[400px] lg:w-[400px] hidden md:block"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="bot.svg" 
              alt="Welcome" 
              className="w-full h-auto" 
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Welcome;
