import React from "react";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <div className="relative h-[132px] w-full">
        <Image
          width={205}
          height={123}
          alt=""
          src={"/ChiTietNganhHoc/Sprott 1.png"}
          className="absolute mt-[10px] rounded-2xl right-0"
        />
      </div>
    </>
  );
};
