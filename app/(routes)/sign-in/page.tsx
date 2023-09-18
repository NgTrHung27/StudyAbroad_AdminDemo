"use client";

import Image from "next/image";
import Link from "next/link";
import LoginModal from "../../../components/login/login-modal";

const SignInPage = () => {
  return (
    <main className="h-full w-full flex flex-row items-center">
      <Link
        href={"/"}
        className="hidden md:block m-12 self-start absolute w-24 h-14"
      >
        <Image fill alt="Logo" className="cursor-pointer" src="/logo.png" />
      </Link>
      <div className="w-full h-full text-black">
        <LoginModal />
      </div>
      <div className="relative text-black bg-orange-500 w-full h-full">
        <Image fill alt="Logo" src={"/Login_BG.png"} />
      </div>
    </main>
  );
};

export default SignInPage;
