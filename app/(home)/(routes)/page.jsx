"use client";
import React from "react";
import Carousel from "./_components/1_Carousel";
import Benefit from "./_components/2_Benefit";
import WhyCEMC from "./_components/3_WhyCEMC";
import Motel from "./_components/4_Motel";
import Event from "./_components/5_Event_Bus";
import HighlightSchool from "./_components/6_HightlightSchool";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <Benefit />
      </div>
      <WhyCEMC />
      <Motel />
      <Event />
      <div className="mt-16 p-4 bg-[url('/Home_Bg_Hightlight.png')]">
        <HighlightSchool />
      </div>
    </div>
  );
};

export default HomePage;
