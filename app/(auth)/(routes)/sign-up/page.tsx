import Image from "next/image";
import Link from "next/link";
import RegisterModal from "../../../../components/register/register-modal";

const SignUpPage = () => {
  return (
    <div className="h-full">
      <div className="flex flex-row">
        <RegisterModal />
      </div>
    </div>
  );
};

export default SignUpPage;
