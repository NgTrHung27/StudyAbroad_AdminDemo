import React from "react";
import Image from "next/image";
import IconBenefit from "../_components/7_Icon_Benefit";

const Benefit = () => {
  return (
    <div className="text-[#7D1F1F]  font-bold text-center bg-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-8">
        <IconBenefit
          src="/IconSchool.png"
          description="Hơn 500 học sinh du học mỗi năm"
        />
        <IconBenefit
          src="/IconHocBong.png"
          description="Học bổng trung bình 100,000$"
        />
        <IconBenefit src="/IconNha.png" description="Nhiều chỗ ở tiện nghi" />
        <IconBenefit
          src="/IconJob.png"
          description="Gặp gỡ và giao lưu bạn bè trên thế giới"
        />
        <IconBenefit
          src="/IconSchool.png"
          description="95,7% Có việc làm sau khi tốt nghiệp"
        />
      </div>
    </div>
  );
};

export default Benefit;
