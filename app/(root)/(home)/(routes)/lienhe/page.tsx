import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import getCurrentUser from "@/actions/get-current-user";

const LienHePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/dangnhap");
  }

  const contacts = await db.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-6">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
};

export default LienHePage;
