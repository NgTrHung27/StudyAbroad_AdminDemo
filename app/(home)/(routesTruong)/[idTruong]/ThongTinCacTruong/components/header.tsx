import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="font-bold text-[60px] text-center mt-8">
        Thông Tin Các Trường Học
      </div>
      <Image
        alt=""
        src={"/ThongTinCacTruongHoc/bang.png"}
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto h-auto mx-auto"
      />
      <div className="text-[40px] italic font-bold mt-[50px] text-center">
        Số lượng đánh giá 5 sao
      </div>
      <div className="grid lg:grid-cols-4">
        <Image
          src={"/ThongTinCactruongHoc/ThongKeCot.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          className="lg:w-auto lg:h-auto lg:col-span-3 ml-[30px]"
        />
        <Image
          src={"/ThongTinCactruongHoc/rank.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto lg:col-span-1"
        />
      </div>
      <Image
        src={"/ThongTinCacTruongHoc/mota.png"}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        className="w-auto h-auto"
      />
      <div className="font-bold text-[35px] italic text-center">
        Biểu đồ thể hiện điểm trung bình ngành của các trường đại học
      </div>
      <div className="grid lg:grid-cols-4">
        <Image
          src={"/ThongTinCactruongHoc/bieudotron.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          className="lg:w-auto lg:h-auto lg:col-span-3 ml-[30px]"
        />
        <Image
          src={"/ThongTinCactruongHoc/rank.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto lg:col-span-1"
        />
      </div>
      <Image
        src={"/ThongTinCacTruongHoc/mota.png"}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        className="w-auto h-auto"
      />
    </>
  );
};
