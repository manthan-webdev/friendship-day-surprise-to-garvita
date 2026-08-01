import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { BACKGROUND_MUSIC_URL } from '../data/content';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthAudioCtxRef = useRef<AudioContext | null>(null);

  // Replace music URL here
  const musicSourceUrl = BACKGROUND_MUSIC_URL; // Replace music URL here

  useEffect(() => {
    const audio = new Audio(musicSourceUrl);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    // Try autoplay on mount
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy, waiting for first click/tap anywhere
          setIsPlaying(false);
        });
    }

    const handleFirstUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(() => {
            // Audio error fallback
            startAmbientSynth();
          });
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (synthAudioCtxRef.current) {
        synthAudioCtxRef.current.close();
      }
    };
  }, [musicSourceUrl]);

  // Fallback Web Audio synth if link is blocked
  const startAmbientSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      synthAudioCtxRef.current = ctx;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(220, ctx.currentTime); // A3
      osc2.frequency.setValueAtTime(329.63, ctx.currentTime); // E4

      gain.gain.setValueAtTime(0.08, ctx.currentTime);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      setIsPlaying(true);
    } catch {
      // Ignored
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (synthAudioCtxRef.current) {
        synthAudioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          startAmbientSynth();
        });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    // Music section
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interaction prompt hint if not yet playing */}
      {!hasInteracted && !isPlaying && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs text-purple-200 backdrop-blur-md animate-pulse shadow-lg">
          <Music size={12} className="text-pink-400" />
          <span>Click anywhere to start music ✨</span>
        </div>
      )}

      {/* Floating Audio Toggle Controller */}
      <div className="glass-card rounded-full p-2 flex items-center gap-2 border border-purple-500/30 shadow-2xl purple-glow">
        <button
          onClick={togglePlay}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-500/30'
              : 'bg-white/10 text-slate-300 hover:bg-white/20'
          }`}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        </button>

        {isPlaying && (
          <div className="hidden sm:flex items-center gap-1 px-2">
            <span className="w-1 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            <span className="w-1 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
          </div>
        )}

        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
};
