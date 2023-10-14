import NavBtSeo from "../../../components/navbar_seo/navbar_seo";
import FooterDemo from "../../../components/Footer/footer";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="fixed w-full h-[72px] inset-y-0 z-50 shadow-sm">
        <NavBtSeo />
      </div>
      <main className="flex-1 pt-[72px] h-full">
        {children}
        <FooterDemo />
      </main>
    </div>
  );
};
export default AuthLayout;
