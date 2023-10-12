"use client";
import Link from "next/link";
import React from "react";

const NavItem = () => {
  return (
    <div className="hidden md:flex flex-row items-center justify-center mx-auto gap-3 text-center h-full my-2">
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60">
        <Link href={"/"}>Trang chủ</Link>
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60">
        <Link href={"/id/YeuCau"}>Yêu Cầu</Link>
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60">
        <Link href={"/id/DoiTac"}> Đối Tác</Link>
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60">
        <Link href={"/id/NganhHoc"}>Ngành Học</Link>
      </div>
    </div>
  );
};

export default NavItem;
