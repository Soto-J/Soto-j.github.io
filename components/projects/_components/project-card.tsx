import Image from "next/image";

import { Card, CardBody, CardHeader } from "@nextui-org/react";

type ProjectCardProps = {
  title: string;
  src: string;
  description: string;
};

export const ProjectCard = ({ title, src, description }: ProjectCardProps) => {
  return (
    <Card className="py-4 max-w-fit">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <p className="text-tiny uppercase font-bold">{description}</p>
        <small className="text-default-500">{description}</small>
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
