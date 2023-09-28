import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { History } from "../../../../components/users/history";
import Navbar from "../../../../components/navbar/navbar";
function page({ params }) {
  return (
    <div className="h-full">
      <Welcome />
      <History />
    </div>
  );
}

export default page;
