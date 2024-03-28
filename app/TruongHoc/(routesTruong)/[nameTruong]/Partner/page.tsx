import React from "react";
import NavbarTruong from "../../../../../components/navbar/navbar";
import getSchool from "../../../../../action/get-school";
import getSchools from "../../../../../action/get-schools";
import {Content} from "./Component/Content"

const page = async (
  {
    params,
  }:
  {
    params: { nameTruong: string };
  }) => {
    
    const school = await getSchool(params.nameTruong);
    const schools = await getSchools();
    
  return (
    <div>
      <NavbarTruong school={school} schools={schools}/>
      <Content/>
    </div>
  );
};

export default page;
