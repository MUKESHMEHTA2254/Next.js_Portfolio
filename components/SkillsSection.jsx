"use client";

import { motion } from "framer-motion";
import { featuredTechnologies, skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import TechBadge from "./TechBadge";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="Core stack built around modern product development and reliable backend engineering."
          description="Next.js, TypeScript, React, Node.js, .NET, and Python lead the stack, supported by strong database, architecture, and delivery experience."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredTechnologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel interactive-card rounded-[2rem] p-6"
            >
              <div className="flex items-center gap-4">
                <TechBadge shortName={technology.shortName} name={technology.name} className="h-14 w-14 text-base" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{technology.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{technology.summary}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="interactive-card rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                  {group.items.length} skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="interactive-pill rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
