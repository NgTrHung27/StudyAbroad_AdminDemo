import React from "react";
import getOtpUser from "../../../action/get-otp-user";
import ResetPasswordForm from "./_components/reset-password-form";
import ResendPassword from "./_components/resend-password";

type Props = {
  params: {
    linkString: string;
  };
};

export const revalidate = 0;

const ForgotPasswordPage = async ({ params }: Props) => {
  const otpString = params.linkString.substring(0, 6);
  const userId = params.linkString.substring(6);

  try {
    const otp = await getOtpUser(otpString, userId);

    if (otp) {
      return <ResetPasswordForm userId={userId} />;
    }
  } catch (error) {
    if (error instanceof Error) {
      return (
        <div className="w-full h-full items-center justify-center flex">
          <ResendPassword />
        </div>
      );
    }
  }
};

export default ForgotPasswordPage;
