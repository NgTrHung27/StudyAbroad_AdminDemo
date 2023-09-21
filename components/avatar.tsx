"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className="rounded-full"
      height={60}
      width={60}
      alt="Avatar"
      src={"/placeholder.jpg"}
    />
  );
};

export default Avatar;
