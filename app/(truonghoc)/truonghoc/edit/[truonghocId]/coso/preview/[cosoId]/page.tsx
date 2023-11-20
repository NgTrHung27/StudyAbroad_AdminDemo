import db from "@/lib/db";
import React from "react";
import Container from "./_components/container";
import { redirect } from "next/navigation";
import OperationInfo from "./_components/operation-info";
import OperationList from "./_components/operations-list";
import GalleryTab from "./_components/gallery-tab";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {};

const CoSoIdPage = async ({
  params,
}: {
  params: { truonghocId: string; cosoId: string };
}) => {
  const operation = await db.operation.findUnique({
    where: {
      id: params.cosoId,
      schoolId: params.truonghocId,
    },
  });

  const othersOperation = await db.operation.findMany({
    where: {
      schoolId: params.truonghocId,
      NOT: {
        id: params.cosoId,
      },
    },
  });

  if (!operation) {
    return redirect("truonghoc");
  }

  return (
    <div className="bg-white dark:bg-background">
      <Container>
        <div className="px-6">
          <Link
            href={`/truonghoc/edit/${params.truonghocId}`}
            className="flex items-center text-sm hover:opacity-75 transition mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <Button variant={"link"}>Quay về tùy chỉnh trường học</Button>
          </Link>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 border shadow-sm p-4">
            {/* Gallery */}
            <GalleryTab background={operation.backgroundUrl} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <OperationInfo data={operation} />
            </div>
          </div>
          <hr className="my-10" />
          <OperationList title="Cơ sở khác" items={othersOperation} />
        </div>
      </Container>
    </div>
  );
};

export default CoSoIdPage;
