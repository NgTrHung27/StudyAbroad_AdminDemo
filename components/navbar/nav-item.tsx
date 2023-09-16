"use client";

import React from "react";

const NavItem = () => {
  return (
    <div className="hidden lg:flex md:flex-row items-center justify-normal mx-auto gap-4">
      <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 px-3">
        Trang chủ
      </div>
      <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 px-3">
        Yêu cầu
      </div>
      <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 px-3">
        Liên kết
      </div>
      <div className="text-white text-lg font-semibold hover:underline transtion hover:cursor-pointer hover:text-white/90 px-3">
        Ngành học
      </div>
    </div>
  );
};

export default NavItem;
