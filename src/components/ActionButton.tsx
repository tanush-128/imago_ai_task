import { useTheme } from "next-themes";

export const ActionButton = ({ card, onClick }: { card: any, onClick: () => void }) => {

  const { theme } = useTheme(); 
  return               (
<div 
  style={{
    background: `linear-gradient(to bottom right, ${card.color}50, ${card.color}00)`,
    transition: 'all 0.3s ease-in-out'
  }}
  className="rounded-xl p-[1px] -z-0 w-[240px] h-[200px] flex items-center justify-center hover:scale-[1.02]"
>
                <button
                  onClick={onClick}
                  className={`group flex items-start relative w-full h-full overflow-hidden rounded-xl ${theme === 'dark' ? 'bg-[#2A2A2A]' : 'bg-[#FFFFFF]'} text-left transition-all duration-300 ease-in-out  text-black`}
                >
                  <h3 className={`text-lg font-medium p-4 transition-transform duration-300 group-hover:translate-x-1 ${theme === 'dark' ? 'text-white' : 'text-slate-500 '}`}>
                    {card.title}
                  </h3>

                  <div className="absolute -right-[10px] -bottom-[10px] rounded-xl box-border  transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]"
                  style={{ color: card.color,
                    background: `linear-gradient(to bottom right, ${card.color}50, ${card.color}00)`
                  }}
                  >
                   <div className={`w-full h-full flex items-center justify-center rounded-xl p-[1px] ${theme === 'dark' ? 'border-custom-dark-2' : 'border-custom-light-2'}  border-[1px] border-b-[8px] border-r-[8px] transition-all duration-300 group-hover:border-b-[4px] group-hover:border-r-[4px]`}
                   >
                    <div className={`transition-all duration-300 group-hover:text-white w-full h-full flex items-center justify-center p-4 rounded-xl ${theme === 'dark' ? 'bg-[#2A2A2A]' : 'bg-[#FFFFFF]'} s`}
                    >
                      {card.icon}
                    </div>
                   </div>
                  </div>

                  {/* Gradient overlay on hover */}
                  {/* <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10' : 'bg-blue-500/10 bg-opacity-10 '} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} /> */}
                </button>
              </div>
  );
};