"use client";

import React from "react";
import { AiFillCheckCircle, AiOutlineMail } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi";

function DashBoardStatsGrid() {
  return (
    <div className="flex gap-4 w-full mt-5 pl-3 pr-3">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-between bg-orange-600">
          <AiOutlineMail className="text-2xl ml-3" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Hồ sơ chưa duyệt
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              4953
            </strong>
            <span className="text-sm text-green-500 pl-3">+347</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-between bg-green-500">
          <AiFillCheckCircle className="text-2xl ml-3" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Hồ sơ đã duyệt
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              2536
            </strong>
            <span className="text-sm text-green-500 pl-3">+125</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-between bg-violet-500">
          <HiAcademicCap className="text-2xl ml-3" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Số lượng truy cập trang
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              16.532
            </strong>
            <span className="text-sm text-green-500 pl-3">+2000</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-between bg-pink-600">
          <AiOutlineMail className="text-2xl ml-3" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Số lượng học sinh
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              25346
            </strong>
            <span className="text-sm text-green-500 pl-3">+450</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}
export default DashBoardStatsGrid;

function BoxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
