import React from "react";
import { Welcome } from "../../../../../components/users/welcome";
import { History } from "../../../../../components/users/history";
import { OperationTop } from "../../../../../components/users/operation";
import { OperationBody } from "../../../../../components/users/operationbody";
import Procedure from "../../../../../components/users/procedure";
import { Connect } from "../../../../../components/users/connect";
import { Blogs } from "../../../../../components/users/blogs";

function page() {
  return (
    <div>
      <Welcome />
      <History />
      <OperationTop />
      <OperationBody />
      <Procedure />
      <Connect />
      <Blogs />
    </div>
  );
}

export default page;