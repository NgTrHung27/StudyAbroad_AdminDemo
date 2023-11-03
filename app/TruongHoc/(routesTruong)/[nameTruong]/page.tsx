import React from "react";
import { Welcome } from "../../../../components/users/welcome";
import { History } from "../../../../components/users/history";
import { OperationTop } from "../../../../components/users/operation";
import { OperationBody } from "../../../../components/users/operationbody";
import Procedure from "../../../../components/users/procedure";
import { Connect } from "../../../../components/users/connect";
import { Blogs } from "../../../../components/users/blogs";
import prismadb from "../../../../lib/prismadb";
import { redirect } from "next/navigation";

const TruongHocNamePage = async ({
  params,
}: {
  params: { nameTruong: string };
}) => {
  const school = await prismadb.school.findUnique({
    where: {
      name: params.nameTruong,
    },
  });

  if (!school) {
    return redirect("/");
  }
  return (
    <div>
      <Welcome school={school} />
      <History school={school} />
      <OperationTop />
      <OperationBody />
      <Procedure />
      <Connect />
      <Blogs />
    </div>
  );
};

export default TruongHocNamePage;
