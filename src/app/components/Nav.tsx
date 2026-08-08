"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./ui";
import { NAV, Icons } from "../lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-obsidian/80 backdrop-blur-xl border-b border-neutral-900" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-crimson flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(255,46,46,0.35)] group-hover:shadow-[0_0_30px_rgba(255,46,46,0.55)] transition-shadow">
            H
          </div>
          <span className="font-bold tighter text-lg">Hammad.</span>
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm text-neutral-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-crimson group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-crimson hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_25px_rgba(255,46,46,0.4)] hover:-translate-y-0.5"
          >
            Hire Me <Icon path={Icons.arrow} className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-lg border border-neutral-800 flex items-center justify-center hover:border-crimson transition-colors"
            aria-label="Toggle menu"
          >
            <Icon path={open ? Icons.close : Icons.menu} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-charcoal border-t border-neutral-900"
          >
            <ul className="px-6 py-6 space-y-4">
              {NAV.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-lg font-medium text-neutral-300 hover:text-crimson">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-crimson text-white font-semibold px-5 py-2.5 rounded-full mt-2">
                  Hire Me <Icon path={Icons.arrow} className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
