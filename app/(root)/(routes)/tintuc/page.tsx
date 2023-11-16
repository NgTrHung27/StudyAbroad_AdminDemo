import { DataTable } from "./_components/data-table";
import { redirect } from "next/navigation";
import db from "@/lib/db";
import getCurrentUser from "@/actions/get-current-user";
import { columns } from "./_components/columns";

const TinTucpage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/sign-in");
    }

    const news = await db.news.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return (
        <div className="p-6">
            <DataTable columns={columns} data={news} />
        </div>
    );
};

export default TinTucpage;
