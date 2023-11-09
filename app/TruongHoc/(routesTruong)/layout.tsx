import { revalidateTag } from "next/cache";
import getSchools from "../../../action/get-schools";
import FooterDemo from "../../../components/Footer/footer";
import Navbar from "../../../components/navbar/navbar";

export const revalidate = 0;

const TruongHocLayout = async ({
  children: children,
}: {
  children: React.ReactNode;
}) => {

  const schools = await getSchools();
  
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Navbar schools={schools} />
        <main className="h-full w-full pt-[72px]">{children}</main>
        <FooterDemo />
      </div>
    </div>
  );
};

export default TruongHocLayout;
