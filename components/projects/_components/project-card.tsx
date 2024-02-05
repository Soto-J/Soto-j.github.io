import Image from "next/image";

import { Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { MdLiveTv } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  title: string;
  src: string;
  description: string;
};

export const ProjectCard = ({ title, src, description }: ProjectCardProps) => {
  return (
    <Card className="py-4 max-w-xs">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex justify-between w-full">
          <h4 className="font-bold text-large">{title}</h4>

          <div className="flex gap-x-6">
            <Link href="/">
              <MdLiveTv className="h-6 w-6" />
            </Link>
            <Link href="/">
              <BsGithub className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* <p className="text-tiny uppercase font-bold">{description}</p> */}
        <small className="text-default-500 mt-1">{description}</small>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={src}
          width={270}
          height={150}
        />
      </CardBody>
    </Card>
  );
};
