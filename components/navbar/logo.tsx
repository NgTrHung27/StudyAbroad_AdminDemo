"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

const Logo = () => {
  const router = useRouter();

  return (
      <Image
        width={80}
        height={80}
        onClick={() => router.push("/")}
        alt="Logo"
        className="cursor-pointer"
        src="/logo.png"
      />
  );
};

export default Logo;
