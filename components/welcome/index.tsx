import Image from "next/image";
import Link from "next/link";

import { Button } from "@nextui-org/react";

export const Welcome = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: "url('/images/banner-bg.png')",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex min-h-[95vh] items-center justify-center p-2 text-slate-200"
    >
      <div className="max-w-2xl p-4 lg:max-w-6xl">
        <div className="flex flex-col-reverse text-center lg:flex-row lg:text-start">
          <div className="flex-1">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Hello, Welcome To My Personal Portfolio!
            </h1>

            <p className="mt-6 text-lg font-light">
              I&apos;m John Soto, a passionate and dedicated developer from New
              York who recently graduated with a Bachelor&apos;s degree in
              Computer Science in the spring of 2023. I have a strong passion
              for building innovative applications and websites that can make a
              positive impact on people&apos;s lives. I&apos;m thrilled to share
              my journey, experiences, and projects with you.
            </p>
          </div>

          <div className="mt-8 flex-1 lg:mt-0">
            <Image
              src="/images/header-img.svg"
              alt="header-img"
              quality={100}
              height={300}
              width={300}
              className="mx-auto mt-12 animate-slowBounce"
            />
          </div>
        </div>

        <div className="mx-auto max-w-fit pt-12 lg:mx-0">
          <Button as={Link} href="/resume/John_Soto-resume.pdf" size="lg">
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
