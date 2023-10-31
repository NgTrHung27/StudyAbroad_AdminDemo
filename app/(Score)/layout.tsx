
import Navbar from "../../components/navbar/navbar";
import FooterDemo from "../../components/Footer/footer";
import { NextUIProvider } from "@nextui-org/react";
import prismadb from "../../lib/prismadb";

const LienHeLayout = async ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  const schools = await prismadb.school.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <NextUIProvider>
      <div className="h-full flex flex-col">
        <div className="flex-1">
          <Navbar schools={schools} />
          <main className="w-full pt-[72px]">{children}</main>
          <FooterDemo />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default LienHeLayout;
