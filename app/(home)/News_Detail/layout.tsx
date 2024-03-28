import NavBtHome from "../../../components/navbar_Home/navbar_Home";
import FooterDemo from "../../../components/Footer/footer";
import React, { Suspense } from "react";
import getSchools from "../../../action/get-schools";
import Loading from "./loading";
export const revalidate = 0;

const RouteLayout = async ({ children }: { children: React.ReactNode }) => {
  const schools = await getSchools();

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-full">
        <div className="fixed w-full h-[80px] inset-y-0 z-10 shadow-sm">
          <NavBtHome schools={schools} />
        </div>
        <main className="flex flex-col flex-1 pt-[72px] h-fit">
          {children}
          <FooterDemo />
        </main>
      </div>
    </Suspense>
  );
};
export default RouteLayout;
