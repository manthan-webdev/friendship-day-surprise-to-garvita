import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, ChevronDown, Calendar, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToTimeline = () => {
    const timelineEl = document.getElementById('timeline-section');
    if (timelineEl) {
      timelineEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 pb-24 overflow-hidden z-10">
      {/* Background Decorative Neon Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-600/15 to-blue-600/20 blur-3xl pointer-events-none" />

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-medium tracking-wide uppercase mb-8 shadow-xl purple-glow"
      >
        <Sparkles size={14} className="text-pink-400 animate-pulse" />
        <span>August 2026 • Special Surprise Edition</span>
        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
      </motion.div>

      {/* Main Luxury Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.08] mb-6 font-serif-luxury">
          Happy <br className="sm:hidden" />
          <span className="text-gradient-purple-pink inline-block drop-shadow-[0_0_35px_rgba(236,72,153,0.3)]">
            Friendship Day
          </span>
        </h1>

        <p className="text-lg sm:text-2xl md:text-3xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          To my <span className="text-pink-300 font-normal italic">best friends</span> this little surprise is dedicated to every laugh, every memory, and every unforgettable moment we`ve shared together.`.
        </p>
      </motion.div>

      {/* Hero Interactive Badges & CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
      >
        <button
          onClick={scrollToTimeline}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-base shadow-xl shadow-purple-900/40 hover:shadow-pink-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group"
        >
          <span>Explore Our Memories📷 </span>
          <Heart size={18} className="text-pink-200 fill-pink-200/50 group-hover:scale-125 transition-transform" />
        </button>

        <div className="w-full sm:w-auto px-6 py-4 rounded-full glass-card border border-white/10 text-slate-300 text-sm font-medium flex items-center justify-center gap-2">
          <Star size={16} className="text-amber-400 fill-amber-400" />
          <span>Made For My Best Friend💙</span>
        </div>
      </motion.div>

      {/* Floating Sparkle Icons */}
      <div className="absolute top-1/4 left-[10%] hidden md:block text-purple-400/30 animate-bounce" style={{ animationDuration: '3s' }}>
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-1/3 right-[12%] hidden md:block text-pink-400/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <Heart size={36} className="fill-pink-500/20" />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-200 cursor-pointer transition-colors"
        onClick={scrollToTimeline}
      >
        <span className="text-xs tracking-widest uppercase font-mono text-purple-300/70">Scroll To Relive</span>
        <ChevronDown size={20} className="animate-bounce text-pink-400" />
      </motion.div>
    </section>
  );
};
