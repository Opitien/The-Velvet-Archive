import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { toast } from "sonner";
import { motion } from "motion/react";

export function Membership() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Request received. We will be in touch.", {
        style: {
          background: "#1a1a1a",
          color: "#C5A059",
          borderColor: "#C5A059",
          fontFamily: "Playfair Display",
        }
      });
    }, 1500);
  };

  return (
    <PageLayout title="Membership" subtitle="Not All Who Knock Are Let In.">
      <div className="mx-auto max-w-lg space-y-8 text-[#2A1810]">
        <div className="text-center font-['Playfair_Display'] italic opacity-80">
          <p>Discretion required.</p>
          <p>Dress code: Evening formal.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group relative">
            <label className="mb-1 block font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
              Full Name
            </label>
            <input 
              required
              type="text" 
              className="w-full border-b border-[#8B5E3C] bg-transparent px-2 py-3 font-['Courier_Prime'] text-lg text-[#2A1810] outline-none transition-colors focus:border-[#2A1810]"
              placeholder="Enter your name..."
            />
          </div>

          <div className="group relative">
            <label className="mb-1 block font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
              Contact
            </label>
            <input 
              required
              type="email" 
              className="w-full border-b border-[#8B5E3C] bg-transparent px-2 py-3 font-['Courier_Prime'] text-lg text-[#2A1810] outline-none transition-colors focus:border-[#2A1810]"
              placeholder="Where should we reach you?"
            />
          </div>

          <div className="group relative">
            <label className="mb-1 block font-['Cinzel'] text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
              Reason for Entry
            </label>
            <textarea 
              required
              rows={4}
              className="w-full resize-none border-b border-[#8B5E3C] bg-transparent px-2 py-3 font-['Courier_Prime'] text-lg text-[#2A1810] outline-none transition-colors focus:border-[#2A1810]"
              placeholder="Why do you seek the Archive?"
            />
          </div>

          <div className="pt-8 text-center">
            <button
              disabled={isSubmitting}
              type="submit"
              className="group relative inline-flex items-center justify-center overflow-hidden border border-[#2A1810] px-12 py-4 font-['Cinzel'] font-bold uppercase tracking-[0.2em] text-[#2A1810] transition-all hover:bg-[#2A1810] hover:text-[#e8dcc5] disabled:opacity-50"
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Request Invitation"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}
