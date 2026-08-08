"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "./ui";
import { Icons } from "../lib/data";

export default function AudioCard() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<{ ctx: AudioContext; osc: OscillatorNode; lfo: OscillatorNode } | null>(null);

  useEffect(() => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    if (playing) {
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 220;
      gain.gain.value = 0.05;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.value = 0.3;
      lfoGain.gain.value = 40;
      lfo.connect(lfoGain).connect(osc.frequency);
      lfo.start();
      audioRef.current = { ctx, osc, lfo };
    }
    return () => {
      if (audioRef.current) {
        try {
          audioRef.current.osc.stop();
          audioRef.current.lfo.stop();
          audioRef.current.ctx.close();
        } catch {}
        audioRef.current = null;
      }
    };
  }, [playing]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => setPlaying(!playing)}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-center gap-4 hover:border-crimson/50 transition-colors group cursor-pointer"
    >
      <button
        className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
          playing ? "bg-crimson shadow-[0_0_25px_rgba(255,46,46,0.5)]" : "bg-white text-obsidian group-hover:bg-crimson group-hover:text-white"
        }`}
        aria-label={playing ? "Pause audio" : "Play audio"}
      >
        <Icon path={playing ? Icons.pause : Icons.play} className="w-5 h-5" stroke={2.5} />
      </button>
      <div className="flex-1 min-w-0">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">{playing ? "Now playing" : "Voice intro"}</div>
        <div className="font-semibold truncate">A minute about me</div>
        <div className="flex items-end gap-[3px] h-6 mt-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-crimson wave-bar"
              style={{
                height: `${20 + (i % 5) * 15}%`,
                animationDelay: `${i * 60}ms`,
                animationPlayState: playing ? "running" : "paused",
                opacity: playing ? 1 : 0.35,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
