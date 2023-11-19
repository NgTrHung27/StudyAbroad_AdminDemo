"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const font = Montserrat({ weight: "500", subsets: ["vietnamese"] });

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        width={50}
        height={50}
        alt="logo"
        src={"/logo_red.png"}
        className="object-fit"
      />
      <p
        className={cn(
          "uppercase font-semibold text-[#7D1F1F] dark:text-white text-lg",
          font.className
        )}
      >
        <span>Quản lý du học</span>
      </p>
    </div>
  );
};

export default Logo;
