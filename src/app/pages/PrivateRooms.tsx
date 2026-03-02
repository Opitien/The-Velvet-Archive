import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Lock, Unlock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { clsx } from "clsx";

const rooms = [
  {
    id: "lounge",
    name: "The Obsidian Lounge",
    desc: "A place for quiet reflection and strong spirits.",
    image: "https://images.unsplash.com/photo-1758127531848-7f1dcf8d2ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW1seSUyMGxpdCUyMGphenolMjBjbHViJTIwaW50ZXJpb3IlMjBzbW9rZXxlbnwxfHx8fDE3NzIzODIzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "poker",
    name: "The High Stakes Table",
    desc: "Where fortunes are made and lost in a single hand.",
    image: "https://images.unsplash.com/photo-1617565084998-13053b7d8510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBwYXJjaG1lbnQlMjBwYXBlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzY2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // Placeholder for poker table
  },
  {
    id: "music",
    name: "The Blue Note Chamber",
    desc: "The rehearsal room where the jazz never stops.",
    image: "https://images.unsplash.com/photo-1687359927083-cdaaa019accf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyMzUxMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function PrivateRooms() {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-[#C5A059]">
      <Link 
        to="/lobby" 
        className="fixed top-8 left-8 z-50 flex items-center gap-2 font-['Cinzel'] text-sm tracking-widest text-[#C5A059] transition-opacity hover:opacity-70"
      >
        <ArrowLeft className="h-4 w-4" />
        EXIT
      </Link>

      <div className="flex h-full w-full">
        {rooms.map((room) => {
          const isActive = activeRoom === room.id;
          const isOtherActive = activeRoom !== null && !isActive;

          return (
            <motion.div
              key={room.id}
              onClick={() => setActiveRoom(isActive ? null : room.id)}
              className={clsx(
                "relative h-full cursor-pointer overflow-hidden border-r border-[#C5A059]/20 transition-all duration-700 ease-in-out",
                isActive ? "flex-grow-[3]" : "flex-grow hover:flex-grow-[1.2]"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className={clsx(
                    "h-full w-full object-cover transition-all duration-700",
                    isActive ? "scale-110 blur-none opacity-40" : "scale-100 grayscale opacity-20 hover:opacity-30"
                  )}
                />
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  animate={{ 
                    rotate: isActive ? 0 : -90,
                    y: isActive ? 0 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="whitespace-nowrap"
                >
                  <h2 className={clsx(
                    "font-['Cinzel'] font-bold uppercase tracking-[0.2em] transition-all duration-500",
                    isActive ? "text-4xl md:text-6xl text-[#C5A059]" : "text-2xl text-stone-600"
                  )}>
                    {room.name}
                  </h2>
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.3 }}
                      className="mt-8 max-w-lg"
                    >
                      <p className="font-['Playfair_Display'] text-xl italic text-stone-300">
                        "{room.desc}"
                      </p>
                      <div className="mt-8 flex justify-center">
                        <button className="flex items-center gap-2 rounded border border-[#C5A059] px-6 py-2 font-['Cinzel'] text-sm uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-colors">
                          <Unlock className="h-4 w-4" />
                          Enter Room
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {!isActive && (
                   <div className="mt-4 opacity-50">
                     <Lock className="h-6 w-6 text-stone-600" />
                   </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
