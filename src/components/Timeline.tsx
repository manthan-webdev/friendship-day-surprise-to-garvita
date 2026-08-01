import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles, Heart } from 'lucide-react';
import { TIMELINE_DATA } from '../data/content';

export const Timeline: React.FC = () => {
  return (
    // I will edit later.
    <section id="timeline-section" className="relative py-28 px-4 max-w-5xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Calendar size={14} className="text-pink-400" />
          <span>Our Story Through Time</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif-luxury text-slate-100">
          Friendship <span className="text-gradient-purple-pink">Timeline</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mt-3 text-sm sm:text-base">
          From our very first awkward hello to building an irreplaceable bond that gets stronger every single year.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Center Glowing Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 via-pink-500/50 to-blue-500/80 -translate-x-1/2 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

        <div className="space-y-16">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <React.Fragment key={item.id}>
                {/* Comments as requested */}
                {/* {item.commentLabel} */}
                {/* I will edit later. */}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#090714] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.8)] z-20">
                    <Heart size={14} className="text-pink-400 fill-pink-400" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
                      {/* Top Accent Gradient Pill */}
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.badgeColor} shadow-md`}>
                          {item.year}
                        </span>
                        <span className="text-xs text-purple-300/80 font-mono flex items-center gap-1">
                          <Sparkles size={12} className="text-pink-400" />
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 group-hover:text-pink-300 transition-colors font-serif-luxury">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {item.location && (
                        <div className="flex items-center gap-2 text-xs text-purple-300/70 border-t border-white/5 pt-3">
                          <MapPin size={12} className="text-pink-400" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
