import React from "react";
import Header from "./components/Header";
import NavbarTruong from "../../../../../components/navbar/navbar";
import getSchool from "../../../../../action/get-school";

const Page = async (
  {
    params,
  }:
    {
      params: { nameTruong: string };
    }) => {
    
      const school = await getSchool(params.nameTruong);

  return (
    <div className="">
      <NavbarTruong school={school} />
      <Header />
    </div>
  );
}
export default Page;
