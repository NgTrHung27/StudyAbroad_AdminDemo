import db from "@/lib/db";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { LayoutDashboard } from "lucide-react";
import AvatarForm from "./_components/avatar-form";
import { Separator } from "@/components/ui/separator";
import NameForm from "./_components/username-form";
import Des1Form from "./_components/des1-form";
import Des2Form from "./_components/des2-form";

const NganhHocIdPage = async ({
    params,
}: {
    params: { nganhhocId: string };
}) => {
    const program = await db.program.findUnique({
        where: {
            id: params.nganhhocId,
        },
    });

    if (!program) {
        return redirect("/nganhhoc");
    }

    const requiredFields = [program.name, program.Image1, program.Image1, program.Image2, program.Price];
    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    const completionText = `(${completedFields}/${totalFields})`;

    return (
        <>

            <div className="p-6">

                <div className="bg-slate-100 border shadow-md p-4 mt-8">
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard} />
                        <div className="flex flex-col gap-y-2">
                            <h1 className="text-2xl font-medium">Hồ sơ thông tin</h1>
                            <span className="text-sm text-slate-700">
                                Hoàn thành đầy đủ các thông tin {completionText}
                            </span>
                        </div>
                    </div>
                    <Separator className="my-2" />
                    <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 gap-x-6  ">
                        <div className="row-span-2">
                            <AvatarForm program={program} />
                        </div>
                        <div className="row-span-2 col-span-2">
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-6">
                                <div>
                                    <NameForm program={program} />
                                </div>

                                <div>
                                    <Des1Form program={program} />
                                </div>

                                <div>
                                    <Des2Form program={program} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NganhHocIdPage;
