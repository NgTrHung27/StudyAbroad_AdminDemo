import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import Banner from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TitleForm from "./_components/title-form";
import AuthorForm from "./_components/author-form";
import ImageForm from "./_components/image-form";
import { QuillForm } from "./_components/quill-form";
import { Actions } from "./_components/actions";
import Link from "next/link";

const NewsIdPage = async ({ params }: { params: { tintucId: string } }) => {
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
      <div className="flex items-center justify-end">
        <Actions tintucId={params.tintucId} disabled={false} news={news} />
      </div>
      <div className="bg-slate-100 border shadow-md p-2 mt-5">
        <Link
          href={`/tintuc`}
          className="flex items-center text-sm hover:opacity-75 transition mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay về trang Tin tức
        </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 h-auto">
          <div className="">
            <TitleForm news={news} />
            <AuthorForm news={news} />
          </div>
          <div className="">
            <ImageForm news={news} />
          </div>
        </div>
        <div className="row-span-2 col-span-2">
          <QuillForm news={news} />
        </div>
      </div>
    </>
  );
};

export default NewsIdPage;
