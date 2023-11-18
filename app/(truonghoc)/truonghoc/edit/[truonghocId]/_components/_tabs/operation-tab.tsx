"use client";

import { Button } from "@/components/ui/button";
import { useSchoolModal } from "@/hooks/use-school-modal";
import { SchoolFull } from "@/types";
import React from "react";

type Props = {
  school: SchoolFull;
};

const OperationTab = ({ school }: Props) => {
  const { onOpen } = useSchoolModal();
  const operations = school.operations;

  if (operations.length === 0) {
    return (
      <div className="h-24 text-center flex flex-col items-center justify-center gap-3">
        <div>Không có dữ liệu</div>
        <Button onClick={() => onOpen("createOperation", { school })}>
          Thêm cơ sở
        </Button>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      {operations.map((operation) => (
        <div key={operation.name}>{operation.name}</div>
      ))}
    </div>
  );
};

export default OperationTab;
