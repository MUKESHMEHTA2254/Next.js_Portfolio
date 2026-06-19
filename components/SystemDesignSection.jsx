"use client";

import { motion } from "framer-motion";
import { architectureFocus } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const SystemDesignSection = () => {
  return (
    <section id="architecture" className="section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="System Design"
          title="Architecture thinking that connects product goals, APIs, data models, and delivery quality."
          description="This section highlights the engineering areas where system design, backend services, and scalable application structure come together."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {architectureFocus.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-panel interactive-card rounded-[2rem] p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Architecture</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{area.title}</h3>
                </div>
                <span className="rounded-2xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">
                  0{index + 1}
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-300">{area.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.topics.map((topic) => (
                  <span
                    key={topic}
                    className="interactive-pill rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-200"
                  >
                    {topic}
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

export default SystemDesignSection;
