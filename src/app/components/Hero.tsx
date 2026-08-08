"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon, SectionLabel } from "./ui";
import { Icons, fadeUp, stagger } from "../lib/data";
import AudioCard from "./AudioCard";

const roles = ["Full-Stack Developer", "Systems & Deliverability", "Automation Engineer", "CMO @ Roxyel"];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 lg:pt-32 pb-16 overflow-hidden noise-bg">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6">
            <SectionLabel>Available for select work</SectionLabel>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tighter leading-[0.95] mb-6">
            Hi, I&apos;m <span className="inline-block">Hammad</span>
            <span className="text-crimson">.</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="h-8 mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[i]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl lg:text-2xl font-medium text-neutral-300"
              >
                {roles[i]}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.p variants={fadeUp} className="text-neutral-400 text-lg max-w-xl mb-10 leading-relaxed">
            I design and ship the boring-but-critical layer between marketing intent and revenue — funnels, automations, and outbound systems that actually deliver.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-crimson text-white font-semibold px-6 py-3.5 rounded-full hover:bg-red-500 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,46,46,0.45)]"
            >
              View My Work <Icon path={Icons.arrow} className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-neutral-700 hover:border-white text-white font-semibold px-6 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-neutral-300 hover:text-crimson font-semibold px-6 py-3.5 rounded-full transition-colors">
              <Icon path={Icons.download} className="w-4 h-4" /> Resume
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 mt-14 max-w-lg">
            {([["4+", "Years shipping"], ["30+", "Client systems"], ["92%", "Inbox delivery"]] as const).map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-extrabold tighter">{n}</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait.jpg"
                alt="Hammad Raza"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute top-5 left-5 bg-obsidian/70 backdrop-blur border border-neutral-800 rounded-full px-3 py-1.5 flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)] animate-pulse" />
                <span className="text-xs font-medium text-neutral-300">Multan, PK</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-neutral-400">Currently</div>
                    <div className="font-semibold text-lg">Building at Roxyel</div>
                  </div>
                  <div className="text-crimson">
                    <Icon path={Icons.spark} className="w-8 h-8" stroke={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="mt-4">
            <AudioCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
