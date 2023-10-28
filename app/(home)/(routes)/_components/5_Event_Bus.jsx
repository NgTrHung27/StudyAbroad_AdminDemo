"use client";

import React from "react";
import Image from "next/image";
const Event = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }
  return (
    <div>
      <div>
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="mt-12">
            <p className="bg-[#7D1F1F] rounded-r-lg p-3 pl-9 text-white text-4xl font-bold italic md:text-right text-center">
              Sự kiện &nbsp; &nbsp;
            </p>
            <div className="text-2xl p-3 w-full">
              <p className="w-auto md:ml-60  ">
                {" "}
                Sẽ luôn có những sự kiện, hoạt động ngoại khóa giúp sinh viên có
                thể kết nối được với nhau trên toàn thế giới
              </p>
            </div>
          </div>
          <div>
            <Image
              width={1800}
              height={400}
              alt="Icon"
              src="/Home_Event.png"
              className="object-cover rounded-e-2xl"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <Image
            width={1800}
            height={400}
            alt="Icon"
            src="/Home_Bus.png"
            className="object-cover rounded-e-2xl"
          />
        </div>
        <div className="mt-12">
          <p className="bg-[#7D1F1F] rounded-l-lg p-2 pl-9 text-white text-3xl font-bold italic md:text-4x1 md:text-left text-center ">
            Dịch vụ đưa đón
          </p>
          <p className="text-2xl p-3 w-auto md:mr-60 ">
            Không sợ trễ giờ học khi có dịch vụ xe đưa đón tận nhà đúng giờ và
            nó hoàn toàn miễn phí.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
