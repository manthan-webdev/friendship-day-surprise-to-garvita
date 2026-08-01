import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  HeartHandshake, 
  MessageSquareHeart, 
  Compass, 
  Coffee, 
  Crown,
  Heart
} from 'lucide-react';
import { REASONS_DATA } from '../data/content';
import { ReasonCard } from '../types';

export const Reasons: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-purple-400" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-cyan-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-6 h-6 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-emerald-400" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-amber-300" />;
      default:
        return <Heart className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section className="relative py-28 px-4 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Heart size={14} className="text-pink-400 fill-pink-400" />
          <span>Why You Are So Special</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif-luxury text-slate-100">
          Reasons You're My <span className="text-gradient-purple-pink">Favourite Person</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mt-3 text-sm sm:text-base">
          Out of thousands of reasons, here are eight irreplaceable qualities that make you one in a billion.
        </p>
      </div>

      {/* Grid of Reasons (1st, 2nd, 3rd, 4th, 6th, 7th, 8th, 10th ONLY) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS_DATA.map((reason: ReasonCard, index: number) => (
          <React.Fragment key={reason.number}>
            {/* {reason.commentLabel} */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top Row: Number Badge & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-sm text-pink-300 shadow-inner">
                    {reason.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {getIcon(reason.iconName)}
                  </div>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-purple-300/80 mb-2 font-mono">
                  {reason.label}
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-pink-300 transition-colors font-serif-luxury">
                  {reason.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative Glow Line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-purple-400/60 font-mono">{reason.commentLabel}</span>
                <Heart size={12} className="text-pink-500/40 group-hover:text-pink-400 transition-colors" />
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
