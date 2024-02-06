import Image from "next/image";

export const About = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/color-sharp2.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen py-10"
    >
      <h1 className="py-4 text-center text-4xl font-bold">About Me</h1>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center p-4 md:flex-row">
        <div className="mt-12 flex">
          <div className="relative flex-1">
            <Image
              src="/images/programming.svg"
              alt="programming"
              quality={100}
              fill
            />
          </div>

          <p className="flex-1">
            With a keen interest in the latest technologies and trends in the
            software industry, I am constantly striving to improve my skills and
            knowledge to become an exceptional developer. I have experience
            building web applications using tools such as{" "}
            <span className="text-yellow-500">Javascript</span>,{" "}
            <span className="text-blue-500">React</span>/Nextjs,{" "}
            <span className="text-sky-500">CSS</span>,{" "}
            <span className="text-green-500">Mongodb</span>, and{" "}
            <span className="text-purple-500">Prisma</span>. I&apos;m ready to
            showcase my knowledge and skills in new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
