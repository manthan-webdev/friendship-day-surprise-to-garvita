import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

export const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 12,
      delay: Math.random() * 10,
      size: 14 + Math.random() * 18,
      opacity: 0.15 + Math.random() * 0.35,
      color: i % 3 === 0 ? '#EC4899' : i % 3 === 1 ? '#A855F7' : '#3B82F6',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float-heart"
          style={{
            left: `${h.left}%`,
            bottom: '-50px',
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          <Heart
            size={h.size}
            fill={h.color}
            color={h.color}
            className="filter drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
          />
        </div>
      ))}
    </div>
  );
};
