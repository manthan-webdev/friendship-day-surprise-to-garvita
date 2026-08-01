import React from 'react';
import { AuroraBackground } from './components/AuroraBackground';
import { FloatingHearts } from './components/FloatingHearts';
import { AudioPlayer } from './components/AudioPlayer';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { BestMemories } from './components/BestMemories';
import { Reasons } from './components/Reasons';
import { AnimatedStats } from './components/AnimatedStats';
import { FinalSurprise } from './components/FinalSurprise';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090714] text-slate-100 selection:bg-purple-500/30 selection:text-pink-300 font-sans antialiased overflow-x-hidden">
      {/* Aurora Ambient Motion Background */}
      <AuroraBackground />

      {/* Floating Ambient Hearts Layer */}
      <FloatingHearts />

      {/* Persistent Background Audio Controller */}
      <AudioPlayer />

      {/* Main Page Flow Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-24">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Friendship Timeline (2023, 2024, 2024-2025, 2025-2026, 2026) */}
        <Timeline />

        {/* 3. Best Memories (Exactly 6 Image Cards) */}
        <BestMemories />

        {/* 4. Reasons You're My Favourite Person (1st, 2nd, 3rd, 4th, 6th, 7th, 8th, 10th) */}
        <Reasons />

        {/* 5. Animated Statistics (3+ Years, 25+ Photos, 9999+ Laughs) */}
        <AnimatedStats />

        {/* 6. Final Surprise (Fireworks, Confetti, Certificate, Outro) */}
        <FinalSurprise />
      </main>
    </div>
  );
}
