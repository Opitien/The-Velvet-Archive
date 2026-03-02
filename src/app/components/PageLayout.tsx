import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PageLayout({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) {
  return (
    <div className="relative min-h-screen w-full overflow-y-auto bg-[#0a0a0a] pb-20 text-[#D4C4A8]">
      {/* Background Texture (Leather/Dark) */}
      <div className="fixed inset-0 z-0 opacity-40">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761078739411-2ccb6e956c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB2ZWx2ZXQlMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzIzODIzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8">
        <Link 
          to="/lobby" 
          className="group flex items-center gap-2 font-['Cinzel'] text-sm tracking-widest text-[#C5A059] transition-colors hover:text-[#E5C079]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          RETURN TO LOBBY
        </Link>
        <div className="h-px w-32 bg-[#C5A059]/30 hidden md:block" />
      </div>

      {/* Content Container (Parchment Style) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mx-auto mt-24 max-w-4xl px-6 md:mt-32"
      >
        <div className="relative overflow-hidden rounded-sm bg-[#e8dcc5] p-1 shadow-2xl">
          {/* Inner Border/Texture */}
          <div className="relative border-4 border-double border-[#2A1810] bg-[#e8dcc5] p-8 md:p-16">
            <div 
              className="absolute inset-0 opacity-40 mix-blend-multiply"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1617565084998-13053b7d8510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBwYXJjaG1lbnQlMjBwYXBlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzY2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")`,
                backgroundSize: 'cover'
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 text-[#2A1810]">
              <div className="mb-12 text-center">
                <h1 className="mb-4 font-['Cinzel'] text-4xl font-bold uppercase tracking-widest text-[#2A1810] md:text-5xl border-b-2 border-[#2A1810] inline-block pb-4 px-8">
                  {title}
                </h1>
                {subtitle && (
                  <p className="font-['Playfair_Display'] text-lg italic text-[#5D4037]">
                    {subtitle}
                  </p>
                )}
              </div>
              
              <div className="font-['Playfair_Display'] text-lg leading-relaxed md:text-xl text-justify">
                {children}
              </div>

              {/* Decorative signature or footer mark */}
              <div className="mt-16 flex justify-center opacity-70">
                <div className="h-16 w-16 rounded-full border border-[#2A1810] p-1">
                  <div className="h-full w-full rounded-full border border-[#2A1810] flex items-center justify-center font-['Cinzel'] text-[10px] tracking-widest uppercase">
                    Est. 1923
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
