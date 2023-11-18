import React from "react";
import getCurrentUser from "../../action/get-current-user";
import { redirect } from "next/navigation";
import ConfirmEmail from "./_components/confirm-email";

type Props = {};

const ConfirmEmailPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/dangnhap");
  }

  return <ConfirmEmail currentUser={currentUser} />;
};

export default ConfirmEmailPage;
