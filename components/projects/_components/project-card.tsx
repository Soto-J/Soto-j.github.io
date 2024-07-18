import Image from "next/image";

import { MdLiveTv } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import { Link, Card, CardBody, CardHeader } from "@nextui-org/react";

type ProjectCardProps = {
  title: string;
  src: string;
  liveHref: string;
  githubHref: string;
  description: string;
};

export const ProjectCard = ({
  title,
  src,
  description,
  liveHref,
  githubHref,
}: ProjectCardProps) => {
  return (
    <Card className="max-w-96 py-4">
      <CardHeader className="flex-col items-start px-4 pb-0">
        <div className="flex w-full justify-between">
          <h4 className="text-large font-semibold">{title}</h4>

          <div className="flex gap-x-6">
            <Link href={liveHref} target="_blank">
              <MdLiveTv className="h-6 w-6" />
            </Link>
            <Link href={githubHref} target="_blank">
              <BsGithub className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <p className="pt-4 text-sm font-light tracking-wide">{description}</p>
      </CardHeader>

      <CardBody className="overflow-visible pt-6">
        <div className="relative mt-auto h-56">
          <Image
            fill
            src={src}
            alt="Card background"
            className="rounded-lg object-center"
          />
        </div>
      </CardBody>
    </Card>
  );
};
