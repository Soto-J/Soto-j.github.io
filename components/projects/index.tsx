import { ProjectCard } from "./_components/project-card";

export const Projects = () => {
  const projects = [
    {
      title: "MTA Status Alert",
      src: "/images/projects/mta-schedule.png",
      liveHref: "https://mta-schedule.vercel.app/",
      githubHref: "https://github.com/Soto-J/mta-schedule.git",
      description:
        "Application enabling users to check for the most recent MTA status alert and view the current MTA schedule in real time. This app was built using React, Next.js, and Tailwind CSS.",
    },
    {
      title: "King Academy",
      src: "/images/projects/hero-card-complete.jpeg",
      liveHref: "https://mta-schedule.vercel.app/",
      githubHref: "https://github.com/Soto-J/king-academy.git",
      description: "This is a project",
    },
    {
      title: "Twitter Clone",
      src: "/images/projects/twitter-clone.png",
      liveHref: "https://twitter-clone-soto-j.vercel.app/",
      githubHref: "https://github.com/Soto-J/twitter-clone",
      description:
        "User-centric web application enabling account creation through sign-in credentials, allowing users to create posts, engage by liking and commenting on content, and establish connections through the follow and unfollow other users feature.",
    },
    {
      title: "Project 4",
      src: "/images/projects/hero-card-complete.jpeg",
      liveHref: "https://mta-schedule.vercel.app/",
      githubHref: "",
      description: "This is a project",
    },
  ];

  return (
    <div className="p-8 py-12">
      <h2 className="text-4xl font-bold text-center">Projects</h2>

      <p className="text-center">Here are some of my proudest work!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-4 justify-items-center mt-8 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            src={project.src}
            description={project.description}
            liveHref={project.liveHref}
            githubHref={project.githubHref}
          />
        ))}
      </div>
    </div>
  );
};
