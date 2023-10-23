import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="text-[60px] font-bold text-center my-[40px]">
        Thông tin so sánh các trường
      </div>
      <Image
        alt=""
        src={"/ThongTinCacTruongHoc/bang.png"}
        width={0}
        height={0}
        sizes="100vw"
        className="w-5/6 h-auto mx-auto"
      />
      <div className="text-[50px] italic font-bold my-[50px] text-center">
        Số lượng đánh giá 5 sao
      </div>
      <div className="flex flex-row">
        <Image
          src={"/ThongTinCactruongHoc/thongke.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          className="w-[70%] lg:h-auto lg:col-span-3 ml-[30px]"
        />
        <Image
          src={"/ThongTinCactruongHoc/rank.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-[30%] h-auto"
        />
      </div>
      <Image
        src={"/ThongTinCacTruongHoc/mota.png"}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        className="w-[40%] h-auto my-5"
      />
      <div className="font-bold text-[35px] italic text-center">
        Biểu đồ thể hiện điểm trung bình ngành của các trường đại học
      </div>
      <div className="flex flex-row">
        <Image
          src={"/ThongTinCactruongHoc/bieudotron.png"}
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          className="w-[70%] h-auto"
        />
        <Image
          src={"/ThongTinCactruongHoc/rank.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-[30%] h-auto"
        />
      </div>
      <Image
        src={"/ThongTinCacTruongHoc/mota.png"}
        width={0}
        height={0}
        alt=""
        sizes="100vw"
        className="w-[40%] h-auto my-5"
      />
    </>
  );
};
