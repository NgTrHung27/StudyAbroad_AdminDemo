import React from "react";
import Image from "next/image";
import { School } from "@prisma/client";
interface Props {
  school: School;
}
export const Logo = ({ school }: Props) => {
  return (
    <>
      <div className="relative h-[132px] w-full">
        <Image
          width={205}
          height={123}
          alt=""
          src={school.logoUrl}
          className="absolute mt-[10px] rounded-2xl right-0"
        />
      </div>
    </>
  );
};
