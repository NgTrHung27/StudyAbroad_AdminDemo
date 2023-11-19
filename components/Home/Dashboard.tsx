"use client";

import { User } from "@prisma/client";
import React from "react";
import { AiFillCheckCircle, AiOutlineMail } from "react-icons/ai";
import { HiAcademicCap } from "react-icons/hi";

interface Props {
  users: User[];
}

function DashBoardStatsGrid({ users }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-5 px-3">
      <BoxWrapper>
        <div className="relative rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <AiOutlineMail className="text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 dark:text-white font-light">
            Hồ sơ chưa duyệt
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 dark:text-white font-semibold">
              {users.filter((user) => !user.isPublished).length}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <AiFillCheckCircle className="text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 dark:text-white font-light">
            Hồ sơ đã duyệt
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 dark:text-white font-semibold">
              {users.filter((user) => user.isPublished).length}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-violet-500">
          <HiAcademicCap className="text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 dark:text-white font-light">
            Số lượng truy cập trang
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 dark:text-white font-semibold">
              16.532
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-600">
          <AiOutlineMail className="text-2xl" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 dark:text-white font-light">
            Số lượng học sinh
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 dark:text-white font-semibold">
              25346
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}
export default DashBoardStatsGrid;

function BoxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-background rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
