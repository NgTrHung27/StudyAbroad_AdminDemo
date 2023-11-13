import getCurrentUser from "@/actions/get-current-user";
import TransactionChart from "@/components/charts";
import DashBoardStatsGrid from "@/components/dashboard";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/dangnhap");

  return (
    <>
      <DashBoardStatsGrid />
      <TransactionChart />;
    </>
  );
}
