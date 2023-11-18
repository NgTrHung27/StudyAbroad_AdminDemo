import Image from "next/image";
import LoginModal from "./_components/login-modal";
import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <div className="h-full w-full">
        <div className="flex items-center justify-center">
          <div className="inset-0 w-full">
            <Image
              fill
              src={"/login_bg.jpg"}
              alt="login_bg"
              className="absolute object-cover"
            />
          </div>
          <LoginModal />
        </div>
      </div>
    );
  }

  return redirect("/");
};

export default LoginPage;
