import React from "react";
import Image from "next/image";
import { School, History } from "@prisma/client";
import { cn } from "../../lib/utils";
import { Preview } from "../preview";

interface Props {
  school: School;
  histories: History[];
}

export const History1 = ({ school, histories }: Props) => {
  return (
    <div className={cn("w-full h-fit relative", `bg-[${school.colorValue}]`)}>
      <div className="w-full h-[209px] relative">
        <Image
          alt="/"
          src="/Truong1/historyheader.png"
          fill
          className="absolute w-full h-full"
        />
        <div className="relative bg-blue-950 bg-opacity-90 z-10 inset-0 w-full h-full text-center tracking-tight items-center flex justify-center text-[24px] md:text-5xl font-bold text-white">
          <p className=" font-bold text-white ">
            Lịch sử của
            <br />
            {school.name}
          </p>
        </div>
      </div>
      <div className="w-full h-full grid-cols-1 md:grid-cols-3 grid relative">
        <div className="col-span-1 relative">
          <Image alt="/2" src="/Truong1/truong1.png" fill className="w-full h-full absolute" />
        </div>
        <div className="col-span-2 relative z-0 flex justify-center">
          {histories.map((historie) => (
            <div key={historie.description1}>

              <div className="bg-white my-4 z-10 ">
                <div className="flex flex-col py-[120px] ">
                  <div className="flex flex-row pl-[22px] pr-[58px]">
                    <div className={cn("p-0 mt-2 w-8 h-8 rounded-full  border-[2px] border-dashed justify-center items-center font-bold flex absolute", `border-[${school.colorValue}]`)}>
                      <p>01</p>
                    </div>
                    <div className="flex ml-[50px] text-neutral-950 font-semibold ">
                      <Preview value={historie.description1} />
                    </div>
                  </div>
                  <div className={cn("w-[3px] h-[140px] ml-[37px] mt-12 absolute", `bg-[${school.colorValue}]`)}></div>
                  <div className="flex flex-row pl-[22px] pr-[58px] md:mt-[175px] mt-[130px]">
                    <div className={cn("p-0 w-8 h-8 rounded-full  border-[2px] border-dashed justify-center items-center font-bold flex absolute", `border-[${school.colorValue}]`)}>
                      <p>02</p>
                    </div>
                    <div className="flex mt-[-10px] ml-[50px] text-neutral-950 font-semibold mr-[30px] ">
                      <Preview value={historie.description2} />
                    </div>
                  </div>
                </div>
                <div className="right-10 bottom-0 absolute z-10 w-[204px] h-[167px] invisible md:visible ">
                  <Image
                    src={"/Truong1/cornerstone_logo.png"}
                    alt="logoBottom"
                    width={204}
                    height={167}
                  />
                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
    </div>
  );
};
