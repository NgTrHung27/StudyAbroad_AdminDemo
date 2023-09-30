import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { History } from "../../../../components/users/history";
import Navbar from "../../../../components/navbar/navbar";
import { Operation } from "../../../../components/users/operation";
import { Blogs } from "../../../../components/users/blogs";
function page({ params }) {
  return (
    <div className="">
      <Welcome />
      <History />
      <Operation />
      <Blogs />
    </div>
  );
}

export default page;
