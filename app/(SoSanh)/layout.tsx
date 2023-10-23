import Navbar from "../../components/navbar/navbar";
import FooterDemo from "../../components/Footer/footer";

const LienHeLayout = ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main className="w-full pt-[72px]">{children}</main>
        <FooterDemo />
      </div>
    </div>
  );
};

export default LienHeLayout;
