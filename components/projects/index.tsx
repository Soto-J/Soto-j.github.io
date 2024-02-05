import React from "react";
import { ProjectCard } from "./_components/project-card";

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      src: "/images/projects/mta-schedule.png",
      description: "This is a project",
    },
    {
      title: "Project 2",
      src: "/images/projects/hero-card-complete.jpeg",
      description: "This is a project",
    },
    {
      title: "Project 3",
      src: "/images/projects/hero-card-complete.jpeg",
      description: "This is a project",
    },
    {
      title: "Project 4",
      src: "/images/projects/hero-card-complete.jpeg",
      description: "This is a project",
    },
  ];

  return (
    <div className="p-8 py-12">
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <div className="grid grid-cols-2 xl:grid-cols-4 p-4 justify-items-center mt-8 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            src={project.src}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
