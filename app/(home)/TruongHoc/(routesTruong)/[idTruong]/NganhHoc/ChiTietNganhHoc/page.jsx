import React from "react";
import { Header } from "../ChiTietNganhHoc/components/header";
import { Body } from "../ChiTietNganhHoc/components/body";
import { Body2 } from "../ChiTietNganhHoc/components/body2";
import { Logo } from "../ChiTietNganhHoc/components/logo";

export default function Page() {
  return (
    <>
      <div className="bg-[#FFF6E0]">
        <Header />
        <Body />
        <Body2 />
        <Logo />
      </div>
    </>
  );
}
