import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import MenuItem from "./menu-item";

const UserMenu = () => {
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
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="py-1 px-2 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition"
        >
          <AiOutlineMenu className="text-white font-bold text-2xl" />
          <div className="hidden w-full h-full md:block">
            <Avatar src={"/placeholder.jpg"} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-40 bg-white overflow-hidden right-0 top-14 text-sm">
          <div ref={ref} className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => router.push("/")} label="Trang chủ" />
            <MenuItem onClick={() => router.push("/YeuCau")} label="Yêu cầu" />
            <MenuItem
              onClick={() => router.push("/LienKet")}
              label="Liên kết"
            />
            <MenuItem
              onClick={() => router.push("/NganhHoc")}
              label="Ngành học"
            />
            <hr />
            <MenuItem
              onClick={() => router.push("/dangnhap")}
              label="Đăng nhập"
            />
            <MenuItem onClick={() => router.push("/dangky")} label="Đăng ký" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
