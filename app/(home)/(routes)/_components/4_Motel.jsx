import React from "react";
import Image from "next/image";

const Motel = () => {
  return (
    <div className="mt-16 ">
      <div className="flex gap-10">
        <div>
          <Image
            width={1800}
            height={400}
            alt="Icon"
            src="/UFV_1.jpg"
            className="object-cover rounded-e-2xl"
          />
        </div>
        <div className="w-full h-full mt-20">
          <p className="bg-[#7D1F1F] rounded-l-lg p-3 pl-9 text-white text-4xl font-bold italic  ">
            Nhà trọ tiện nghi
          </p>
          <p className="text-2xl p-3">
            Sinh viên không cần phải lo lắng về nơi <br></br>ở khi học tập, luôn
            có những khu <br></br>
            nhà trọ hiện đại, tiện nghi ở gần trường.
          </p>
        </div>
      </div>

      <div className="mt-20 w-full h-full mx-auto flex flex-col justify-center items-center">
        <p className="text-4xl font-bold flex text-center">
          Nhà trọ cho sinh viên tại &nbsp;
          <span className="text-[#7D1F1F]">Canada</span>
        </p>
        <div className="flex gap-8 mt-8">
          <div className="bg-transparent w-40 rounded-full ring-4 ring-[#7D1F1F] text-[#7D1F1F] text-2xl text-center font-semibold p-3">
            Vancouver
          </div>
          <div className="bg-transparent w-40 rounded-full ring-4 ring-[#7D1F1F] text-[#7D1F1F] text-2xl text-center font-semibold p-3">
            Toronto
          </div>
          <div className="bg-transparent w-40 rounded-full ring-4 ring-[#7D1F1F] text-[#7D1F1F] text-2xl text-center font-semibold p-3">
            Montreal
          </div>
          <div className="bg-transparent w-40 rounded-full ring-4 ring-[#7D1F1F] text-[#7D1F1F] text-2xl text-center font-semibold p-3">
            Banff
          </div>
        </div>
      </div>

      <div className="m-20 flex gap-28 justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-[200px]"
            width={200}
            height={200}
            src="/Motel_Campie.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Nhà trọ Campie</div>
            <p className="text-gray-700 text-base">Cách trung tâm 0,33km</p>
            <p className="text-gray-700 text-base font-bold">
              Giá từ 600$/1 Tháng
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Campie
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Canada
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-[200px]"
            width={200}
            height={200}
            src="/Motel_Downtown.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Nhà trọ Vancouer D.Town
            </div>
            <p className="text-gray-700 text-base">Cách trung tâm 1,17km</p>
            <p className="text-gray-700 text-base font-bold">
              Giá từ 500$/1 Tháng
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Banff
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Canada
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
          <Image
            className="w-full h-[200px]"
            width={200}
            height={200}
            src="/Motel_Jerico.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Nhà trọ Vancouver Jerico
            </div>
            <p className="text-gray-700 text-base">Cách trung tâm 6,33km</p>
            <p className="text-gray-700 text-base font-bold">
              Giá từ 450$/1 Tháng
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Toronto
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Canada
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motel;
