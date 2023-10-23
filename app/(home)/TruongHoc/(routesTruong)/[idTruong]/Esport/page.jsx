import React from "react";
import DoiTac2_cp from "../../../../../components/DoiTac2_cp/doitac";
import { Body2 } from "./components/body2";
import { Body3 } from "./components/body3";

function page({ params }) {
  return (
    <div className="h-full">
      <DoiTac2_cp />
      <Body2 />
      <Body3 />
    </div>
  );
}

export default page;
