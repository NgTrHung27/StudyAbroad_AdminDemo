import FooterDemo from "../../../components/Footer/footer";
import Navbar from "../../../components/navbar/navbar";

const AuthLayout = ({ children: children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
<<<<<<< HEAD
        <Navbar  />
        <main className="h-full w-full pt-[72px]">{children}</main>
=======
        <Navbar />
        <main className="pt-[72px]">{children}</main>
>>>>>>> 4bc514bc14b123addb3dad8247196fd56ec07431
        <FooterDemo />
      </div>
    </div>
  );
};

export default AuthLayout;
