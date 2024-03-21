"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      width={72}
      height={72}
      onClick={() => router.push("/")}
      alt="Logo"
      className="cursor-pointer"
      style={{width:"full", height:"full"}}
      src="/logoCEMCwhite.png"
    />
  );
};

export default Logo;
