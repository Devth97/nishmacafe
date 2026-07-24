import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export default function LoFiAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      try {
        if (!audioCtxRef.current) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          const ctx = new AudioContext();
          audioCtxRef.current = ctx;

          // Create subtle warm brown noise (vinyl/ambient cafe hum)
          const bufferSize = ctx.sampleRate * 2;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let lastOut = 0.0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + 0.02 * white) / 1.02;
            lastOut = output[i];
            output[i] *= 1.5; // Gain adjustment
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          // Lowpass filter for warm cafe warmth
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 450;

          const gainNode = ctx.createGain();
          gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
          gainNodeRef.current = gainNode;

          whiteNoise.connect(filter);
          filter.connect(gainNode);
          gainNode.connect(ctx.destination);

          whiteNoise.start();
        } else {
          audioCtxRef.current.resume();
        }
        setIsPlaying(true);
      } catch (e) {
        console.log('Web Audio API not allowed without gesture', e);
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
        isPlaying
          ? 'bg-matcha-700 text-cream-50 matcha-glow'
          : 'bg-cream-200/80 text-espresso-700 hover:bg-cream-300'
      }`}
      title={isPlaying ? 'Mute Cafe Ambience' : 'Play Cozy Cafe Ambience'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="h-3.5 w-3.5 animate-pulse text-matcha-100" />
          <span className="hidden sm:inline">Cafe Vibe</span>
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 bg-cream-50 animate-[bounce_1s_infinite_100ms] h-full" />
            <span className="w-0.5 bg-cream-50 animate-[bounce_1s_infinite_300ms] h-2/3" />
            <span className="w-0.5 bg-cream-50 animate-[bounce_1s_infinite_200ms] h-4/5" />
          </div>
        </>
      ) : (
        <>
          <Music className="h-3.5 w-3.5 text-caramel-500" />
          <span className="hidden sm:inline">Soundscape</span>
        </>
      )}
    </button>
  );
}
