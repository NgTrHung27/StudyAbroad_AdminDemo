import React from "react";
import Image from "next/image";

export const Welcome = () => {
  return (
    <div className="w-full h-screen relative ">
      <Image
        className="w-full h-full"
        width={0}
        height={0}
        sizes="100vw"
        alt="bgSchool"
        src={"/Truong1/truong10.png"}
      />
      <div className="bg-white bg-opacity-50 z-10 absolute inset-0 mx-auto w-full h-full ">
        <div className="flex flex-col justify-center items-center z-10  ">
          <Image
            alt="logoTruong1"
            src={"/Truong1/cornerstone_logo.png"}
            width={258}
            height={195}
            className="mt-[85px]"
          />
          <div className="text-blue-900 font-bold text-[50px] gap-0 text-center">
            <p style={{ letterSpacing: "-2px" }}>Welcome to</p>
            <p style={{ letterSpacing: "-2px" }} className="my-[-18px]">
              Cornerstone International
            </p>
            <p style={{ letterSpacing: "-2px" }}>Community College</p>
          </div>
        </div>
      </div>
    </div>
  );
};
