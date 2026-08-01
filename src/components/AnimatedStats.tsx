import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, Camera, Smile, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data/content';

// Stats section
export const AnimatedStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    // Stats section
    <section ref={containerRef} className="relative py-24 px-4 max-w-5xl mx-auto z-10">
      {/* Background Glow Container */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden shadow-2xl purple-glow">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-2">
            <Sparkles size={14} className="text-pink-400" />
            <span>Our Journey in Numbers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif-luxury text-slate-100">
            Friendship <span className="text-gradient-purple-pink">By The Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {STATS_DATA.map((stat, idx) => (
            <StatCard key={idx} stat={stat} isInView={isInView} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    sublabel: string;
    icon: string;
  };
  isInView: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isInView, index }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easedProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-purple-400" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-pink-400" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-blue-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {renderIcon(stat.icon)}
      </div>

      <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-gradient-purple-pink mb-2">
        {count.toLocaleString()}
        <span>{stat.suffix}</span>
      </div>

      <div className="text-lg font-bold text-slate-100 font-serif-luxury mb-1">
        {stat.label}
      </div>

      <div className="text-xs text-slate-400 leading-relaxed max-w-xs">
        {stat.sublabel}
      </div>
    </motion.div>
  );
};
