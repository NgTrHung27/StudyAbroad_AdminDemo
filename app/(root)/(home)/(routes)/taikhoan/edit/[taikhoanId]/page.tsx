import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { Actions } from "./_components/actions";
import Banner from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import AvatarForm from "./_components/avatar-form";
import { Separator } from "@/components/ui/separator";
import NameForm from "./_components/username-form";
import EmailForm from "./_components/email-form";
import RoleForm from "./_components/role-form";

const TaiKhoanIdPage = async ({
  params,
}: {
  params: { taikhoanId: string };
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/taikhoan");
  }

  if (params.taikhoanId.length !== 24) {
    return redirect("/taikhoan");
  }

  const user = await db.user.findUnique({
    where: {
      id: params.taikhoanId,
    },
  });

  if (!user) {
    return redirect("/taikhoan");
  }

  const requiredFields = [user.name, user.email, user.avatar, user.role];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!user.isPublished && (
        <Banner
          variant={"warning"}
          label="Hồ sơ này chưa được duyệt. Tài khoản sở hữu chỉ có thể xem được các thông tin hiển thị nhưng không tham gia được các dịch vụ khác."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-end">
          <Actions
            disabled={!isComplete}
            taikhoanId={params.taikhoanId}
            isPublished={user.isPublished}
          />
        </div>
        <div className="bg-slate-100 dark:bg-background border shadow-md p-4 mt-8">
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl font-medium">Hồ sơ thông tin</h1>
              <span className="text-sm text-slate-700 dark:text-primary">
                Hoàn thành đầy đủ các thông tin {completionText}
              </span>
            </div>
          </div>
          <Separator className="my-2" />
          <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 gap-x-6  ">
            <div className="row-span-2">
              <AvatarForm user={user} />
            </div>
            <div className="row-span-2 col-span-2">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-6">
                <div>
                  <NameForm user={user} />
                </div>
                <div>
                  <EmailForm user={user} />
                </div>
                <div>
                  <RoleForm user={user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaiKhoanIdPage;
