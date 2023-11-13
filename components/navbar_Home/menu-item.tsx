"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  href: string; // Thêm prop mới
}

const MenuItem = ({ onClick, label, href }: MenuItemProps) => {
  return (
    <a // Thay thế 'div' bằng 'a'
      href={href} // Sử dụng prop 'href'
      onClick={onClick}
      className={cn(
        "text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold text-center",
        "md:hidden"
      )}
    >
      {label}
    </a>
  );
};

export default MenuItem;
