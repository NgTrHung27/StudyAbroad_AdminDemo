import React from "react";

type Props = {
  children: React.ReactNode;
};

const ConfirmEmailPage = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default ConfirmEmailPage;
