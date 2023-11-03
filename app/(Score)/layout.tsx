import Navbar from "../../components/navbar/navbar";
import FooterDemo from "../../components/Footer/footer";
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
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Navbar schools={schools} />
        <main className="w-full pt-[72px]">{children}</main>
        <FooterDemo />
      </div>
    </div>
  );
};

export default LienHeLayout;
