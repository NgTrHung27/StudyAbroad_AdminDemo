import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { History } from "../../../../components/users/history";
import Navbar from "../../../../components/navbar/navbar";
import { Operation } from "../../../../components/users/operation";
import { Blogs } from "../../../../components/users/blogs";
import Procedure from "../../../../components/users/procedure";
import { Connect } from "../../../../components/users/connect";

function page({ params }) {
  return (
    <div>
      <Welcome />
      <History />
      {/*<Operation />*/}
      <Procedure />
      <Connect />
      <Blogs />
    </div>
  );
}

export default page;
