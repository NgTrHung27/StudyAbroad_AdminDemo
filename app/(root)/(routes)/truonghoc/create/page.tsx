import { Separator } from "@/components/ui/separator";
import getCurrentUser from "@/actions/get-current-user";
import { SchoolForm } from "./_components/school-form";

const CreateTaiKhoanPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-medium">Tạo trường học mới</h3>
        <p className="text-sm text-muted-foreground">
          Vui lòng cung cấp đầy đủ thông tin cho hồ sơ tài khoản mới.
        </p>
      </div>
      <Separator />
      <SchoolForm />
    </div>
  );
};

export default CreateTaiKhoanPage;
