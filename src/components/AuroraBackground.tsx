import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090714]">
      {/* Dark Ambient Base Gradient */}
      <div className="absolute inset-0 bg-radial from-purple-950/20 via-[#090714] to-[#04030a]" />

      {/* Aurora Orb 1 - Purple Glow */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-purple-600/15 blur-[120px] animate-aurora-1"
      />

      {/* Aurora Orb 2 - Blue Glow */}
      <div 
        className="absolute top-[35%] -right-[15%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-blue-600/15 blur-[130px] animate-aurora-2"
      />

      {/* Aurora Orb 3 - Pink Accent */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full bg-pink-600/15 blur-[140px] animate-aurora-3"
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  );
};
