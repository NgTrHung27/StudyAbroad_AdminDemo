import getCurrentUser from "@/actions/get-current-user";
import DashBoardStatsGrid from "@/components/Home/Dashboard";
import TransactionChart from "@/components/Home/TransactionChart";
import db from "@/lib/db";
import { UserRole } from "@prisma/client";

import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/dangnhap");

  const users = await db.user.findMany({
    where: {
      role: UserRole.USER,
    },
  });

  return (
    <>
      <DashBoardStatsGrid users={users} />
      <TransactionChart />
    </>
  );
}
