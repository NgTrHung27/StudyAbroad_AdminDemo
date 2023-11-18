import NavBtHome from "../../../components/navbar_Home/navbar_Home";
import FooterDemo from "../../../components/Footer/footer";
import React from "react";
import getSchools from "../../../action/get-schools";
import getCurrentUser from "../../../action/get-current-user";
import { redirect } from "next/navigation";
import Banner from "../../../components/banner";

export const revalidate = 0;

const TrangChuLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  console.log(currentUser);

  const schools = await getSchools();

  const isEmailVerified = !!currentUser?.emailVerified;

  console.log(schools);
  return (
    <div className="h-full">
      <div className="fixed w-full h-[80px] inset-y-0 z-10 shadow-sm">
        <NavBtHome schools={schools} currentUser={currentUser} />
      </div>
      <main className="flex-1 pt-[72px] h-full">
        {!isEmailVerified && currentUser !== null && (
          <Banner
            variant={"warning"}
            label="Bạn chưa xác thực email và sẽ không thể sử dụng các dịch vụ liên quan đến quản lý hồ sơ và trường học."
            type="confirmEmail"
            actionString="Vui lòng xác thực ngay tại đây."
          />
        )}
        {children}
        <FooterDemo />
      </main>
    </div>
  );
};
export default TrangChuLayout;
