"use client";
import { Reveal, SectionLabel } from "./ui";
import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <div className="mb-4">
            <SectionLabel>Experience &amp; Leadership</SectionLabel>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tighter leading-[1.05]">
            Where I&apos;ve <span className="text-crimson">shipped</span>.
          </h2>
        </Reveal>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-neutral-800" />
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={exp.role} className="relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12">
                  <div className="absolute left-4 lg:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-crimson ring-4 ring-obsidian shadow-[0_0_20px_rgba(255,46,46,0.5)] z-10" />
                  <div
                    className={`bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-crimson/50 transition-colors ${
                      right ? "lg:ml-8 lg:col-start-2" : "lg:mr-8 lg:text-right"
                    }`}
                  >
                    <h3 className="text-xl font-bold tighter">{exp.role}</h3>
                    <div className="text-sm text-crimson mb-4 font-medium">{exp.org}</div>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {exp.bullets.map((b, k) => (
                        <li key={k} className={`flex gap-2 leading-relaxed ${right ? "" : "lg:flex-row-reverse"}`}>
                          <span className="text-crimson flex-shrink-0 mt-1">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
