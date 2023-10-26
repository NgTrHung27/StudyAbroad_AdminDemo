import Image from "next/image";
import React from "react";
import { Blogs } from "../../../../../../components/users/blogs";


export const Body3 = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#D120B5] md:grid md:grid-cols-3">
        <p className="text-[30px] text-white font-bold text-center col-span-1">
          Cơ hội nghề
          <br />
          nghiệp của ngành
          <br />
          E-sport
        </p>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          alt=""
          src={"/ImgDoiTac2/nhohon.png"}
          className="md:w-[200px] md:h-auto md:col-span-1 md:ml-[100px]"
        />
        <div className="md:col-span-1">
          <div className="md:flex md:flex-row md:mt-7 md:gap-10">
            <Image
              width={0}
              height={0}
              src={"/ImgDoiTac2/logotruongdo.png"}
              alt=""
              sizes="100vw"
              className=" md:w-auto md:h-auto "
            />

            <Image
              width={0}
              height={0}
              src={"/ImgDoiTac2/taycam.png"}
              alt=""
              sizes="100vw"
              className=" md:w-auto h-auto"
            />

            <Image
              width={0}
              height={0}
              src={"/ImgDoiTac2/logotruongla.png"}
              alt=""
              sizes="100vw"
              className="md:w-[80px] h-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:grid md:grid-cols-4">
        <div className="col-span-3 mt-3">
          <div className="relative mr-2 pt-[5px] ">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Chơi game chuyên nghiệp:</b> Trở thành một vận động viên chuyên
              nghiệp, thi đấu trong các giải đấu và giành chiến thắng.
            </p>
          </div>
          <div className="relative mr-2 my-8">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Quản lý đội tuyển Esports:</b> Điều hành và huấn luyện đội
              tuyển Esports, quản lý các hoạt động của đội và đảm bảo sự phát
              triển và thành công của các thành viên.
            </p>
          </div>
          <div className="relative mr-2 my-8">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Truyền thông và sản xuất truyền hình:</b> Bao gồm việc sản xuất
              và phát sóng trực tiếp các trận đấu và sự kiện Esports, quay phim,
              chỉnh sửa video và quảng cáo.
            </p>
          </div>
          <div className="relative mr-2 my-8">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Quản lý sự kiện Esports:</b> Tổ chức, quản lý và điều phối các
              sự kiện Esports như giải đấu, hội thảo, triển lãm và buổi gặp gỡ
              cộng đồng.
            </p>
          </div>
          <div className="relative mr-2 my-8">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Tiếp thị và quảng cáo Esports:</b> Xây dựng chiến lược tiếp thị
              và quảng cáo, quản lý thương hiệu và tạo dựng mối quan hệ với
              khách hàng trong ngành Esports.
            </p>
          </div>
          <div className="relative mr-2 my-8">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Phân tích và số liệu Esports:</b> Phân tích dữ liệu và số liệu
              thống kê trong các trận đấu Esports, đánh giá hiệu suất và phân
              tích chiến thuật.
            </p>
          </div>
          <div className="relative mr-2 my-8">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b> Giám đốc dự án Esports:</b> Quản lý và điều hành các dự án
              liên quan đến Esports, bao gồm quản lý ngân sách, thời gian và
              nhân sự.
            </p>
          </div>
          <div className="relative mr-2 ">
            <div className="absolute mt-1 md:mt-3  rounded-full w-[12px] h-[12px] bg-black ml-2"></div>
            <p className="text-black md:text-[24px] ml-[25px] text-[16px]">
              <b>Giáo dục và huấn luyện Esports:</b> Trở thành huấn luyện viên,
              giáo viên hoặc nhà phát triển chương trình đào tạo Esports để đào
              tạo và hướng dẫn người chơi trẻ.
            </p>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="md:flex md:flex-col md:mt-[20px]">
            <Image
              width={0}
              height={0}
              src={"/ImgDoiTac2/image 10.png"}
              sizes="100vw"
              alt=""
              className="w-full h-auto rounded-sm"
            />
            <Image
              width={0}
              height={0}
              src={"/ImgDoiTac2/vodichthegio.png"}
              sizes="100vw"
              alt=""
              className="w-full h-auto mt-1 rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] bg-[#D120B5]"></div>
      <Blogs />
    </>
  );
};
