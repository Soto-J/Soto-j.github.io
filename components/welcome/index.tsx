import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Welcome = () => {
  return (
    <div className="relative min-h-[92vh] p-2 flex items-center justify-center text-slate-200">
      <Image
        src="/images/banner-bg.png"
        alt="banner"
        quality={100}
        fill
        className="object-cover"
      />

      <div className="z-10 max-w-2xl lg:max-w-6xl p-4">
        <div className="text-center lg:text-start flex flex-col-reverse lg:flex-row">
          <div className="flex-1">
            <h1 className="font-bold text-5xl">
              Hello, Welcome To My Personal Portfolio!
            </h1>
            <p className="mt-6 text-lg font-light">
              I'm John Soto, a passionate and dedicated developer from New York
              who recently graduated with a Bachelor's degree in Computer
              Science in the spring of 2023. I have a strong passion for
              building innovative applications and websites that can make a
              positive impact on people's lives. I'm thrilled to share my
              journey, experiences, and projects with you.
            </p>
          </div>

          <div className="flex-1 mt-8 lg:mt-0">
            <Image
              src="/images/header-img.svg"
              alt="header-img"
              quality={100}
              height={300}
              width={300}
              className="mx-auto animate-slowBounce mt-12"
            />
          </div>
        </div>

        <div className="max-w-fit mx-auto lg:mx-0 pt-12">
          <Button as={Link} href="/resume/John_Soto-resume.pdf" size="lg">
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
