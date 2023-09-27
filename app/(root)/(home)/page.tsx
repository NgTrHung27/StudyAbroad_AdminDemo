import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  console.log(currentUser?.role);

  if (!currentUser) return redirect("/sign-in");

  return <div>Hello Trang chủ</div>;
}
