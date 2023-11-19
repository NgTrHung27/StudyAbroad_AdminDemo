import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { OperationTop } from "../../../../components/users/operation";
import { OperationBody } from "../../../../components/users/operationbody";
import Procedure from "../../../../components/users/procedure";
import { Connect } from "../../../../components/users/connect";
import { Blogs } from "../../../../components/users/blogs";
import { redirect } from "next/navigation";
import NavbarTruong from "../../../../components/navbar/navbar";
import getSchool from "../../../../action/get-school";
import getOperation from "../../../../action/get-operations";
import { History1 } from "../../../../components/users/history";
import getHistory from "../../../../action/get-histories";
import getHistories from "../../../../action/get-histories";
const TruongHocNamePage = async (
  {
    params,
  }:
    {
      params: { nameTruong: string };
    }) => {
  const school = await getSchool(params.nameTruong);
  const operation = await getOperation(params.nameTruong);
  const histories = await getHistories(params.nameTruong)
  if (!school) {
    return redirect("/");
  }
  return (
    <div>
      <NavbarTruong school={school} />
      <div className="h-full w-full pt-[72px]">
        <Welcome school={school} />
        <History1 school={school} histories={histories} />
        <OperationTop school={school} />
        <OperationBody school={school} operations={operation} />
        <Procedure />
        <Connect />
        <Blogs />
      </div>
    </div>
  );
};
export default TruongHocNamePage;