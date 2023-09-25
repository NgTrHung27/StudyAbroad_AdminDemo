import NavBtSeo from "../../../components/navbar_seo/navbar_seo";
import FooterDemo from "../../../components/Footer/footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="">
        <NavBtSeo />
      </div>

      <main className="flex-1 pt-[80px]">{children}</main>
      <FooterDemo />
    </div>
  );
};

export default AuthLayout;
