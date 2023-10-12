import Image from "next/image";
import React from "react";

const IconBenefit = ({ src, description }) => {
  return (
    <div className="w-full flex flex-row md:flex-col items-center justify-center gap-8 md:gap-y-2">
      <Image
        width={100}
        height={100}
        alt="Icon"
        src={src}
        className="object-cover"
      />
      <p className="break-words w-full max-w-[150px]">{description}</p>
    </div>
  );
};

export default IconBenefit;
