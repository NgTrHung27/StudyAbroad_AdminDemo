"use client";

import React from "react";
import Image from "next/image";
const HightlightSchool = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center text-4xl mt-14 font-bold text-[#7D1F1F] ">
        Các trường nổi bật
      </div>
      <div className=" mt-10 container snap-x flex snap-mandatory h-150 w-300 mx-auto overflow-x-auto gap-10 cursor-pointer">
        <div className="snap-start h-150 w-300 flex-shrink-0 flex flex-item">
          <Image
            width={300}
            height={150}
            alt="Icon"
            src="/Banner_Valeey.jpg"
            style={{width:"auto", height:"auto"}}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="snap-start h-150 w-300 flex-shrink-0 flex flex-item justify-center">
          <Image
            width={300}
            height={150}
            alt="Icon"
            src="/Banner_Sprott.jpg"
            style={{width:"auto", height:"auto"}}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="snap-start h-150 w-300 flex-shrink-0 flex flex-item justify-center">
          <Image
            width={300}
            height={150}
            alt="Icon"
            src="/Banner_Metropolitan.jpg"
            style={{width:"auto", height:"auto"}}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="snap-start h-150 w-300 flex-shrink-0 flex flex-item justify-center">
          <Image
            width={300}
            height={150}
            alt="Icon"
            src="/Banner_Cornerstone.jpg"
            style={{width:"auto", height:"auto"}}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="snap-start h-150 w-300 flex-shrink-0 flex flex-item justify-center">
          <Image
            width={300}
            height={150}
            alt="Icon"
            src="/Banner_Canada.jpg"
            style={{width:"auto", height:"auto"}}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HightlightSchool;
