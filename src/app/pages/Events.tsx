import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

function EventPoster({ title, date, desc, rotation, delay }: { title: string, date: string, desc: string, rotation: number, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      className="relative w-full max-w-sm cursor-pointer bg-[#e8dcc5] p-6 shadow-xl"
      style={{
        boxShadow: "5px 10px 20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Paper Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1617565084998-13053b7d8510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBwYXJjaG1lbnQlMjBwYXBlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyMzY2MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral")`,
          backgroundSize: 'cover'
        }}
      />
      
      {/* Pin */}
      <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-red-900 shadow-md border-2 border-black/20 z-20">
        <div className="absolute top-1 left-2 h-2 w-2 rounded-full bg-white/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center border-4 border-double border-[#2A1810] p-4 text-center">
        <h3 className="mb-2 font-['Cinzel'] text-2xl font-bold uppercase tracking-wider text-[#2A1810]">
          {title}
        </h3>
        <div className="mb-4 h-px w-16 bg-[#2A1810]" />
        <p className="mb-4 font-['Courier_Prime'] text-sm font-bold uppercase text-[#8B5E3C]">
          {date}
        </p>
        <p className="font-['Playfair_Display'] text-sm italic text-[#5D4037]">
          {desc}
        </p>
        
        {/* Stamp */}
        <div className="mt-6 rotate-[-15deg] rounded border-2 border-red-900/50 p-1 px-3 font-['Courier_Prime'] text-xs font-bold uppercase text-red-900/70">
          Exclusive
        </div>
      </div>
    </motion.div>
  );
}

export function Events() {
  const events = [
    {
      title: "Midnight Jazz",
      date: "Every Friday • 11PM",
      desc: "Featuring the ghost of Buddy Bolden and the Midnight Quartet.",
      rotation: -3,
    },
    {
      title: "Poetry & Gin",
      date: "Tuesday • 8PM",
      desc: "Readings from the lost generation. Gin provided by the house.",
      rotation: 4,
    },
    {
      title: "Whiskey Tasting",
      date: "Last Saturday • 9PM",
      desc: "Imported straight from the Scottish highlands via secret channels.",
      rotation: -5,
    },
    {
      title: "Velvet Anniversary",
      date: "Oct 31st • Midnight",
      desc: "A celebration of shadows. Masks required.",
      rotation: 2,
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1a110d]">
      {/* Cork/Wood Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762186540749-5f7381afd428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMHRleHR1cmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjM4MjM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wood Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8">
        <Link 
          to="/lobby" 
          className="group flex items-center gap-2 font-['Cinzel'] text-sm tracking-widest text-[#e8dcc5] transition-colors hover:text-[#C5A059]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          BACK
        </Link>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8 pt-24">
        <h1 className="mb-12 font-['Cinzel'] text-5xl font-bold tracking-[0.2em] text-[#e8dcc5] drop-shadow-lg md:text-6xl text-center">
          UPCOMING AFFAIRS
        </h1>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {events.map((evt, i) => (
            <EventPoster
              key={i}
              {...evt}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
