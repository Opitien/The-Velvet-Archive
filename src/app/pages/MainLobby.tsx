import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, Info, Music, Calendar, DoorOpen, Users } from "lucide-react";
import { clsx } from "clsx";

interface DisguisedLinkProps {
  to: string;
  src: string;
  alt: string;
  label: string;
  className?: string;
  icon?: React.ReactNode;
  rotation?: number;
}

function DisguisedLink({ to, src, alt, label, className, icon, rotation = 0 }: DisguisedLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={to} 
      className={clsx("group absolute block transition-transform duration-500 hover:scale-105 hover:z-20", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: rotation }}
          whileHover={{ rotate: rotation + (Math.random() > 0.5 ? 2 : -2) }}
          className="relative drop-shadow-2xl filter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]"
        >
          <ImageWithFallback
            src={src}
            alt={alt}
            className="h-auto w-full object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>

        {/* Label Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-3 py-1 font-['Cinzel'] text-sm tracking-widest text-[#C5A059] backdrop-blur-md border border-[#C5A059]/30"
        >
          <div className="flex items-center gap-2">
            {icon}
            {label}
          </div>
        </motion.div>
      </div>
    </Link>
  );
}

export function MainLobby() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758127531848-7f1dcf8d2ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW1seSUyMGxpdCUyMGphenolMjBjbHViJTIwaW50ZXJpb3IlMjBzbW9rZXxlbnwxfHx8fDE3NzIzODIzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Lobby Background"
          className="h-full w-full object-cover opacity-40 blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Header */}
      <div className="absolute top-8 left-0 right-0 z-10 text-center">
        <h1 className="font-['Cinzel'] text-4xl font-bold tracking-[0.3em] text-[#C5A059] drop-shadow-lg opacity-80 md:text-6xl">
          THE VELVET ARCHIVE
        </h1>
        <p className="mt-2 font-['Playfair_Display'] text-sm italic tracking-widest text-stone-400">
          EST. 1923
        </p>
      </div>

      {/* Interactive Scene */}
      <div className="absolute inset-0 z-10 flex items-end justify-center pb-12 md:pb-24">
        <div className="relative h-[60vh] w-full max-w-6xl px-4">
          
          {/* Whiskey Bottle -> Story */}
          <DisguisedLink
            to="/story"
            src="https://images.unsplash.com/photo-1592199664587-e20242243ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd2hpc2tleSUyMGJvdHRsZSUyMGxhYmVsfGVufDF8fHx8MTc3MjM4MjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Whiskey Bottle"
            label="The Club Story"
            className="bottom-0 left-[10%] w-32 md:w-48"
            rotation={-5}
            icon={<Info className="h-4 w-4" />}
          />

          {/* Matchbox -> Events */}
          <DisguisedLink
            to="/events"
            src="https://images.unsplash.com/photo-1611176682835-871a38ddc9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGJveCUyMHZpbnRhZ2V8ZW58MXx8fHwxNzcyMzgyMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Matchbox"
            label="Events"
            className="bottom-4 left-[35%] w-24 md:w-36"
            rotation={15}
            icon={<Calendar className="h-4 w-4" />}
          />

          {/* Vinyl -> Jazz Nights (Membership in prompt was parchment, Jazz was vinyl) */}
          <DisguisedLink
            to="/events" // Pointing to events as per "Live Jazz Nights"
            src="https://images.unsplash.com/photo-1687359927083-cdaaa019accf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzcyMzUxMzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Vinyl Record"
            label="Live Jazz"
            className="bottom-2 right-[30%] w-32 md:w-48 !rounded-full border-4 border-[#1a1a1a] shadow-xl"
            rotation={0}
            icon={<Music className="h-4 w-4" />}
          />

          {/* Parchment -> Membership */}
          <DisguisedLink
            to="/membership"
            src="https://images.unsplash.com/photo-1617565084998-13053b7d8510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxvbGQlMjBwYXJjaG1lbnQlMjBwYXBlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzY2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Membership Scroll"
            label="Membership"
            className="bottom-0 right-[5%] w-32 md:w-40 opacity-90 mix-blend-screen"
            rotation={10}
            icon={<Users className="h-4 w-4" />}
          />

          {/* Hidden Door Trigger (Center Back) */}
          <Link
            to="/rooms"
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
          >
            <div className="relative h-64 w-40 opacity-0 bg-white/5 hover:opacity-10 transition-opacity duration-700 rounded-t-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center">
              <span className="font-['Cinzel'] text-white/50 text-xs tracking-widest uppercase">Private Rooms</span>
            </div>
            {/* Glow effect behind the door area */}
            <div className="absolute inset-0 -z-10 bg-amber-500/0 blur-3xl transition-colors duration-1000 group-hover:bg-amber-500/10" />
          </Link>

        </div>
      </div>
      
      {/* Footer / Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center opacity-30 hover:opacity-100 transition-opacity duration-500">
        <p className="font-['Courier_Prime'] text-xs text-stone-500">
          Explore the objects to uncover secrets.
        </p>
      </div>
    </div>
  );
}
