"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { motion, useInView } from "framer-motion";
import { projectFilters, projectsData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  const cardVariants = {
    initial: { y: 36, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Existing portfolio projects, redesigned with stronger presentation and clearer technical positioning."
          description="All current projects are preserved and showcased with a more premium, recruiter-friendly interface."
        />
        <div className="flex flex-wrap items-center gap-3">
          {projectFilters.map((filter) => {
            const isSelected = tag === filter;
            return (
              <button
                key={filter}
                onClick={() => handleTagChange(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isSelected
                    ? "border-cyan-300/30 bg-cyan-400/10 text-cyan-100"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400">
            {filteredProjects.length} project{filteredProjects.length > 1 ? "s" : ""}
          </span>
        </div>

        <ul ref={ref} className="grid gap-6 xl:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tags={project.tags.filter((projectTag) => projectTag !== "All")}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
