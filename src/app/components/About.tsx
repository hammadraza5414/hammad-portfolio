"use client";
import { motion } from "framer-motion";
import { Icon, Reveal, SectionLabel } from "./ui";
import { PROCESS, fadeUp, stagger } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <div className="mb-4">
            <SectionLabel>About &amp; Process</SectionLabel>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tighter leading-[1.05] mb-6">
            How I turn ideas into <span className="text-crimson">real-world</span> applications.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I sit at the intersection of engineering and go-to-market. That means writing code, wiring CRMs, warming domains, and staying close to the metrics that actually move a business — not just the ones that make a demo look nice.
          </p>
        </Reveal>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS.map((step) => (
            <motion.div
              key={step.n}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 lg:p-7 overflow-hidden hover:border-crimson/60 transition-colors"
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-crimson/10 group-hover:bg-crimson/20 blur-2xl transition-all" />
              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/30 text-crimson flex items-center justify-center">
                    <Icon path={step.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono text-neutral-600">{step.n}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 tighter">{step.t}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
