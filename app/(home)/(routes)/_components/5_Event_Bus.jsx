import React from "react";
import Image from "next/image";
const Event = () => {
  return (
    <div>
      <div>
        <div className="flex gap-10">
          <div className="w-full h-full mt-20">
            <p className="bg-[#7D1F1F] rounded-r-lg p-3 pl-9 text-white text-4xl font-bold italic text-right">
              Sự kiện &nbsp; &nbsp;
            </p>
            <p className="text-2xl p-3 text-right">
              Sẽ luôn có những sự kiện, hoạt động <br></br>ngoại khóa giúp sinh
              viên có thể kết <br></br>
              nối được với nhau trên toàn thế giới.
            </p>
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

      <div className="flex gap-10 mt-16">
        <div>
          <Image
            width={1800}
            height={400}
            alt="Icon"
            src="/Home_Bus.png"
            className="object-cover rounded-e-2xl"
          />
        </div>
        <div className="w-full h-full mt-20">
          <p className="bg-[#7D1F1F] rounded-l-lg p-3 pl-9 text-white text-4xl font-bold italic  ">
            Dịch vụ đưa đón
          </p>
          <p className="text-2xl p-3">
            Không sợ trễ giờ học khi có dịch vụ xe <br></br>ưa đón tận nhà đúng
            giờ và nó hoàn<br></br>
            toàn miễn phí.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
