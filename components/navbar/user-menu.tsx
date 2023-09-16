"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import MenuItem from "./menu-item";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={"/placeholder.jpg"} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-72 md:text-center bg-white overflow-hidden right-0 top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            <div className="lg:hidden">
              <MenuItem onClick={() => {}} label="Trang chủ" />
              <MenuItem onClick={() => {}} label="Yêu cầu" />
              <MenuItem onClick={() => {}} label="Liên kết" />
              <MenuItem onClick={() => {}} label="Ngành học" />
            </div>
            <hr />
            <MenuItem onClick={() => router.push("/sign-in")} label="Đăng nhập" />
            <hr className="hidden lg:block" />
            <MenuItem onClick={() => router.push("/sign-up")} label="Đăng ký" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
