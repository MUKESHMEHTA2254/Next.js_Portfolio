"use client";

import { motion } from "framer-motion";
import { experienceTimeline } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="A modern timeline of full stack delivery, backend engineering, and database-focused execution."
          description="Presented as a professional experience snapshot using only the verified capabilities and responsibilities already established across Mukesh's work."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300/50 via-white/20 to-transparent md:block" />
          <div className="space-y-6">
            {experienceTimeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative md:pl-14"
              >
                <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-xs font-semibold text-cyan-100 md:flex">
                  {index + 1}
                </div>
                <div className="glass-panel interactive-card rounded-[2rem] p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                        {item.label}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-300">{item.summary}</p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {item.points.map((point) => (
                      <div key={point} className="interactive-card rounded-2xl border border-white/8 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
