"use client";
import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./ui";
import { SKILL_GROUPS, SOFT_SKILLS, fadeUp, stagger } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <div className="mb-4">
            <SectionLabel>Skillset</SectionLabel>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tighter leading-[1.05] mb-6">
            The stack behind the <span className="text-crimson">systems</span>.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            A pragmatic mix of code, tools, and workflows — chosen for shipping speed and business outcomes, not resume aesthetics.
          </p>
        </Reveal>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.title} variants={fadeUp} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-crimson" />
                <h3 className="font-bold text-lg tighter">{group.title}</h3>
              </div>
              <p className="text-sm text-neutral-500 mb-6">{group.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-neutral-800/50 border border-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg hover:border-crimson/50 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="bg-gradient-to-br from-neutral-900 to-obsidian border border-neutral-800 rounded-2xl p-7">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="lg:w-1/3">
              <div className="text-xs uppercase tracking-widest text-crimson mb-2">Beyond the code</div>
              <h3 className="font-bold text-2xl tighter">Soft skills that ship product.</h3>
            </div>
            <div className="flex flex-wrap gap-2 lg:flex-1 lg:justify-end">
              {SOFT_SKILLS.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ y: -3 }}
                  className="text-sm font-medium bg-crimson/10 border border-crimson/30 text-crimson px-4 py-2 rounded-full"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
