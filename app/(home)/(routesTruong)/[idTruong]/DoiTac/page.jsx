import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-48">
        <Image
          width={200}
          height={200}
          alt="Icon"
          src="/Doitac/DoiTac_Logo.png"
          className="object-cover "
        />
      </div>
      <div className="w-full h-28 bg-[#FED43A]">
        <p className="text-center text-2xl font-bold p-10">
          ĐỐI TÁC HỖ TRỢ VIỆC LÀM BEEZNESTS
        </p>
      </div>
      <div className="w-full">
        <Image
          width={1800}
          height={300}
          alt="Icon"
          src="/Doitac/DoiTac_1.png"
          className="object-cover"
        />
      </div>

      <div className="container font-medium text-center mt-8 md:text-2xl">
        Tất cả các sinh viên đăng kí và học bằng đôi (dual diplomas) tại
        Cornerstone <br></br> được nhận gói dịch vụ từ beeznests (công ty nhân
        sự kết nối sinh viên với các công ty tại Vancouver)
      </div>

      <div className="gap-10 mt-12 font-semibold container grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            width={600}
            height={200}
            alt="Icon"
            src="/Doitac/DoiTac_2.png"
            className="object-cover "
          />
        </div>
        <div className="mt-10 md:text-2xl">
          <p className="p-3">
            Beeznests connection ltd., Là một nền tảng công việc tự do của sinh
            viên tuyệt vời để kết nối sinh viên với doanh nghiệp và cá nhân trên
            toàn thế giới.
          </p>
          <p className="p-3">
            Beeznests tạo ra cơ hội làm việc từ xa và ngắn hạn cho sinh viên,
            giúp chuẩn bị cho sinh viên những thực tập và công việc toàn thời
            gian trong tương lai.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto mt-10">
        <p className="text-center md:text-2xl font-bold p-10 ">
          Nhiều cơ hội kêt nối với các công ty cung cấp độc quyền chỉ <br></br>
          dành cho sinh viên được tuyển tại Vancourse{" "}
        </p>
        <p className="p-3 container font-semibold">
          Buổi hội thảo thông tin: tổ chức các buổi hội thảo để cung cấp thông
          tin cho sinh viên về canada và thị trường việc làm tại đây, cung cấp
          thông tin tổng quan về đất nước, các nguồn lực tích hợp và thảo luận
          về các tài liệu liên quan đến công việc.
        </p>
        <p className="p-3 container font-semibold">
          Học tập dựa trên dự án - 2 dự án cho mỗi sinh viên: cung cấp cơ hội
          cho sinh viên làm việc trên các dự án tùy chỉnh, trong đó có một dự án
          được dẫn dắt bởi một nhà lãnh đạo ngành công nghiệp. Các dự án sẽ kéo
          dài ít nhất một tháng.
        </p>
        <p className="p-3 container font-semibold">
          Cơ hội việc làm độc quyền: cung cấp thông tin về các cơ hội việc làm
          độc quyền cho sinh viên.
        </p>
        <p className="p-3 container font-semibold">
          Tư vấn hàng tháng: cung cấp tư vấn hàng tháng cho sinh viên, trong đó
          trả lời câu hỏi và đề xuất liên quan đến sự phát triển sự nghiệp.
        </p>
        <p className="p-3 container font-bold">
          Các buổi hội thảo: tổ chức các buổi hội thảo, bao gồm:
        </p>
        <p className="p-3 container font-semibold italic">
          &nbsp; &nbsp; - Buổi tập phỏng vấn mô phỏng: tổ chức các buổi tập
          phỏng vấn mô phỏng để giúp sinh viên luyện tập và cải thiện kỹ năng
          phỏng vấn.
        </p>
        <p className="p-3 container font-semibold italic">
          &nbsp; &nbsp; - Buổi thuyết trình của diễn giả khách mời: mời các
          chuyên gia từ các ngành công nghiệp khác nhau (như nhà hàng,
          marketing, công nghệ...) Để chia sẻ hiểu biết và xu hướng trong ngành
          của họ (tuỳ chọn).
        </p>
        <p className="p-3 container font-semibold">
          Tư vấn hàng tháng: cung cấp các buổi tư vấn hàng tháng cá nhân hoặc
          nhóm để giải quyết những nhu cầu cụ thể liên quan đến sự nghiệp của
          sinh viên và cung cấp hướng dẫn cá nhân hóa.
        </p>
      </div>
      <div className="flex justify-center items-center h-52">
        <Image
          width={200}
          height={200}
          alt="Icon"
          src="/Doitac/DoiTac_3.png"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default page;
