import getCurrentUser from "@/actions/get-current-user";
import DashBoardStatsGrid from "@/components/Home/Dashboard";
import TransactionChart from "@/components/Home/TransactionChart";

import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/dangnhap");

  return (
    <>
      <DashBoardStatsGrid />
      <TransactionChart />
    </>
  );
}
