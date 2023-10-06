import React from "react";
import Image from "next/image";
import { Operationcard_1 } from "./operationcard_1";

export const Operation = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative">
          <Image
            alt="/"
            src="/Truong1/historyheader.png"
            width={1440}
            height={219}
            className="z-0"
          />
          <div className="bg-blue-950 bg-opacity-90 z-10 absolute inset-0 w-full min-h-[225px] text-center items-center flex flex-col">
            <div className=" text-[48px] font-bold text-white pb-4">
              <p style={{ letterSpacing: "-1px" }}>Các cơ sở của Cornerstone</p>
            </div>
            <div className="bg-white w-[92%] min-h-[144px] z-20 absolute top-[70px] mb-5 flex flex-col">
              <div className="flex flex-row justify-center ">
                <div>
                  <Image
                    className="mx-1"
                    alt="/"
                    src={"/Truong1/book.png"}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-center text-center text-black font-[28px]">
                  <p style={{ letterSpacing: "-0.5px" }}>
                    Cornerstone International Community College là trường{" "}
                  </p>
                  <p style={{ letterSpacing: "-0.5px", marginTop: "-5px" }}>
                    cao đẳng tư thục lớn nhất ở Vancouver.
                  </p>
                </div>
                <div>
                  <Image
                    className="mx-1"
                    alt="/"
                    src={"/Truong1/book.png"}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col mt-2 justify-center items-center">
                  <div>
                    <Image
                      className="mx-1"
                      alt="/"
                      src={"/Truong1/brifecase.png"}
                      width={34}
                      height={36}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <p style={{ letterSpacing: "-0.5px" }}>
                      Trường có 3 cơ sở :
                    </p>
                    <p
                      style={{ letterSpacing: "-0.5px" }}
                      className="mt-[-5px]"
                    >
                      {" "}
                      West Hastings, Granville và Seymore.
                    </p>
                  </div>
                </div>
                <div className="mx-[85px]">
                  <Image
                    className="mx-1"
                    alt="/"
                    src={"/Truong1/canadaflag.png"}
                    width={137}
                    height={69}
                  />
                </div>
                <div className="flex flex-col mt-2 justify-center items-center">
                  <div>
                    <Image
                      className="mx-1"
                      alt="/"
                      src={"/Truong1/brifecase.png"}
                      width={34}
                      height={36}
                    />
                  </div>
                  <div className="flex flex-col mt-2">
                    <p style={{ letterSpacing: "-0.5px" }}>
                      {" "}
                      Thêm 1 cơ sở đang được xây dựng tại Gastown
                    </p>
                    <p
                      style={{ letterSpacing: "-0.5px" }}
                      className="mt-[-5px]"
                    >
                      {" "}
                      cho các chương trình công nghệ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen ">
        <div className="bg-black w-full h-[190vh] relative">
          <Image
            alt="/"
            src="/Truong1/bg-operations.png"
            width={1440}
            height={0}
            className="w-full h-full z-0 "
          />
          <div className="z-10 grid grid-cols-3 gap-4 absolute top-[280px] w-full h-auto px-5 ">
            <div className="col-span-1 ">
              <Operationcard_1 />
            </div>
            <div className="col-span-1">
              <Operationcard_1 />
            </div>
            <div className="col-span-1">
              <Operationcard_1 />
            </div>
            <div className="col-start-2 col-span-1 mt-[250px] ">
              <Operationcard_1 />
            </div>
          </div>
          <div className="w-full h-8 bg-yellow-500 rounded-t-xl absolute bottom-0"></div>
        </div>
      </div>
    </div>
  );
};
