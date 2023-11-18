import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const CoSoPage = async ({ params }: { params: { truonghocId: string } }) => {
  const operation = await db.operation.findFirst({
    where: {
      schoolId: params.truonghocId,
    },
  });

  if (!operation) {
    return redirect("/truonghoc");
  }

  return redirect(
    `/truonghoc/edit/${params.truonghocId}/coso/preview/${operation.id}`
  );
};

export default CoSoPage;
