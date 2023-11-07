import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineMenu, AiOutlineMenuUnfold,  } from "react-icons/ai";
import Avatar from "../avatar";
import MenuItem from "./menu-item";

const HomeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const ref = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <div className="relative md:hidden">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="py-1 px-2 mr-3 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition"
        >
          <AiOutlineMenuUnfold className="text-white font-bold text-lg " />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-40 bg-white overflow-hidden -left-28 top-12 text-sm">
          <div ref={ref} className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => {}} label="Trang chủ" />
            <MenuItem onClick={() => {}} label="Liên hệ" />
            <MenuItem onClick={() => {}} label="So sánh" />
            <MenuItem onClick={() => {}} label="Học phí" />    
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeMenu;
