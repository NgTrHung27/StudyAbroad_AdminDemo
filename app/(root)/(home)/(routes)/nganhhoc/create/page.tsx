import { Separator } from "@/components/ui/separator";
import getCurrentUser from "@/actions/get-current-user";
import { NganhHocForm } from "./_components/nganhhoc-form";


const CreateTaiKhoanPage = async () => {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    return (
        <div className="space-y-6 p-6">
            <div>
                <h3 className="text-lg font-medium">Tạo ngành học mới</h3>
            </div>
            <Separator />
            <NganhHocForm />
        </div>
    );
};

export default CreateTaiKhoanPage;
