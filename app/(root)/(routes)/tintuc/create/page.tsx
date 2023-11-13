import { Separator } from "@/components/ui/separator";
import getCurrentUser from "@/actions/get-current-user";
import { TinTucForm } from "./_components/tintuc-form";


const CreateTinTucPage = async () => {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    return (
        <div className="space-y-6 p-6">
            <div>
                <h3 className="text-lg font-medium">Tạo tin tức mới</h3>
            </div>
            <Separator />
            <TinTucForm />
        </div>
    );
};

export default CreateTinTucPage;
