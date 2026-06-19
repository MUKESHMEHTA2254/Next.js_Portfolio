"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { featuredTechnologies, keyStats, personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section id="home" className="section-shell overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16 xl:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.22),_transparent_28%),radial-gradient(circle_at_left,_rgba(139,92,246,0.18),_transparent_34%)]" />
      <div className="relative grid items-start gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8 "
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition duration-300 hover:border-cyan-300/35 hover:bg-cyan-400/15">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            {personalInfo.role}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Mukesh Mehta
            </h1>
            <div className="max-w-4xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl lg:text-4xl xl:min-h-[96px]">
              <TypeAnimation
                sequence={[
                  "Full Stack Software Engineer",
                  1800,
                  "Next.js, React, TypeScript",
                  1800,
                  "Node.js, .NET, and Python",
                  1800,
                  "Scalable products, APIs, and enterprise software",
                  1800,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
              />
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {personalInfo.heroTagline}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="magnetic-button inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_24px_50px_-24px_rgba(59,130,246,0.9)]"
            >
              View Projects
            </a>
            <a
              href={personalInfo.resumeHref}
              download="Mukesh Mehta resume.pdf"
              className="magnetic-button inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300/30 hover:bg-white/10"
            >
              Download Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="magnetic-button inline-flex items-center justify-center rounded-full border border-white/12 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-white/20 hover:bg-slate-800/70"
            >
              Contact
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {keyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.07 }}
                whileHover={{ y: -6 }}
                className="glass-panel interactive-card rounded-3xl p-4"
              >
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass-panel interactive-card relative overflow-hidden rounded-[2rem] p-6">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-14 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Primary stack</p>
                  <p className="mt-2 text-xl font-semibold text-white">Modern full stack engineering</p>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  Scalable
                </span>
              </div>

              <div className="relative mx-auto flex h-[390px] w-full max-w-md items-end justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),_rgba(255,255,255,0.02)_52%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 pb-0 pt-20">
                <div className="absolute inset-x-6 top-6 flex justify-between">
                  <span className="interactive-pill rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Next.js / React
                  </span>
                  <span className="interactive-pill rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Node.js / .NET
                  </span>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16),_transparent_52%)]" />
                <div className="relative z-10 flex h-[285px] w-[285px] items-end justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_20px_60px_-35px_rgba(255,255,255,0.6)] sm:h-[320px] sm:w-[320px]">
                  <Image
                    src="/images/poster.jpg"
                    alt="Mukesh Mehta portrait"
                    width={420}
                    height={420}
                    priority
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {featuredTechnologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -4 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      {/* <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50 text-xs font-semibold text-cyan-100">
                        {tech.shortName}
                      </div> */}
                      <div>
                        <p className="font-semibold text-white">{tech.name}</p>
                        <p className="text-sm text-slate-400">{tech.summary}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
