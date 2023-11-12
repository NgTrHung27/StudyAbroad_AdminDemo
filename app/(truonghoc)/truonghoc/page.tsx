import getCurrentUser from "@/actions/get-current-user";
import SetupSchool from "@/components/setup-school";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const TruongHocPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/dangnhap");
  }

  const school = await db.school.findFirst({});

  if (!school) {
    return <SetupSchool />;
  }

  return redirect(`/truonghoc/edit/${school.id}`);
};

export default TruongHocPage;
