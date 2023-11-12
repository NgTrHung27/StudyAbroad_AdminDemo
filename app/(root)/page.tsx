import getCurrentUser from "@/actions/get-current-user";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/dangnhap");

  return <div>Hello Trang chủ</div>;
}
