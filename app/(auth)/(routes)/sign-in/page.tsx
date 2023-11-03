import Image from "next/image";
import Link from "next/link";
import LoginModal from "../../../../components/login/login-modal";

const SignInPage = () => {
  return (
    <main className="grid h-full w-full grid-cols-1 md:grid-cols-2">
      <LoginModal />
      <div className="hidden md:block md:relative">
        <Image
          fill
          alt="Background"
          src={"/login/LOGIN_CANADA.png"}
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default SignInPage;
