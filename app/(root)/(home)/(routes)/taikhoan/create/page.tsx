import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./_components/profile-form";
import getCurrentUser from "@/actions/get-current-user";

const CreateTaiKhoanPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-medium">Tạo tài khoản mới</h3>
        <p className="text-sm text-muted-foreground">
          Vui lòng cung cấp đầy đủ thông tin cho hồ sơ tài khoản mới.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
};

export default CreateTaiKhoanPage;
