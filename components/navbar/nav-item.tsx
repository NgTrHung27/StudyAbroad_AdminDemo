"use client";

import React from "react";

const NavItem = () => {
  return (
    <div className="hidden md:flex flex-row items-center justify-center mx-auto gap-3 text-center">
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60 px-3 py-4">
        Trang chủ
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60 px-3 py-4">
        Trường học
      </div>
      <div className="text-white text-lg font-semibold transition hover:cursor-pointer hover:bg-orange-800/90 hover:text-white/60 px-3 py-4">
        Đời sống sinh viên
      </div>
    </div>
  );
};

export default NavItem;
