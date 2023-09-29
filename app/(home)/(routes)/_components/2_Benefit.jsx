import React from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <div className="flex flex-col text-[#7D1F1F]  font-bold text-center bg-gray-100">
      <div className=" justify-center flex space-x-60 mt-6">
        <div>
          <Image
            width={100}
            height={100}
            alt="Icon"
            src="/IconSchool.png"
            className="object-cover"
          />
          <p className="break-all	">
            Hơn 500 học sinh <br></br> du học mỗi năm
          </p>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            alt="Icon"
            src="/IconHocBong.png"
            className="object-cover"
          />
          <p className="">
            Học bổng trung <br></br> bình 100,000$
          </p>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            alt="Icon"
            src="/IconNha.png"
            className="object-cover"
          />
          <p className="">
            Nhiều chỗ ở <br></br> tiện nghi
          </p>
        </div>
      </div>

      <div className="justify-center flex space-x-60 mb-6">
        <div>
          <Image
            width={100}
            height={100}
            alt="Icon"
            src="/IconGiaoLuu.png"
            className="object-cover"
          />
          <p className="">
            Gặp gỡ và giao lưu <br></br> bạn bè trên thế giới
          </p>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            alt="Icon"
            src="/IconJob.png"
            className="object-cover"
          />
          <p className="">
            95,7% Có việc làm <br></br> sau khi tốt nghiệp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
