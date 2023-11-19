"use client";
import { School } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  school: School;
}
const NavItem = ({ school }: Props) => {
  return (
    <div className="hidden md:flex flex-row items-center justify-center mx-auto gap-3 text-center md:h-[72px] md:text-lg text-base">
      <Link className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8" href={"/"}>Trang chủ</Link>
      <Link className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8" href={"/"}>Trường Học</Link>
      <Link className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8" href={`/TruongHoc/${school?.name}/YeuCau`}>Yêu Cầu</Link>
      <Link className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8" href={"/TruongHoc/id/DoiTac"}> Đối Tác</Link>
      <Link className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8" href={`/TruongHoc/${school?.name}/NganhHoc/nameNganh`}>Ngành Học</Link>
    </div>
  );
};
export default NavItem;
