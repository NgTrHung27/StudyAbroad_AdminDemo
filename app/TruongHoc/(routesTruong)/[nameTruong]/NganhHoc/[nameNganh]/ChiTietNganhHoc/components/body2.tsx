import React from "react";
import Image from "next/image";
import { Program } from "@prisma/client";
import { Preview } from "../../../../../../../../components/preview";
import { cn } from "../../../../../../../../lib/utils";
import { Montserrat } from "next/font/google";
const font = Montserrat({ weight: "500", subsets: ["vietnamese"] });
interface Props {
  program: Program;
}
export const Body2 = ({ program }: Props) => {

  return (
    <>
      <div className="text-[40px] text-center mt-6 font-bold text-[#001524]">
        CHƯƠNG TRÌNH HỌC
      </div>
      <div className="bg-[#D8D9DA] mt-2 border-2 rounded-3xl border-[#61677A]">
        <div className="lg:grid grid-cols-3">
          <div className={cn(
            "mt-4 w-full col-span-2",
            font.className
          )}>
            <Preview value={program.description2} />
          </div>
          <br className="lg:hidden" />
          <Image
            width={352}
            height={329}
            alt=""
            src={program.Image2}
            className="col-span-1 w-full h-auto mr-[40px] md:mt-7 lg:ml-[-10px] rounded-lg "
          />
        </div>
      </div>
    </>
  );
};
