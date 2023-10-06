import React from "react";
import Image from "next/image";
import { Blogscard } from "./blogscard";

export const Blogs = () => {
  return (
    <div className="w-full min-h-[1000px]  p-3 bg-black flex flex-col relative">
      <div className="flex flex-row  ">
        <Image
          src={"/Truong1/blogsicon.png"}
          alt="logoBottom"
          width={280}
          height={214}
          className="absolute left-[400px] mt-[-52px]"
        />
        <p className="text-white font-extrabold text-4xl absolute left-[600px] mt-7">
          BLOGS
        </p>
      </div>
      <div className="grid grid-cols-3 px-10 gap-4 items-center mt-28">
        <div className="col-span-1">
          <Blogscard />
        </div>
        <div className="col-span-1">
          <Blogscard />
        </div>
        <div className="col-span-1">
          <Blogscard />
        </div>
        <div className="col-span-1">
          <Blogscard />
        </div>
        <div className="col-span-1">
          <Blogscard />
        </div>
        <div className="col-span-1">
          <Blogscard />
        </div>
      </div>
    </div>
  );
};
