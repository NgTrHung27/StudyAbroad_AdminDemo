import Footer1 from "../../../components/Footer/footer";
import Navbar from "../../../components/navbar/navbar";

const AuthLayout = ({ children: children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Navbar />
        <main className="h-full w-full pt-[72px]">{children}</main>
      </div>
      <div className="w-full">
        <Footer1 />
      </div>
    </div>
  );
};

export default AuthLayout;
