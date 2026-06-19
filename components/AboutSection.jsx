"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { keyStats, personalInfo, professionalHighlights } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
            <Image
              src="/images/about-image.png"
              width={900}
              height={900}
              alt={`${personalInfo.name} working illustration`}
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="About"
            title="A full stack engineer focused on scalable, business-ready software."
            description={personalInfo.about}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {keyStats.map((stat) => (
              <div key={stat.label} className="glass-panel interactive-card rounded-3xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="interactive-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">Professional Highlights</h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Recruiter Snapshot
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {professionalHighlights.map((highlight) => (
                <div key={highlight} className="interactive-card rounded-2xl border border-white/8 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
