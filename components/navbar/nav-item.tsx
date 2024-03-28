"use client";
import { School } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { TruongHocCombobox } from "../ui/truonghoc-combobox";

interface Props {
  school: School;
  schools: School[];
}
const NavItem = ({ school, schools }: Props) => {
  console.log(school);
  return (
    <div className="hidden md:flex flex-row items-center justify-center mx-auto gap-3 text-center md:h-[72px] md:text-lg text-base">
      <Link
        className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8"
        href={"/"}
      >
        Trang chủ
      </Link>
      <div className="flex flex-row items-center justify-center">
        <TruongHocCombobox schools={schools} />
      </div>
      <Link
        className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8"
        href={`/TruongHoc/${school?.name}/Request`}
      >
        Yêu Cầu
      </Link>
      <Link
        className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8"
        href={`/TruongHoc/${school?.name}/Partner`}
      >
        {" "}
        Đối Tác
      </Link>
      <Link
        className="text-white font-semibold transition hover:cursor-pointer hover:bg-white hover:text-red-900 min-h-full flex justify-center text-center items-center px-8"
        href={`/TruongHoc/${school?.name}/Program/nameNganh`}
      >
        Ngành Học
      </Link>
    </div>
  );
};
export default NavItem;
