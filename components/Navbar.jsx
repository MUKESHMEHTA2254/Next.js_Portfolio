"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Architecture", path: "#architecture" },
  { title: "Experience", path: "#experience" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={`site-width flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-white/12 bg-slate-950/80 shadow-[0_25px_70px_-40px_rgba(59,130,246,0.75)] backdrop-blur-2xl"
            : "border-white/8 bg-slate-950/55 backdrop-blur-xl"
        }`}
        aria-label="Primary navigation"
      >
      
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
            MM
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wide">{personalInfo.name}</p>
            <p className="text-xs text-slate-400">{personalInfo.role}</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:text-white"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={personalInfo.resumeHref}
            download="Mukesh Mehta resume.pdf"
            className="magnetic-button rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-cyan-300/40 hover:bg-white/10"
          >
            Resume
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="magnetic-button rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(59,130,246,0.85)]"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 lg:hidden"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="site-width mt-3 rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-[0_25px_70px_-40px_rgba(59,130,246,0.75)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                >
                  {link.title}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href={personalInfo.resumeHref}
                  download="Mukesh Mehta resume.pdf"
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white"
                >
                  Download Resume
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Contact Mukesh
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
