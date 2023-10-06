import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { History } from "../../../../components/users/history";
import Navbar from "../../../../components/navbar/navbar";
import { Operation } from "../../../../components/users/operation";
import { Blogs } from "../../../../components/users/blogs";
<<<<<<< HEAD
import Procedure from "../../../../components/users/procedure";
import { Connect } from "../../../../components/users/connect";

=======
>>>>>>> 8e40d0ef2bba578cd5b7e7dc5a58ba11c1e9d888
function page({ params }) {
  return (
    <div>
      <Welcome />
      <History />
      <Operation />
      <Procedure />
      <Connect />
      <Blogs />
    </div>
  );
}

export default page;
