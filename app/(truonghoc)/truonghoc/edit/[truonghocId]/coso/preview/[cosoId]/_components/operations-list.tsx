"use client";

import { Operation } from "@prisma/client";
import OperationCard from "./operation-card";

interface OperationListProps {
  title: string;
  items: Operation[];
}

const OperationList: React.FC<OperationListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && (
        <div className="flex items-center justify-center h-full w-full text-neutral-500">
          Không tìm thấy kết quả
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {items.map((item) => (
          <OperationCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default OperationList;
