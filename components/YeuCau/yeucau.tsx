import Link from "next/link";
import Image from "next/image";

export default function YeuCauPage() {
  return (
    <>
      <div>
        <Image
          alt="header"
          src={"/ImgDoiTac2/navyeucau.png"}
          width={2000}
          height={538}
          className=""
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
              <p className="px-3 font-bold text-[60px]">Yêu cầu nhập học</p>
            </div>
          </div>

          <div className="flex flex-row">
            <div>
              <Image
                alt="vector"
                src={"/vector-task.png"}
                width={30}
                height={30}
                className="ml-[132px] mt-[26px]"
              />
            </div>
            <div>
              <p className=" mt-[26px] ml-[50px] text-[24px]">
                Tất cả sinh viên muốn đăng ký chương trình diploma hoặc các khóa
                học ngôn ngữ phải
                <br /> gửi bản sao của trang đầu hộ chiếu của mình. Yêu cầu nhập
                học có thể thay đổi cho từng
                <br /> loại chương trình.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-[50px] items-center">
            <div className="w-[172px] h-[4px] bg-[#7D1F1F]"></div>
            <div className="ml-[20px] font-bold text-[36px]">
              <p>Yêu cầu nhập học cho các khóa học tiếng anh</p>
            </div>
            <div className=" ml-[30px] w-[492px] h-[4px] bg-[#7D1F1F]"></div>
          </div>

          <div className="flex flex-row ml-[150px]">
            <div>
              <Image
                alt="vector"
                src={"/vector-task.png"}
                width={30}
                height={30}
                className="ml-[132px] mt-[26px]"
              />
            </div>
            <div>
              <p className=" mt-[26px] ml-[50px] text-[24px]">
                Tất cả sinh viên đăng ký các khóa học tiếng anh sẽ phải tham gia
                bài kiểm
                <br />
                tra vị trí tiếng anh của ciccc để xác định trình độ tiếng anh
                của họ để được
                <br /> đặt vào lớp phù hợp.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-[50px] items-center">
            <div className="w-[241px] h-[4px] bg-[#FEB618]"></div>
            <div className="ml-[20px] font-bold text-[36px]">
              <p>Yêu cầu nhập học cho chương trình diploma</p>
            </div>
            <div className=" ml-[20px] w-[461px] h-[4px] bg-[#FEB618]"></div>
          </div>

          <div className="flex flex-row ml-[208px]">
            <div>
              <Image
                alt="vector"
                src={"/vector-task.png"}
                width={30}
                height={30}
                className="ml-[132px] mt-[26px]"
              />
            </div>
            <div>
              <p className=" mt-[26px] ml-[50px] text-[24px]">
                Tất cả ứng viên cho chương trình diploma sẽ phải tham gia bài
                kiểm tra
                <br />
                vị trí tiếng anh của CICCC để xác định trình độ tiếng anh của họ
                để được <br />
                đặt vào lớp phù hợp, trừ khi sinh viên có kết quả đạt trình độ
                tiếng anh khác.
                <br />
                Sinh viên phải đáp ứng tất cả các yêu cầu để có thể bắt đầu
                chương trình diploma.
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
                className="ml-[415px] mt-[26px]"
              />
            </div>
            <div>
              <p className=" mt-[26px] text-[24px]">
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
                className="ml-[415px] mt-[26px]"
              />
            </div>
            <div>
              <p className=" mt-[26px] text-[24px]">
                Trình độ tiếng anh tối thiểu được yêu cầu là một trong các yêu
                cầu sau đây:
              </p>
            </div>
          </div>

          <div className="flex flex-row ml-[495px] mt-[24px] items-center">
            <div className="bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>Tiếng anh 12 - điểm cuối kỳ tối thiểu &quot;C&quot;</p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px] items-center">
            <div className="bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>Văn học tiếng anh 12 - điểm tối thiểu &quot;C&quot;</p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px] items-center">
            <div className="bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>Giao tiếp 12 - điểm cuối kỳ tối thiểu &quot;B&quot;</p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px] items-center">
            <div className="bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>
                Tiếng anh 12 dân tộc bản địa - điểm cuối kỳ tối thiểu
                &quot;C&quot;
              </p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px]">
            <div className="mt-[10px] bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>
                Giao tiếp kỹ thuật và chuyên nghiệp 12 - điểm tối thiểu
                &quot;C&quot;
                <br /> hoặc tiếng anh hoặc văn học - điểm tối thiểu 3
              </p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px] items-center">
            <div className="bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>IB tiếng anh A (SL) - điểm tối thiểu 3</p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px] items-center">
            <div className="bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>TOEFL PBT - 513; CBT - 183; ibt - 65</p>
            </div>
          </div>
          <div className="flex flex-row ml-[495px] mt-[24px]">
            <div className="mt-[10px] bg-black rounded-full w-[15px] h-[15px]"></div>
            <div className="ml-[20px] text-[24px]">
              <p>
                Ielts academic - 5.5, hoặc bài kiểm tra vị trí cornerstone -{" "}
                <br />
                trình độ trung cấp cao*
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
