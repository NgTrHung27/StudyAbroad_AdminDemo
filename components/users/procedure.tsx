import Image from "next/image";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Procedure = () => {
  return (
    <div>
      <div className="w-full min-h-screen ">
        <div className="bg-white w-full h-fit relative md:h-[800px]">
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-10">
            <div className="order-2 md:order-1 col-span-1 md:col-span-6">
              <div className="flex items-center justify-between gap-x-3 px-12 mt-8">
                <h1 className="text-5xl capitalize font-bold">
                  Quy trình đặt cọc
                </h1>
                <div className="w-[221px] h-[176px] relative">
                  <Image
                    fill
                    src={"/Truong1/laco.png"}
                    alt="laco"
                    className=""
                  />
                </div>
              </div>
              <div className="mx-12 pt-2 max-w-[60%] grid grid-cols-1">
                <ul className="list-none decoration-slice text-lg font-medium space-y-2 text-[#777E90]">
                  <li className="flex">
                    <div>
                      <FaLocationCrosshairs className="mr-2 w-6 h-6 text-[#FF4415]" />
                    </div>
                    <span>
                      Cornerstone cung cấp các tùy chọn{" "}
                      <strong>học vị đơn</strong> va <strong>học vị kép</strong>
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <FaLocationCrosshairs className="mr-2 w-6 h-6 text-[#FF4415]" />
                    </div>
                    <span className="">
                      Tùy chọn <strong>học vị kép</strong> là gói tốt hơn cho
                      sinh viên vì họ có thời gian học tập và làm việc tại
                      canada lâu hơn (1 năm làm việc + 1 năm học), điều này cũng
                      có thể tăng cơ hội của họ trong việc tìm được nhà tài trợ.
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <FaLocationCrosshairs className="mr-2 w-6 h-6 text-[#FF4415]" />
                    </div>
                    <span>
                      Tất cả sinh viên đăng ký chương trình{" "}
                      <strong>học vị kép</strong> cũng sẽ nhận được gói ưu đãi
                      độc quyền từ beeznest, bao gồm hỗ trợ kinh nghiệm làm
                      việc, phát triển sự nghiệp, mời tham dự các sự kiện mạng
                      lưới độc quyền và giúp tạo cơ hội việc làm.
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <div>
                      <FaLocationCrosshairs className="mr-2 w-6 h-6 text-[#FF4415]" />
                    </div>
                    <span>
                      Trước khi sinh viên nộp đơn xin visa, cần thanh toán $1500
                      để nhận thư chấp nhận.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 relative col-span-1 md:col-span-4 ">
              <Image
                fill
                src={"/Truong1/procedure.png"}
                alt="procedure"
                className="object-contain md:visible invisible"
              />
            </div>
          </div>
          <div className="absolute w-[164px] h-[174px] bottom-0">
            <Image
              fill
              src={"/Truong1/logostudent.png"}
              alt="logostudent"
              className="absolute bottom-0 md:visible invisible"
            />
          </div>
          <div className="w-full h-8 bg-blue-950 rounded-t-xl absolute bottom-0" />
          <div className="w-full h-8 bg-blue-950 rounded-b-xl absolute top-0" />
        </div>
      </div>
    </div>
  );
};

export default Procedure;
