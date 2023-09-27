"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({ weight: "500", subsets: ["latin"] });

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
          "uppercase font-semibold text-[#7D1F1F] text-lg",
          font.className
        )}
      >
        Quan Ly Du Hoc
      </p>
    </div>
  );
};

export default Logo;
