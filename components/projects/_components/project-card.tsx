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
    <Card className="max-w-xs py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
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

        {/* <p className="text-tiny uppercase font-bold">{description}</p> */}
        <small className="mt-1 text-default-500">{description}</small>
      </CardHeader>

      <CardBody className="overflow-visible">
        <div className="relative mt-auto h-56">
          <Image
            alt="Card background"
            className="rounded-xl object-cover"
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
