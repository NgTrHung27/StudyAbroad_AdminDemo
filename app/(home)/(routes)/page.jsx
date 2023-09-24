"use client";

import React from "react";
import Image from "next/image";
import Carousel from "./_components/Carousel/Carousel";
const HomePage = () => {
  return (
    <div className="h-full">
      <div className="relative h-full">
        {/* <Image
          fill
          src="/HomeSchool.jpg"
          alt=""
          className="object-cover absolute"
        /> */}
        <Carousel />
      </div>
    </div>
  );
};

export default HomePage;
