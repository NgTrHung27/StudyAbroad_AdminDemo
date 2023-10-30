import React from "react";
import Image from "next/image";
import { School } from "@prisma/client";

interface Props {
  school: School;
}

export const Welcome = ({ school }: Props) => {
  return (
    <div className="w-full h-[120vh] relative flex justify-center items-center">
      <Image
        className="w-full h-full object-cover"
        layout="fill"
        alt="bgSchool"
        src={"/Truong1/truong10.png"}
      />
      <div className="bg-white bg-opacity-75 z-10 absolute inset-0 mx-auto w-full h-full flex justify-center items-center">
        <div className="text-center">
          <div className=" sm:mt-16 flex justify-center">
            <Image
              alt="logoTruong1"
              src={"/Truong1/cornerstone_logo.png"}
              width={258}
              height={195}
            />
          </div>
          <div className="text-blue-900 font-bold md:text-5xl text-3xl ">
            <p>Welcome to</p>
            <p className="mt-[-0.5rem]">{school.name}</p>
            <p className="mt-[-0.5rem]">Community College</p>
          </div>
        </div>
      </div>
    </div>
  );
};
