import React from "react";
import Header from "./components/Header";
import NavbarTruong from "../../../../../components/navbar/navbar";
import getSchool from "../../../../../action/get-school";
import getRequirements from "../../../../../action/get-Requirements";
import getSchools from "../../../../../action/get-schools";

const Page = async (
  {
    params,
  }:
    {
      params: { nameTruong: string };
    }) => {

  const school = await getSchool(params.nameTruong);
  const schools = await getSchools();
  const requirements = await getRequirements(params.nameTruong);
  return (
    <div className="">
      <NavbarTruong school={school} schools={schools}/>
      <Header requirements={requirements} />
    </div>
  );
}
export default Page;
