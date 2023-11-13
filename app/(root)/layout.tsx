import getCurrentUser from "@/actions/get-current-user";
import NavbarMain from "@/components/navbar-main";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/dangnhap");
  }

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-72 fixed inset-y-0 w-full z-50">
        <NavbarMain currentUser={currentUser} />
      </div>
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-72 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
