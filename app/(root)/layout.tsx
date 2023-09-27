import getCurrentUser from "@/actions/get-current-user";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-72 fixed inset-y-0 w-full z-50">
        <Navbar currentUser={currentUser} />
      </div>
      <div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-72 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default HomeLayout;
