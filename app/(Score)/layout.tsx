import NavbarTruong from "../../components/navbar/navbar";
import FooterDemo from "../../components/Footer/footer";
import getSchools from "../../action/get-schools";

const ScoreLayout = async ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  const schools = await getSchools();
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <NavbarTruong />
        <main className="w-full pt-[72px]">{children}</main>
        <FooterDemo />
      </div>
    </div>
  );
};

export default ScoreLayout;
