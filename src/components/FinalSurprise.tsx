import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Gift, Heart, Award, X, RotateCcw, Share2, Check } from 'lucide-react';

export const FinalSurprise: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const fireworksCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Trigger celebration confetti
  const triggerCelebration = () => {
    // Confetti burst 1
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#A855F7', '#EC4899', '#3B82F6', '#F59E0B', '#10B981'],
    });

    // Side cannons
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#EC4899', '#A855F7', '#FFF176'],
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#3B82F6', '#EC4899', '#FFF176'],
      });
    }, 250);

    // Heart shapes
    setTimeout(() => {
      const scalar = 2;
      const heart = confetti.shapeFromPath({
        path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
      });
      confetti({
        shapes: [heart],
        particleCount: 30,
        scalar,
        origin: { y: 0.5 },
        colors: ['#EC4899', '#F43F5E', '#A855F7']
      });
    }, 500);
  };

  const handleOpenSurprise = () => {
    setIsOpen(true);
    triggerCelebration();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-28 px-4 max-w-4xl mx-auto text-center z-10">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 blur-3xl pointer-events-none animate-pulse" />

      {/* Main Section Content */}
      <div className="glass-card rounded-3xl p-8 sm:p-14 border border-pink-500/30 relative overflow-hidden shadow-2xl purple-glow">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-6">
          <Gift size={16} className="text-pink-400 animate-bounce" />
          <span>One Last Surprise 🎁</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-serif-luxury text-slate-100 mb-6 leading-tight">
          One Last <br />
          <span className="text-gradient-purple-pink drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
            Surprise For You!
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Click the button below to open your Best Friend Certificate and a small thank-you note made especially for you. 
        </p>

        {/* Large Glowing CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpenSurprise}
          className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-lg sm:text-xl shadow-[0_0_50px_rgba(236,72,153,0.6)] hover:shadow-[0_0_70px_rgba(236,72,153,0.9)] transition-all duration-300 cursor-pointer group border border-white/20"
        >
          <Sparkles className="w-6 h-6 text-yellow-300 group-hover:rotate-45 transition-transform" />
          <span> One Last Surprise✨🎉</span>
          <Heart className="w-6 h-6 text-pink-200 fill-pink-200 group-hover:scale-125 transition-transform" />
        </motion.button>
      </div>

      {/* Outro Text Footer */}
      <div className="mt-16 text-slate-400 text-xs sm:text-sm max-w-md mx-auto space-y-2 font-light">
        <p className="flex items-center justify-center gap-2 text-slate-300">
          Made with <Heart size={14} className="text-pink-500 fill-pink-500 inline animate-ping" /> for my favourite human..
        </p>
        <p className="text-slate-500">
          Happy Friendship Day 2026 GARVITA • Thank you for being an incredible friend...🤝🏻❣️
        </p>
      </div>

      {/* Friendship Certificate & Secret Note Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full glass-card rounded-3xl p-6 sm:p-10 border border-amber-400/30 shadow-2xl my-8 text-center text-slate-100 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(20, 14, 40, 0.95) 0%, rgba(35, 20, 65, 0.95) 100%)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              {/* Gold Ribbon Seal */}
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-500 p-0.5 shadow-[0_0_30px_rgba(245,158,11,0.5)] mb-6">
                <div className="w-full h-full rounded-full bg-[#120a26] flex items-center justify-center text-amber-300">
                  <Award size={32} />
                </div>
              </div>

              {/* Certificate Header */}
              <div className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-2">
                Official Friendship Appreciation
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-serif-luxury text-gradient-gold mb-4">
                A Friend Like No Other
              </h3>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />

              {/* Heartfelt Note */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-slate-200 text-sm sm:text-base leading-relaxed text-left space-y-4 font-light">
                <p>
                  <strong className="text-pink-300 font-normal">Dear Best Friend,</strong>
                </p>
                <p>
                  I never imagined that one day we'd create so many unforgettable memories together. Every laugh, every random plan, and every conversation has made this friendship truly special.
                </p>
                <p>
                  Thank you for always standing by me, especially during the times when I needed someone the most. Your support, kindness, and patience have meant more to me than words can ever express.
                </p>
                <p>
                  I hope we keep making more memories, exploring new places, laughing at silly things, and always staying the amazing friends we are today. No matter where life takes us, I'll always be grateful to have a friend like you.
                </p>
                <p className="text-right text-pink-300 font-serif-luxury text-lg pt-2 italic">
                  Happy Friendship Day🤍✨
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={triggerCelebration}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-600/80 hover:bg-purple-600 border border-purple-400/30 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <RotateCcw size={16} />
                  <span>Watch Again🎉</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-slate-200 font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Share2 size={16} />}
                  <span>{copied ? "Link Copied!" : "Share Surprise"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
