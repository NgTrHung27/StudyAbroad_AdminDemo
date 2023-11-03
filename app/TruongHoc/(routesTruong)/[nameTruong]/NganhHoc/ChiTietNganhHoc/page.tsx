import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Body2 } from "./components/body2";
import { Logo } from "./components/logo";

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
