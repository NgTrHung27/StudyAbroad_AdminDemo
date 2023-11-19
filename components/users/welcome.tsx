import React from "react";
import Image from "next/image";
import { School } from "@prisma/client";
import { cn } from "../../lib/utils";

interface Props {
  school: School;
}

export const Welcome = ({ school }: Props) => {
  return (
    <div className="w-full h-[120vh] relative flex justify-center items-center">
      <Image
        className="w-full h-full object-cover "
        layout="fill"
        alt="bgSchool"
        src={school.backgroundUrl}
      />
      <div className="bg-white bg-opacity-75 z-10 absolute inset-0 mx-auto w-full h-full flex justify-center items-center">
        <div className="text-center">
          <div className=" sm:mt-16 flex justify-center ">
            <Image
              alt="logoTruong1"
              src={school.logoUrl}
              width={258}
              height={195}
              className="rounded-sm mb-3"
            />
          </div>
          <div className={cn("font-bold md:text-5xl text-3xl", `text-[${school.colorValue}]`)}>
            <p>Welcome to</p>
            <p className="mt-[20px]">{school.name}</p>
            <p className="mt-[4px]">Community College</p>
          </div>
        </div>
      </div>
    </div>
  );
};
