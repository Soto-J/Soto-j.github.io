import Image from "next/image";

import { Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { MdLiveTv } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

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
    <Card className="py-4 max-w-xs">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between w-full">
          <h4 className="font-bold text-large">{title}</h4>

          <div className="flex gap-x-6">
            <Link href={liveHref} target="_blank">
              <MdLiveTv className="h-6 w-6" />
            </Link>
            <Link href={githubHref}>
              <BsGithub className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* <p className="text-tiny uppercase font-bold">{description}</p> */}
        <small className="text-default-500 mt-1">{description}</small>
      </CardHeader>

      <CardBody className="overflow-visible">
        <div className="relative h-56 mt-auto">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={src}
            fill
            // width={270}
            // height={150}
          />
        </div>
      </CardBody>
    </Card>
  );
};
