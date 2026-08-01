import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Maximize2, Heart, Calendar } from 'lucide-react';
import { MEMORIES_DATA } from '../data/content';
import { MemoryPhoto } from '../types';
import { PhotoModal } from './PhotoModal';

export const BestMemories: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  return (
    <section className="relative py-28 px-4 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-widest mb-3">
          <Camera size={14} className="text-purple-400" />
          <span>Captured Moments</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif-luxury text-slate-100">
          Best <span className="text-gradient-purple-pink">Memories</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto mt-3 text-sm sm:text-base">
          A curated collection of six unforgettable snapshot memories we have shared together over time.
        </p>
      </div>

      {/* Grid of EXACTLY 6 Photo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEMORIES_DATA.map((photo, index) => (
          <React.Fragment key={photo.id}>
            {/* Comment for each editable photo card as requested */}
            {/* {photo.photoLabel} */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              className="glass-card glass-card-hover rounded-2xl p-4 cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Image Container with Hover Zoom & Glass Overlay */}
              <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 bg-slate-900/80">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Glass Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Photo Badge (Photo 1, Photo 2...) */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-purple-200">
                  {/* Photo 1 / Photo 2 / Photo 3 / Photo 4 / Photo 5 / Photo 6 */}
                  {photo.photoLabel}
                </div>

                {/* Maximize Icon Button */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Maximize2 size={14} />
                </div>

                {/* Date Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                  <Calendar size={12} className="text-pink-400" />
                  <span>{photo.date}</span>
                </div>
              </div>

              {/* Photo Title & Description */}
              <div className="px-2 pb-2">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-pink-300 transition-colors mb-1 font-serif-luxury">
                  {photo.title}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                  {photo.subtitle}
                </p>
              </div>

              {/* Bottom Heart Icon Decorative Indicator */}
              <div className="absolute bottom-3 right-3 text-pink-500/30 group-hover:text-pink-400 transition-colors">
                <Heart size={16} fill="currentColor" />
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </section>
  );
};
