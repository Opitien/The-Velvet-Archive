import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { KeyRound } from "lucide-react";

export function EntryGate() {
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  const handleKnock = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setIsOpening(true);
      setTimeout(() => {
        navigate("/lobby");
      }, 1500); // Wait for door animation
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-amber-50">
      {/* Background Door Texture */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={isOpening ? { scale: 1.1, filter: "brightness(0.2)" } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762186540749-5f7381afd428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMHRleHR1cmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjM4MjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark Wood Door"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </motion.div>

      {/* Door Opening Split Effect (Optional, simulated with overlay) */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div 
            className="relative z-10 flex h-full flex-col items-center justify-center p-4"
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* The Hatch / Input Area */}
            <div className="w-full max-w-md rounded-sm border-4 border-[#8B5E3C] bg-[#1A1A1A] p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm md:p-12">
              <div className="mb-8 text-center">
                <h1 className="font-['Cinzel'] text-3xl font-bold tracking-[0.2em] text-[#C5A059] md:text-4xl">
                  MEMBERS ONLY
                </h1>
                <p className="mt-2 font-['Playfair_Display'] text-sm italic text-stone-400">
                  Speak the phrase and enter.
                </p>
              </div>

              <form onSubmit={handleKnock} className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded opacity-20 bg-gradient-to-r from-[#C5A059] to-[#8B5E3C] blur transition duration-1000 group-hover:opacity-40"></div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password..."
                    className="relative w-full border-b-2 border-[#C5A059]/30 bg-transparent px-4 py-3 font-['Courier_Prime'] text-xl tracking-widest text-[#C5A059] placeholder-stone-600 outline-none transition-colors focus:border-[#C5A059]"
                    autoFocus
                  />
                  <KeyRound className="absolute right-3 top-3 h-6 w-6 text-[#C5A059]/40" />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-[#C5A059]/50 bg-[#2A1810] px-8 py-3 font-['Cinzel'] font-bold text-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.1)] transition-all hover:bg-[#3D2317] hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] active:scale-95"
                  >
                    <span className="relative z-10 tracking-[0.15em]">KNOCK</span>
                  </button>
                </div>
              </form>
              
              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-center font-['Playfair_Display'] text-red-900/80 bg-red-100/10 p-2 rounded border border-red-900/20"
                  >
                    The door remains shut. Try "velvet".
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Disclaimer for password hint */}
            <div className="absolute bottom-8 text-center text-xs text-stone-600/50">
              (Hint: The password is "velvet")
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Light coming through the opening door effect */}
      {isOpening && (
        <motion.div 
          className="absolute inset-0 z-20 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
        >
          {/* This is just a placeholder for the transition out */}
        </motion.div>
      )}
    </div>
  );
}
