import Image from "next/image";
export default function DoiTac2() {
  return (
    <>
      <div className="relative z-[-3]">
        <Image
          alt=""
          src={"/ImgDoiTac2/logochinh.png"}
          sizes="100vw"
          width={0}
          height={0}
          className="w-full h-screen"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <p className="text-[40px] md:text-[64px] text-white font-bold text-center">
            CHÀO MỪNG ĐẾN VỚI THẾ
            <br /> GIỚI THỂ THAO ĐIỆN TỬ
          </p>
        </div>
      </div>

      <div className="relative z-[-3]">
        <div className="flex items-center justify-center w-full h-[160px] bg-[#D120B5] bg-opacity-90 text-center">
          <p className="md:leading-[80px] md:text-[60px] text-white text-[40px] leading-[50px]  font-bold ">
            GIỚI THIỆU
            <br /> NGÀNH E-SPORT
          </p>
        </div>
        <Image
          alt=""
          src={"/ImgDoiTac2/nav.png"}
          width={900}
          height={500}
          className="w-full h-[160px] absolute inset-0 z-[-1]"
        />
      </div>

      <div className="md:grid md:grid-cols-2">
        <p className="md:col-span-1 md:text-[24px] text-[16px] ml-1 my-3">
          Chương trình cấp bằng quản lý thể thao điện tử quốc tế mang đến cho
          sinh viên cơ hội biến niềm đam mê chơi trò chơi điện tử thành một nghề
          nghiệp khả thi trong ngành thể thao điện tử, ngành đã phát triển vượt
          bậc trong thập kỷ qua. Khi ngành tiếp tục phát triển và phát triển với
          tốc độ ngày càng cao, triển vọng nghề nghiệp và nhu cầu về các chuyên
          gia đầu ngành cũng ngày càng tăng. Để đáp ứng nhu cầu về các nhà lãnh
          đạo cấp cao trong ngành thể thao điện tử, chương trình quản lý thể
          thao điện tử quốc tế được thiết kế độc đáo để đào tạo và giáo dục sinh
          viên về lịch sử, sự phát triển, khái niệm, văn hóa và quản lý của các
          đội thể thao điện tử và các tổ chức liên quan. Sinh viên tốt nghiệp
          được chuẩn bị sẵn sàng để tham gia vào ngành công nghiệp đang phát
          triển nhanh chóng này và có thể chọn học lên cao hơn hoặc nắm bắt
          nhiều cơ hội nghề nghiệp sau khi hoàn thành chương trình.
        </p>
        <div className="lg:hidden">
          <br />
        </div>

        <Image
          alt=""
          src={"/ImgDoiTac2/image9.png"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto md:col-span-1 mt-3"
        />
      </div>
    </>
  );
}
