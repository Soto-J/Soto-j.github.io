import Image from "next/image";

import { ProjectCard } from "./_components/project-card";

export const Projects = () => {
  const projects = [
    {
      title: "Streamify",
      src: "/images/projects/hero-card-complete.jpeg",
      liveHref: "https://stream-platform-soto.vercel.app/",
      githubHref: "https://github.com/Soto-J/stream-platform",
      description:
        "Streamify service that allows users to stream content, including video games, music, and creative content. Watch what you love, connect with streamers, and chat with tons of communities.",
    },
    {
      title: "King Academy",
      src: "/images/projects/hero-card-complete.jpeg",
      liveHref: "https://mta-schedule.vercel.app/",
      githubHref: "https://github.com/Soto-J/king-academy.git",
      description:
        "A web application tailored for a youth Baseball organization in my community called King Academy based in New York. This organization that focuses on the player&apos;s development.",
    },
    {
      title: "MTA Never Late",
      src: "/images/projects/mta-schedule.png",
      liveHref: "https://mta-schedule.vercel.app/",
      githubHref: "https://github.com/Soto-J/mta-schedule.git",
      description:
        "Web application enabling users to check for the most recent MTA status alert and view the current MTA schedule in real time. MTA Never Late can provide information on service alerts and delays.",
    },
    {
      title: "Twitter Clone",
      src: "/images/projects/twitter-clone.png",
      liveHref: "https://twitter-clone-soto-j.vercel.app/",
      githubHref: "https://github.com/Soto-J/twitter-clone",
      description:
        "Web application enabling account creation through sign-in credentials, allowing users to create posts, engage by liking and commenting on content, and establish connections through the follow and unfollow user feature.",
    },
  ];

  return (
    <div
      id="#projects"
      style={{
        backgroundImage: "url('/images/color-sharp.png')",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative p-8 py-12"
    >
      <div className="">
        <h2 className="text-center text-4xl font-bold">Projects</h2>

        <p className="py-2 text-center text-default-500">
          Here are some of my proudest work!
        </p>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-6 p-4 md:grid-cols-2 xl:grid-cols-4">
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
    </div>
  );
};
