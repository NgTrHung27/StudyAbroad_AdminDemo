import Navbar from "../../../components/navbar/navbar";
import NavBtSeo from "../../../components/navbar_seo/navbar_seo";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed w-full inset-y-0 z-50 h-[80px]">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
