import Image from "next/image";
import RegisterModal from "../../../../components/register/register-modal";
import getSchools from "../../../../action/get-schools";

export const revalidate = 0;

const SignUpPage = async () => {
  const schools = await getSchools();
  return (
    <main className="grid h-full w-full grid-cols-1 md:grid-cols-2">
      <RegisterModal schools={schools} />
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
