import Image from "next/image";

export const About = () => {
  return (
    <div
      id="about"
      style={{
        backgroundImage: "url('/images/color-sharp2.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-10"
    >
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="py-4 text-center text-4xl font-bold">About Me</h1>

        <div className="mt-12 w-[95%] max-w-xl p-4 lg:max-w-4xl">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex-1">
              <Image
                src="/images/programming.svg"
                alt="programming"
                quality={100}
                height={300}
                width={300}
              />
            </div>

            <p className="flex-1 py-8 text-center text-lg lg:py-0 lg:text-start">
              With a keen interest in the latest technologies and trends in the
              software industry, I am constantly striving to improve my skills
              and knowledge to become an exceptional developer. I have
              experience building web applications using tools such as{" "}
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
    </div>
  );
};
