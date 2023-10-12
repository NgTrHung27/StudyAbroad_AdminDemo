import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { History } from "../../../../components/users/history";
import Navbar from "../../../../components/navbar/navbar";
import { OperationTop } from "../../../../components/users/operation";
import { Blogs } from "../../../../components/users/blogs";
import { OperationBody } from "../../../../components/users/operationbody";

function page({ params }) {
  return (
    <div>
      <Welcome />
      <History />
      <OperationTop />
      <OperationBody/>
      <Blogs />
    </div>
  );
}

export default page;
