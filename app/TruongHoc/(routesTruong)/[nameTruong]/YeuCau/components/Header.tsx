import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div>
        <Image
          alt="header"
          src={"/ImgDoiTac2/navyeucau.png"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto md:h-[400px]"
        />
      </div>
      <div>
        <div>
          <Image
            alt=""
            src={"/LOGO_RED.png"}
            layout="fill"
            className="absolute inset-0 z-0 mt-[970px] -rotate-45 opacity-20"
          />
        </div>
        <div className="relative z-10">
          <div className="w-full h-[91px] bg-[#D9D9D9] flex flex-row border-[2px] border-[#A33737] ">
            <div>
              <Image
                alt="logoTruong1"
                src={"/Truong1/cornerstone_logo.png"}
                width={90}
                height={90}
                className=" ml-5 mt-4"
              />
            </div>
            <div>
              <p className="px-3 font-bold md:mt-[0px] mt-7 text-[25px] md:text-[60px]">
                Yêu cầu nhập học
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Image
                alt="vector"
                src={"/vector-task.png"}
                width={0}
                height={0}
                sizes="100vw"
                className="md:ml-[120px] mt-[26px] w-[100px] md:w-8 md:mt-5 h-auto ml-5"
              />
            </div>
            <div>
              <p className=" mt-[20px] ml-[40px] text-[20px] md:w-5/6 md:text-[24px]">
                Tất cả sinh viên muốn đăng ký chương trình diploma hoặc các khóa
                học ngôn ngữ phải gửi bản sao của trang đầu hộ chiếu của mình.
                Yêu cầu nhập học có thể thay đổi cho từng loại chương trình.
              </p>
            </div>
          </div>

          <div className="md:flex md:flex-row mt-[50px] md:items-center">
            <div className="invisible md:visible w-[15%] h-[4px] bg-[#7D1F1F]">
            </div>

            <div className="ml-[20px] font-bold text-[24px] md:w-[50%] md:text-[36px]">
              <p>Yêu cầu nhập học cho các khóa học tiếng anh</p>
            </div>
            <div className="invisible md:visible w-[35%] md:h-[4px] bg-[#7D1F1F]">
            </div>
          </div>

          <div className="flex flex-row ml-[30px] md:ml-[150px]">
            <div>
              <Image
                alt="vector"
                src={"/vector-task.png"}
                width={0}
                height={0}
                sizes="100vw"
                className="md:ml-[132px] mt-9 md:mt-[26px] w-[120px] h-auto md:w-[30px]"
              />
            </div>
            <div>
              <p className=" mt-[26px] md:w-5/6 ml-[20px] md:ml-[50px] text-[24px]">
                Tất cả sinh viên đăng ký các khóa học tiếng anh sẽ phải tham gia
                bài kiểm tra vị trí tiếng anh của ciccc để xác định trình độ
                tiếng anh của họ để được đặt vào lớp phù hợp.
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-row mt-[50px] md:items-center relative">
            <div className="invisible md:visible md:w-[15%] h-[4px] bg-[#FEB618]">
            </div>

            <div className="ml-[20px] font-bold text-[24px] md:w-[50%] md:text-[36px]">
              <p>Yêu cầu nhập học cho chương trình diploma</p>
            </div>
            <div className="invisible md:visible md:w-[35%] md:h-[4px] bg-[#FEB618]">
            </div>
          </div>

          <div className="flex flex-row md:ml-[208px] ml-[30px]">
            <div>
              <Image
                alt="vector"
                src={"/vector-task.png"}
                width={0}
                height={0}
                sizes="100vw"
                className="md:ml-[130px] mt-[35px] w-[200px] md:w-[30px] h-auto md:mt-[26px]"
              />
            </div>
            <div>
              <p className="mr-3 mt-[26px] ml-[20px] md:ml-[50px] md:w-4/5 text-[24px]">
                Tất cả ứng viên cho chương trình diploma sẽ phải tham gia bài
                kiểm tra vị trí tiếng anh của CICCC để xác định trình độ tiếng
                anh của họ để được đặt vào lớp phù hợp, trừ khi sinh viên có kết
                quả đạt trình độ tiếng anh khác. Sinh viên phải đáp ứng tất cả
                các yêu cầu để có thể bắt đầu chương trình diploma.
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Image
                alt="vector"
                src={"/Truong1/checkbox.png"}
                width={80}
                height={80}
                className="ml-[20px] mt-[35px] md:ml-[415px] md:mt-[26px]"
              />
            </div>
            <div>
              <p className="md:ml-[-20px] mt-[26px] text-[24px]">
                Tốt nghiệp trung học hoặc tương đương; hoặc đủ 18 tuổi.
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Image
                alt="vector"
                src={"/Truong1/checkbox.png"}
                width={80}
                height={80}
                className="ml-[20px] mt-[35px] md:ml-[415px] md:mt-[26px]"
              />
            </div>
            <div>
              <p className="md:ml-[-20px] mt-[26px] ml-3 text-[24px]">
                Trình độ tiếng anh tối thiểu được yêu cầu là một trong các yêu
                cầu sau đây:
              </p>
            </div>
          </div>
          <ul className="list-disc ml-[90px] md:ml-[520px] text-[18px]">
            <li className="mt-3">Tiếng anh 12 - điểm cuối kỳ tối thiểu &quot;C&quot;</li>
            <li className="mt-3">Văn học tiếng anh 12 - điểm tối thiểu &quot;C&quot;</li>
            <li className="mt-3">Giao tiếp 12 - điểm cuối kỳ tối thiểu &quot;B&quot;</li>
            <li className="mt-3">
              Tiếng anh 12 dân tộc bản địa - điểm cuối kỳ tối thiểu &quot;C&quot;
            </li>
            <li className="mt-3">
              Tiếng anh 12 dân tộc bản địa - điểm cuối kỳ tối thiểu &quot;C&quot;
            </li>
            <li className="mt-3">
              Giao tiếp kỹ thuật và chuyên nghiệp 12 - điểm tối thiểu &quot;C&quot; hoặc
              tiếng anh hoặc văn học - điểm tối thiểu 3
            </li>
            <li className="mt-3">TOEFL PBT - 513; CBT - 183; ibt - 65</li>
            <li className="mt-3">
              Ielts academic - 5.5, hoặc bài kiểm tra vị trí cornerstone - trình
              độ trung cấp cao*
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
