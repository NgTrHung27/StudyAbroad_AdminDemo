import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import Banner from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TitleForm from "./_components/title-form";
import AuthorForm from "./_components/author-form";
import ImageForm from "./_components/image-form";

const NewsIdPage = async ({
   params }: { params: { tintucId: string } }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/tintuc");
  }

  if (params.tintucId.length !== 24) {
    return redirect("/tintuc");
  }
  const news = await db.news.findUnique({
    where: {
      id: params.tintucId,
    },
  });

  if (!news) {
    return redirect("/tintuc");
  }
  return (
    <>
      <div className="bg-slate-100 border shadow-md p-4 mt-8">
        <div className="flex items-center gap-x-2">
          <IconBadge icon={LayoutDashboard} />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Chi tiết</h1>
            <span className="text-sm text-slate-700">
              Vui lòng sửa lại dữ liệu Bài viết nếu có lỗi
            </span>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 gap-x-6  ">
          <div className="row-span-2">
            <TitleForm news={news} />
          </div>
          <div className="row-span-2 col-span-2">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-6">
              <div>
                <AuthorForm news={news} />{" "}
              </div>
              <div>
                <ImageForm news={news} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsIdPage;
