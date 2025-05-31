export const ActionButton = ({ card, onClick }: { card: any, onClick: () => void }) => {

  return               (
<div 
  style={{
    background: `linear-gradient(to right, ${card.color}, ${card.color}10)`
  }}
  className="rounded-xl p-[1px] -z-0"
>
                <button
                  onClick={onClick}
                  className="group relative w-full overflow-hidden rounded-xl border-[1px] border-white/5 bg-[#2A2A2A] p-6 text-left transition-colors hover:bg-[#3A3A3A] text-white"
                 
                >
                  <h3 className="h-[100px] text-lg font-medium">
                    {card.title}
                  </h3>

                  <div className="border-custom-dark-2 absolute -right-[10px] -bottom-[10px] rounded-xl border-[8px] z-30">
                   <div className="w-full h-full flex items-center justify-center rounded-xl p-[1px]"
                    
                    style={{ color: card.color,
 background: `linear-gradient(to right, ${card.color}, ${card.color}10)`
                     }}
                   >

                    <div className={`transition-colors group-hover:text-white w-full h-full flex items-center justify-center p-4 rounded-xl
                    bg-custom-dark-3
                    `}
                    
                    >
                      {card.icon}
                    </div>
                   </div>

                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </div>
  );
};