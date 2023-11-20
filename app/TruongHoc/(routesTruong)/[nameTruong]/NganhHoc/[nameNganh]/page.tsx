import React from "react";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Body2 } from "./components/body2";
import getPrograms from "../../../../../../action/get-programs";
import getSchool from "../../../../../../action/get-school";
import NavbarTruong from "../../../../../../components/navbar/navbar";
import getSchools from "../../../../../../action/get-schools";
export const revalidate = 0;
const NganhHoc = async ({ params }: { params: { nameTruong: string } }) => {
  const programs = await getPrograms(params.nameTruong);
  const school = await getSchool(params.nameTruong);
  const schools = await getSchools();

  return (
    <div className="">
      <NavbarTruong school={school} schools={schools}/>
      <Header school={school} />
      <Body programs={programs} />
      <Body2 />
    </div>
  );
}
export default NganhHoc;
