import Navbar from "../../../components/navbar/navbar";

const AuthLayout = ({ children: children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed w-full inset-y-0 z-50 h-[80px]">
        <Navbar  />
      </div>
       <div >{children}</div>
    </div>
  );
};

export default AuthLayout;
