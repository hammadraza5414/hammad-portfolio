"use client";
import { motion } from "framer-motion";
import { Icon, Reveal, SectionLabel } from "./ui";
import { PROJECTS, Icons, fadeUp, stagger } from "../lib/data";

// Type guard — an item is a metric tuple if it's an array, otherwise a string highlight
type MetricTuple = readonly [string, string];
type Highlight = string | MetricTuple;
const isMetric = (h: Highlight): h is MetricTuple => Array.isArray(h);

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
              Real builds, <span className="text-crimson">shipped</span>.
            </h2>
          </Reveal>
          <Reveal className="flex items-center gap-2 text-sm text-neutral-400">
            <div className="w-8 h-px bg-crimson" />
            Client details blurred where required
          </Reveal>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-5"
        >
          {PROJECTS.map((p) => {
            const highlights = p.highlights as readonly Highlight[];
            return (
              <motion.article
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-5 flex flex-col hover:border-crimson/60 transition-colors"
              >
                {/* Real screenshot */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-neutral-800 bg-obsidian">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* subtle darken on hover for contrast with arrow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-obsidian flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon path={Icons.arrow} className="w-4 h-4" stroke={2.5} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wider font-semibold bg-crimson/10 text-crimson px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold tighter mb-2 group-hover:text-crimson transition-colors">{p.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5 flex-1">{p.desc}</p>

                {/* Highlights row — real metrics OR qualitative bullets */}
                {highlights.length > 0 && (
                  <div className="pt-5 border-t border-neutral-800">
                    {highlights.every(isMetric) ? (
                      <div className="grid grid-cols-3 gap-2">
                        {highlights.map((h) => {
                          const [n, l] = h as MetricTuple;
                          return (
                            <div key={l}>
                              <div className="text-lg font-bold tighter text-white">{n}</div>
                              <div className="text-[10px] uppercase tracking-wider text-neutral-500">{l}</div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <ul className="space-y-1.5">
                        {highlights.map((h) => (
                          <li key={h as string} className="flex gap-2 text-xs text-neutral-300 leading-relaxed">
                            <span className="text-crimson flex-shrink-0 mt-0.5">▸</span>
                            <span>{h as string}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
