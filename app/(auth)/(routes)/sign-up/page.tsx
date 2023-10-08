"use client";

import Image from "next/image";
import RegisterModal from "../../../../components/register/register-modal";

const SignUpPage = () => {
  return (
    <main className="grid h-full w-full grid-cols-1 md:grid-cols-2">
      <RegisterModal />
      <div className="relative">
        <Image
          fill
          alt="Background"
          src={"/register/REGISTER_CANADA.png"}
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default SignUpPage;
