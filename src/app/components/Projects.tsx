"use client";
import { motion } from "framer-motion";
import { Icon, Reveal, SectionLabel } from "./ui";
import { PROJECTS, Icons, fadeUp, stagger } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal className="max-w-3xl">
            <div className="mb-4">
              <SectionLabel>Featured Work</SectionLabel>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tighter leading-[1.05]">
              Projects that <span className="text-crimson">moved metrics</span>.
            </h2>
          </Reveal>
          <Reveal className="flex items-center gap-2 text-sm text-neutral-400">
            <div className="w-8 h-px bg-crimson" />
            A selection from the last two years
          </Reveal>
        </div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col hover:border-crimson/60 transition-colors"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-neutral-800">
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 40%, rgba(255,46,46,0.5), transparent 55%), #0a0a0a" }} />
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-obsidian flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon path={Icons.arrow} className="w-4 h-4" stroke={2.5} />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wider font-semibold bg-crimson/10 text-crimson px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold tighter mb-2 group-hover:text-crimson transition-colors">{p.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">{p.desc}</p>
              <div className="grid grid-cols-3 gap-2 mb-5 pt-5 border-t border-neutral-800">
                {p.metrics.map(([n, l]) => (
                  <div key={l}>
                    <div className="text-lg font-bold tighter text-white">{n}</div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white px-4 py-2.5 rounded-lg transition-colors">
                  <Icon path={Icons.github} className="w-4 h-4" /> Source
                </a>
                <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-obsidian hover:bg-crimson hover:text-white px-4 py-2.5 rounded-lg transition-colors">
                  Case Study <Icon path={Icons.external} className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
