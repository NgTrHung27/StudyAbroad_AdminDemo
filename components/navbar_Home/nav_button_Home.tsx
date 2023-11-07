// Header.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const links = ["Đăng Nhập", "Đăng Ký"];

export default function NavBtSeo() {
  const router = useRouter();
  return (
    <div className="flex gap-3 md:text-lg text-[9px]">
      <button
        onClick={() => router.push("/sign-in")}
        className="bg-[#4A1414] hover:bg-[#fd2021] text-white font-semibold md:py-2 md:px-4 px-1 py-2 border border-gray-400 rounded shadow"
      >
        Đăng nhập
      </button>
      <button
        onClick={() => router.push("/sign-up")}
        className="bg-[#4A1414] hover:bg-[#fd2021] text-white font-semibold md:py-2 md:px-4 px-1 py-2 border border-gray-400 rounded shadow"
      >
        Đăng Ký
      </button>
    </div>
  );
}
