import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Heart, Sparkles } from 'lucide-react';
import { MemoryPhoto } from '../types';

interface PhotoModalProps {
  photo: MemoryPhoto;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl w-full glass-card rounded-3xl p-4 sm:p-6 border border-purple-500/30 overflow-hidden shadow-2xl purple-glow"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-slate-200 hover:text-white hover:bg-pink-600 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Image View */}
            <div className="w-full md:w-2/3 h-[300px] sm:h-[450px] rounded-2xl overflow-hidden bg-black/60 relative">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-purple-900/80 backdrop-blur-md border border-purple-400/30 text-xs font-mono text-purple-200">
                {photo.photoLabel}
              </div>
            </div>

            {/* Content Details */}
            <div className="w-full md:w-1/3 flex flex-col justify-between py-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-medium mb-3">
                  <Calendar size={12} />
                  <span>{photo.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 font-serif-luxury mb-3">
                  {photo.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {photo.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-purple-300">
                  <Sparkles size={14} className="text-pink-400" />
                  Core Memory
                </span>
                <Heart size={18} className="text-pink-500 fill-pink-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};