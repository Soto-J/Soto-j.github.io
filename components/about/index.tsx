import Image from "next/image";

export const About = () => {
  return (
    <div className="relative py-10">
      <Image
        src="/images/color-sharp2.png"
        alt="bg-2"
        quality={100}
        fill
        className="z-0 object-cover"
      />

      <div className="z-10 mx-auto max-w-5xl p-4">
        <h1 className="text-center text-4xl font-bold">About Me</h1>

        <div className="flex">
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
            building web applications using tools such as Javascript,
            React/Nextjs, CSS, Mongodb, and Prisma. I'm ready to showcase my
            knowledge and skills in new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
