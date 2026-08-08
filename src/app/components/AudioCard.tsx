"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "./ui";
import { Icons } from "../lib/data";

export default function AudioCard() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/intro.mp3");
    audio.preload = "metadata";
    audioRef.current = audio;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setProgress(audio.currentTime);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const format = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const pct = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={toggle}
      className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex items-center gap-4 hover:border-crimson/50 transition-colors group cursor-pointer"
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); toggle(); }}
        className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
          playing
            ? "bg-crimson shadow-[0_0_25px_rgba(255,46,46,0.5)]"
            : "bg-white text-obsidian group-hover:bg-crimson group-hover:text-white"
        }`}
        aria-label={playing ? "Pause voice intro" : "Play voice intro"}
      >
        <Icon path={playing ? Icons.pause : Icons.play} className="w-5 h-5" stroke={2.5} />
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            {playing ? "Now playing" : "Voice intro"}
          </div>
          <div className="text-xs font-mono text-neutral-500 tabular-nums">
            {format(progress)} / {format(duration)}
          </div>
        </div>
        <div className="font-semibold truncate mb-2">A minute about me</div>

        {/* Progress bar with animated wave bars underneath */}
        <div className="relative">
          <div className="h-1 rounded-full bg-neutral-800 overflow-hidden">
            <div
              className="h-full bg-crimson transition-[width] duration-150 ease-linear"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex items-end gap-[3px] h-4 mt-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-crimson wave-bar"
                style={{
                  height: `${25 + (i % 5) * 15}%`,
                  animationDelay: `${i * 60}ms`,
                  animationPlayState: playing ? "running" : "paused",
                  opacity: playing ? 0.9 : 0.25,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
