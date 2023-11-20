"use client";

import Image from "next/image";

interface GalleryTabProps {
  background: string;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ background }) => {
  return (
    <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white dark:bg-background">
      <div>
        <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
          <Image
            fill
            src={background}
            alt=""
            className="object-fit object-center"
          />
        </span>
      </div>
    </div>
  );
};

export default GalleryTab;
