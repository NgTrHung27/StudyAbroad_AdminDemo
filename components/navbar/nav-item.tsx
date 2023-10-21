"use client";
import Link from "next/link";
import React from "react";

const NavItem = () => {
  return (
    <div className="hidden md:flex flex-row items-center justify-center mx-auto gap-3 text-center h-full">
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[22px]">
        <Link href={"/"}>Trang chủ</Link>
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[22px] ">
        <Link href={"/id/YeuCau"}>Yêu Cầu</Link>
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[22px] ">
        <Link href={"/id/DoiTac"}> Đối Tác</Link>
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[22px] ">
        <Link href={"/id/NganhHoc"}>Ngành Học</Link>
      </div>
       <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 p-[28px]">
          <a href="/id/ThongTinCacTruong">So Sánh</a>
        </div>
    </div>
  );
};

export default NavItem;
