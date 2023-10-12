import React from "react";
import Image from "next/image";

export const History = () => {
  return (
    <div className="w-full h-fit relative bg-yellow-500 " >
      <div className="w-screen h-[209px] relative">
        <Image
          alt="/"
          src="/Truong1/historyheader.png"
          fill
          className="absolute w-full h-full"
        />
        <div className="relative bg-blue-950 bg-opacity-90 z-10 inset-0 w-full h-full text-center tracking-tight items-center flex justify-center text-[24px] md:text-5xl font-bold text-white">
          <p className=" font-bold text-white " >Lịch sử của<br/>
          Cornerstone International Community College</p>
        </div>
      </div>
      <div className="w-full h-full grid-cols-3 grid relative">
        <div className="col-span-1">
          <img alt="/2" src="/Truong1/truong1.png" className="w-full h-full  " />
        </div>
        <div className="col-span-2 relative z-0 flex justify-center">
          <div className="bg-white my-4 z-10 ">
            <div className="flex flex-col py-[66px] ">
              <div className="flex flex-row pl-[22px] pr-[58px]">
                <div className=" p-0 w-8 h-8 rounded-full border-yellow-500 border-[2px] border-dashed justify-center items-center font-bold flex absolute">
                  <p>01</p>
                </div>
                <div className="flex ml-[50px] text-neutral-950 font-semibold ">
                  Cornerstone international community college (CICC) là một cơ
                  sở giáo dục nổi tiếng với lịch sử đa dạng và phong phú.
                </div>
              </div>
              <div className="bg-yellow-500 w-[3px] h-[140px] ml-[37px] mt-12 absolute"></div>
              <div className="flex flex-row pl-[22px] pr-[58px] mt-[156px]">
                <div className=" p-0 w-8 h-8 rounded-full border-yellow-500 border-[2px] border-dashed justify-center items-center font-bold flex absolute">
                  <p>02</p>
                </div>
                <div className="flex ml-[50px] text-neutral-950 font-semibold mr-[30px] ">
                  <p>
                    CICC được thành lập vào năm 1980 với tầm nhìn cung cấp một
                    nền giáo dục chất lượng và dễ tiếp cận cho sinh viên từ
                    nhiều nền văn hóa khác nhau. Kể từ khi thành lập, CICC cam
                    kết cung cấp các chương trình học phù hợp với ngành nghề và
                    trang bị cho sinh viên sự thành công trong sự nghiệp.
                  </p>
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
      </div>
    </div>
  );
};
