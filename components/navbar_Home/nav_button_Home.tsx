// Header.tsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SafeUser } from "../../types";
import { signOut } from "next-auth/react";

const links = ["Đăng Nhập", "Đăng Ký"];

type Props = {
  currentUser?: SafeUser | null;
};

export default function NavBtSeo({ currentUser }: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-3 md:text-lg text-[9px]">
      {currentUser ? (
        <button
          onClick={() =>
            signOut({ callbackUrl: "http://localhost:3001/truonghoc" })
          }
          className="bg-[#4A1414] hover:bg-[#fd2021] text-white font-semibold md:py-2 md:px-4 px-1 py-2 border border-gray-400 rounded shadow"
        >
          Đăng xuất
        </button>
      ) : (
        <>
          <button
            onClick={() => router.push("/dangnhap")}
            className="bg-[#4A1414] hover:bg-[#fd2021] text-white font-semibold md:py-2 md:px-4 px-1 py-2 border border-gray-400 rounded shadow"
          >
            Đăng nhập
          </button>
          <button
            onClick={() => router.push("/dangky")}
            className="bg-[#4A1414] hover:bg-[#fd2021] text-white font-semibold md:py-2 md:px-4 px-1 py-2 border border-gray-400 rounded shadow"
          >
            Đăng Ký
          </button>
        </>
      )}
    </div>
  );
}
