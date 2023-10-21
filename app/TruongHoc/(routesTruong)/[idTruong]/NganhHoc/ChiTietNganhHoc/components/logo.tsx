import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Image
        width={205}
        height={123}
        alt=""
        src={"/ChiTietNganhHoc/Sprott 1.png"}
        className="mt-[10px] rounded-2xl ml-[1000px]"
      />
    </>
  );
};
