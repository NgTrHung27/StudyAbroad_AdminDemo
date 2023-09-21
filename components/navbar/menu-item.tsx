"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  const isVisible = label === "Đăng ký" || label === "Đăng nhập";

  return (
    <div
      onClick={onClick}
      className={cn(
        "text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold text-center",
        !isVisible && "md:hidden"
      )}
    >
      {label}
    </div>
  );
};

export default MenuItem;
