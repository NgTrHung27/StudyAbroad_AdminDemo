import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const NganhHocPage = async ({
  params,
}: {
  params: { truonghocId: string };
}) => {
  const program = await db.program.findFirst({
    where: {
      schoolId: params.truonghocId,
    },
  });

  if (!program) {
    return redirect("/truonghoc");
  }

  return redirect(
    `/truonghoc/edit/${params.truonghocId}/nganhhoc/preview/${program.id}`
  );
};

export default NganhHocPage;
