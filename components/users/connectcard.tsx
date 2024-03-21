import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { ChevronRight } from "lucide-react";

interface ConnectcardProps {
  imageSrc: string;
  title: string;
  description: string;
  action: string;
  bgColor: string;
  iconColor: string;
}

const Connectcard = ({
  imageSrc,
  title,
  description,
  action,
  bgColor,
  iconColor,
}: ConnectcardProps) => {
  return (
    <div className="relative flex flex-col border w-full h-full items-center justify-center shadow-lg rounded-b-3xl ">
      <div className="relative w-full h-[279px]">
        <Image alt="/" src={imageSrc} fill className="object-cover absolute" />
      </div>

      <div>
        <h2 className="text-2xl capitalize font-bold">{title}</h2>
      </div>
      <h3 className="w-full pb-12 px-3">{description}</h3>
      <Button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 absolute -bottom-5",
          bgColor
        )}
      >
        <div className="flex items-center justify-between gap-x-2">
          {action}
          <div className="flex items-center justify-center bg-white m-4 rounded-md mr-auto">
            <ChevronRight className={cn("w-4 h-4 my-1 mx-2", iconColor)} />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Connectcard;
