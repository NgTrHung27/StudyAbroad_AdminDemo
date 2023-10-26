import NavBtHome from "../../components/navbar_Home/navbar_Home";
import FooterDemo from "../../components/Footer/footer";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed w-full h-[80px] inset-y-0 z-10 shadow-sm">
        <NavBtHome />
      </div>
      <main className="flex-1 pt-[72px] h-full">
        {children}
        <FooterDemo />
      </main>
    </div>
  );
};
export default AuthLayout;