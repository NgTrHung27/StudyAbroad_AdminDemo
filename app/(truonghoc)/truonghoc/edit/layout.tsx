import getCurrentUser from "@/actions/get-current-user";
import NavbarTruong from "@/components/school/navbar-truong";
import SidebarTruong from "@/components/school/sidebar-truong";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const EditSchoolLayout = async ({ children }: Props) => {
  const currentUser = await getCurrentUser();
  const schools = await db.school.findMany();

  if (!schools) {
    return redirect("/truonghoc");
  }
  return (
    <>
      <div className="h-[80px] md:pl-72 fixed inset-y-0 w-full z-50">
        <NavbarTruong schools={schools} currentUser={currentUser} />
      </div>
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
        <SidebarTruong />
      </div>
      <main className="md:pl-72 pt-[80px] h-full">{children}</main>
    </>
  );
};

export default EditSchoolLayout;
