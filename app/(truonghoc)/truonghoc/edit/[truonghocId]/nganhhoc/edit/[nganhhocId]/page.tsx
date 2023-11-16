import db from "@/lib/db";
import { ArrowLeft, Eye, Image, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { ProgramActions } from "./_components/program-actions";
import { IconBadge } from "@/components/icon-badge";
import Banner from "@/components/banner";
import ProgramNameForm from "./_components/program-name-form";
import ProgramDescription1Form from "./_components/program-description-1-form";
import ProgramImage1Form from "./_components/program-image-1-form";
import ProgramImage2Form from "./_components/program-image-2-form";
import ProgramDescription2Form from "./_components/program-description-2-form";
import ProgramPriceForm from "./_components/program-price-form";

type Props = {};

const EditProgramPage = async ({
  params,
}: {
  params: { truonghocId: string; nganhhocId: string };
}) => {
  const program = await db.program.findUnique({
    where: {
      id: params.nganhhocId,
      schoolId: params.truonghocId,
    },
    include: {
      school: true,
    },
  });

  if (!program) {
    return redirect("/truonghoc");
  }

  const requiredFields = [
    program.name,
    program.description1,
    program.description2,
    program.Image1,
    program.Image2,
    program.Price,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!program.isPublished && (
        <Banner
          variant={"warning"}
          label="Ngành học này không được công khai. Ngành học này sẽ không hiển thị trong khóa học."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/truonghoc/edit/${params.truonghocId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay về tùy chỉnh trường học
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">Tùy chỉnh ngành học</h1>
                <span className="text-sm text-slate-700">
                  Hoàn thành đầy đủ các thông tin {completionText}
                </span>
              </div>
              <ProgramActions
                disabled={!isComplete}
                truonghocId={params.truonghocId}
                nganhhocId={params.nganhhocId}
                isPublished={program.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Image} />
              <h2 className="text-xl">Hình ảnh hiển thị</h2>
            </div>
            <ProgramImage1Form
              imageUrl={program.Image1}
              truonghocId={params.truonghocId}
              nganhhocId={params.nganhhocId}
            />
            <ProgramImage2Form
              imageUrl={program.Image2}
              truonghocId={params.truonghocId}
              nganhhocId={params.nganhhocId}
            />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Cập nhật thông tin</h2>
              </div>
              <ProgramNameForm
                name={program.name}
                truonghocId={params.truonghocId}
                nganhhocId={params.nganhhocId}
              />
              <ProgramDescription1Form
                description={program.description1}
                truonghocId={params.truonghocId}
                nganhhocId={params.nganhhocId}
              />
              <ProgramDescription2Form
                description={program.description2}
                truonghocId={params.truonghocId}
                nganhhocId={params.nganhhocId}
              />
              <ProgramPriceForm
                price={program.Price}
                truonghocId={params.truonghocId}
                nganhhocId={params.nganhhocId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProgramPage;
