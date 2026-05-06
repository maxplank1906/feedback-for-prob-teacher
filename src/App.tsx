import { motion, AnimatePresence } from "motion/react";
import React, { useState, useMemo, useEffect } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from "recharts";
import { 
  Percent, 
  Sparkles, 
  Flame, 
  Zap, 
  Binary, 
  TrendingUp, 
  Award,
  Heart,
  Brain,
  Star
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Data for the "Vibe Distribution"
const bellCurveData = Array.from({ length: 41 }, (_, i) => {
  const x = (i - 20) / 5;
  const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
  return {
    x: i - 20,
    y: parseFloat(y.toFixed(4)),
    label: i === 35 ? "MS Javeria" : ""
  };
});

const feedbackGems = [
  "P(Best Teacher | MS Javeria) = 1.0. Statistically undeniable.",
  "Her lectures are the ultimate signal in a world of academic noise.",
  "Standard Deviation = 0 because the energy is consistently top-tier.",
  "Expected Value of every lecture? Pure clarity and absolute vibes.",
  "Statistically significant impact on our engineering journey. p < 0.0001.",
  "She bridges the gap between complex theory and genuine understanding.",
  "The GOAT of Probability. Zero competition, zero outliers.",
  "Uniformly Most Powerful (UMP) teacher in the entire department.",
  "Logic: 100. Clarity: 100. Confidence Interval: [99.9, 100].",
  "She doesn't just teach the syllabus; she installs the logic mindset."
];

export default function App() {
  const [currentGem, setCurrentGem] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const simulateFeedback = () => {
    setCurrentGem((prev) => (prev + 1) % feedbackGems.length);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-vibrant-bg text-white font-sans selection:bg-vibrant-yellow selection:text-black">
      <main className="max-w-7xl mx-auto space-y-6">
        
        {/* --- Header --- */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col">
            <h1 className="text-6xl md:text-8xl font-display font-black italic uppercase leading-none tracking-tighter">
              JAVERIA <span className="text-vibrant-pink">AZMAT</span>
            </h1>
          </div>
          <div className="text-left md:text-right w-full md:w-auto">
            <div className="bg-vibrant-yellow text-black px-6 py-2 text-2xl md:text-4xl font-black border-4 border-black inline-block mb-2 shadow-[4px_4px_0px_#000]">
              PROBABILITY: 100% COOL
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero Card */}
          <div className="md:col-span-8 bento-card bg-vibrant-purple text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
             <div className="absolute -top-10 -right-10 text-[200px] font-black opacity-10 rotate-12 pointer-events-none">μ</div>
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-6xl font-black italic mb-6 leading-tight uppercase">
                  Ms. Javeria is <br />
                  <span className="bg-vibrant-yellow text-black px-4 inline-block transform -rotate-1">A STATISTICAL OUTLIER</span>
                </h2>
                <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-medium">
                  In a world of average distributions, her lectures are the ultimate anomaly. 
                  Redefining how we learn complex theory, one significant insight at a time. 
                  High-frequency clarity, low-entropy vibes. Truly the GOAT.
                </p>
             </motion.div>
          </div>

          {/* Probability Distribution Card */}
          <div className="md:col-span-4 bento-card bg-vibrant-blue text-white flex flex-col items-center justify-center p-0 overflow-hidden relative">
            <div className="p-8 text-center">
              <div className="text-6xl mb-2 font-black">σ²</div>
              <h3 className="text-2xl font-black uppercase mb-1">Variance Check</h3>
              <p className="text-lg font-bold bg-black text-vibrant-blue px-3 py-1 inline-block">LOW VARIANCE = CONSISTENT W's</p>
            </div>
            <div className="w-full h-40 bg-white/10 mt-auto border-t-4 border-black">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bellCurveData}>
                  <Area 
                    type="monotone" 
                    dataKey="y" 
                    stroke="#000" 
                    strokeWidth={4}
                    fill="#FACC15" 
                    fillOpacity={0.8}
                  />
                  <XAxis dataKey="x" hide />
                  <YAxis hide />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Slang Generator Card */}
          <div className="md:col-span-7 bento-card bg-white text-black flex flex-col justify-between min-h-[350px]">
            <div className="flex justify-between items-start mb-8">
              <div className="h-12 w-12 rounded-full border-4 border-black flex items-center justify-center font-black text-2xl bg-vibrant-yellow italic">?</div>
              <span className="text-xs font-bold uppercase border-2 border-black px-2 py-1">Monte Carlo Slang v1.0</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-grow flex items-center"
              >
                <p className="text-3xl md:text-4xl font-display font-black leading-tight italic uppercase tracking-tighter">
                  "{feedbackGems[currentGem]}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <button 
                onClick={simulateFeedback}
                className="bg-vibrant-purple text-white px-6 py-3 border-4 border-black font-black uppercase italic shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
              >
                RECALCULATE VIBE ({clickCount})
              </button>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-2 h-6 bg-black"></div>
                ))}
              </div>
            </div>
          </div>

          {/* P(Win) Card */}
          <div className="md:col-span-2 bento-card bg-vibrant-pink text-white flex flex-col justify-between items-center text-center">
            <div className="text-3xl font-black italic">P(WIN)</div>
            <div className="flex flex-col items-center">
              <span className="text-7xl font-black italic leading-none">0.999</span>
              <span className="text-[10px] uppercase font-bold mt-1 bg-black text-vibrant-pink px-1">CONFIDENCE: 100%</span>
            </div>
            <div className="text-sm font-black uppercase border-2 border-white p-2">SIGNIFICANTLY ICONIC</div>
          </div>

          {/* Random Variable Card */}
          <div className="md:col-span-3 bento-card bg-vibrant-yellow text-black flex flex-col justify-between">
            <div className="text-4xl font-black italic">∫</div>
            <div className="space-y-4">
              <h4 className="text-2xl font-black uppercase italic leading-none underline decoration-4 decoration-vibrant-purple">The GOAT Teacher</h4>
              <p className="text-sm font-bold leading-snug">
                Integration of complex concepts with absolute ease. 
                Mapped the "Hard Math" domain to the "I Actually Get It" range.
              </p>
            </div>
            <div className="text-xs font-mono border-t-2 border-black pt-2 uppercase font-black">#PROBABILITY_GOATS</div>
          </div>

          {/* Marquee Card */}
          <div className="md:col-span-12 bento-card bg-black border-vibrant-yellow p-4 overflow-hidden marquee">
            <div className="animate-marquee inline-block whitespace-nowrap text-vibrant-yellow font-black italic text-2xl tracking-tighter uppercase uppercase">
              <span className="mx-8">SLAYING THE GAUSSIAN CURVE</span>
              <span className="mx-8">VIBE CHECK: PASSED</span>
              <span className="mx-8">NO OUTLIERS FOUND</span>
              <span className="mx-8">BAYESIAN QUEEN</span>
              <span className="mx-8">SLAYING THE GAUSSIAN CURVE</span>
              <span className="mx-8">VIBE CHECK: PASSED</span>
              <span className="mx-8">NO OUTLIERS FOUND</span>
              <span className="mx-8">BAYESIAN QUEEN</span>
            </div>
          </div>

        </div>

        {/* --- Footer --- */}
        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-60 uppercase gap-4 pb-12">
          <div className="flex gap-4">
            <span>Status: Probability Theory Simplified</span>
            <span className="text-vibrant-mint font-bold">● Mode: Gen Z Slang Active</span>
          </div>
        </footer>

      </main>

      {/* Floating Elements (Keeping some original vibe) */}
      <AnimatePresence>
        {clickCount > 5 && (
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             className="fixed bottom-8 right-8 z-50 bg-vibrant-mint border-4 border-black text-black px-6 py-3 font-black uppercase italic shadow-[6px_6px_0px_#000]"
           >
             ULTRA RARE TEACHER DETECTED
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


