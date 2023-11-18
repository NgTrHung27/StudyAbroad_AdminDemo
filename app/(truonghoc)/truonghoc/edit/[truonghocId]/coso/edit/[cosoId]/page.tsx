import db from "@/lib/db";
import { ArrowLeft, Eye, Image, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { OperationActions } from "./_components/operation-actions";
import { IconBadge } from "@/components/icon-badge";
import Banner from "@/components/banner";
import OperationNameForm from "./_components/operation-name-form";
import OperationDescriptionForm from "./_components/operation-description-form";
import OperationAddressForm from "./_components/operation-address-form";
import OperationBackgroundForm from "./_components/operation-background-form";

type Props = {};

const EditOperationPage = async ({
  params,
}: {
  params: { truonghocId: string; cosoId: string };
}) => {
  const operation = await db.operation.findUnique({
    where: {
      id: params.cosoId,
      schoolId: params.truonghocId,
    },
    include: {
      school: true,
    },
  });

  if (!operation) {
    return redirect("/truonghoc");
  }

  const requiredFields = [
    operation.name,
    operation.description,
    operation.address,
    operation.backgroundUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!operation.isPublished && (
        <Banner
          variant={"warning"}
          label="Cơ sở này không được công khai. Cơ sở này sẽ không hiển thị trong khóa học."
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
                <h1 className="text-2xl font-medium">Tùy chỉnh cơ sở</h1>
                <span className="text-sm text-slate-700">
                  Hoàn thành đầy đủ các thông tin {completionText}
                </span>
              </div>
              <OperationActions
                disabled={!isComplete}
                truonghocId={params.truonghocId}
                cosoId={params.cosoId}
                isPublished={operation.isPublished}
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
            <OperationBackgroundForm
              imageUrl={operation.backgroundUrl}
              truonghocId={params.truonghocId}
              cosoId={params.cosoId}
            />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Cập nhật thông tin</h2>
              </div>
              <OperationNameForm
                name={operation.name}
                truonghocId={params.truonghocId}
                cosoId={params.cosoId}
              />
              <OperationDescriptionForm
                description={operation.description!}
                truonghocId={params.truonghocId}
                cosoId={params.cosoId}
              />
              <OperationAddressForm
                address={operation.address}
                truonghocId={params.truonghocId}
                cosoId={params.cosoId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditOperationPage;
