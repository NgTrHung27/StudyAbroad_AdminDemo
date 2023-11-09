import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Body2 } from "./components/body2";
import getPrograms from "../../../../../action/get-programs";


const NganhHoc = async ({ params }: { params: { nameTruong: string } }) => {
  const program = await getPrograms(params.nameTruong);
  return (
    <div className="">
      <Header />
      <Body programs={program} />
      <Body2 />
    </div>
  );
}
export default NganhHoc;
