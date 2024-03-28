import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <Image
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        src="/ChiTietNganhHoc/nav.png"
        className="w-full h-[auto]"
      />
    </>
  );
};
