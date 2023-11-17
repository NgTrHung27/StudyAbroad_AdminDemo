import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Body2 } from "./components/body2";
import { Logo } from "./components/logo";
import getProgram from "../../../../../../../action/get-program";

const Page = async (
  {
    params,
  }:
    {
      params: { nameTruong: string, nameNganh: string };
    }) => {
  const program = await getProgram(params.nameTruong, params.nameNganh);
  return (
    <div className="bg-[#FFF6E0]">
      <Header />
      <Body program={program} />
      <Body2 program={program} />
      <Logo />
    </div>
  );
}
export default Page;
