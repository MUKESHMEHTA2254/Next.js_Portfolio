"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "using Next.js 13 and Tailwind CSS, The portfolio website is fully responsive and in that you can download the CV and ,manually navigate to important links like LinkedIn, Git hub, and Projects ",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/MUKESHMEHTA2254/Next.js_Portfolio",
    previewUrl: "https://next-js-portfolio-blond.vercel.app",
  },
  {
    id: 2,
    title: "Online Movie Website",
    description:
      "React hooks and state management , Global state containers with ReduxToolkit -Fetch data from Rest API with Axios- Carousel/slider without library - Infinite scrolling",
    image: "/images/projects/2.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/MUKESHMEHTA2254/OTT-Platform",
    previewUrl: "https://online-movie-platform.vercel.app",
  },
  {
    id: 3,
    title: "Car Rental Website",
    description: "- Used Next.js 13 App Router and Server side Rendering -Filtering Capabilities - Optimize Metadata and SEO - Maintain a well-organized fileand folder structure.",
    image: "/images/projects/3.png",
    tag: ["All", "Typescript"],
    gitUrl: "https://github.com/MUKESHMEHTA2254/Car_Rental_WebApp",
    previewUrl: "https://car-rental-web-app-omega.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce mern stack",
    description: "Using Next.js 13 ,MongoDB, Firebase , Stripe with Admin Dashboardadmin can manage CRUD operation on products and can mark the order delivered and payment can be done using stripe.",
    image: "/images/projects/4.png",
    tag: ["All", "Next.js", "MERN"],
    gitUrl: "https://github.com/MUKESHMEHTA2254/Ecommerce-mern-stack",
    previewUrl: "https://next-js-ecommerce-2023.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-wrap  justify-center items-center gap-2 py-6 color ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Typescript"
          isSelected={tag === "Typescript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
