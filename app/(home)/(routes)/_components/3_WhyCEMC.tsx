"use client";

import React from "react";
import Image from "next/image";

const WhyCEMC = () => {
  return (
    <div className="flex flex-col text-[#7D1F1F]   mt-14">
      <p className="text-center text-4xl font-bold ">
        Vì sao nên chọn CEMC CO., LTD?
      </p>
      <div className="mx-auto mt-14">
        <Image
          width={500}
          height={500}
          alt="Icon"
          src="/3Icon.png"
          className="object-cover "
        />
      </div>
      <p className="text-center text-2xl mt-14 font-semibold break-words max-w-[2000px]">
        Vì chúng tôi có những lợi ích tuyệt vời nhất dành cho sinh viên.
      </p>
    </div>
  );
};

export default WhyCEMC;
