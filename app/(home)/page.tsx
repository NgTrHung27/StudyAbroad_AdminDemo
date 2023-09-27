import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";
import SignOutButton from "./_components/sign-out";

export default async function Home() {
  const currentUser = await getCurrentUser();

  console.log(currentUser?.role);

  if (!currentUser) return redirect("/sign-in");

  return (
    <div>
      Hello {currentUser?.username}{" "}
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
