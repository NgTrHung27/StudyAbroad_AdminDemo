import Navbar from "../../components/navbar/navbar";
import FooterDemo from "../../components/Footer/footer";
import { NextUIProvider } from "@nextui-org/react";

const LienHeLayout = ({
  children: children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <NextUIProvider>
      <div className="h-full flex flex-col">
        <div className="flex-1">
          <Navbar />
          <main className="w-full pt-[72px]">{children}</main>
          <FooterDemo />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default LienHeLayout;
