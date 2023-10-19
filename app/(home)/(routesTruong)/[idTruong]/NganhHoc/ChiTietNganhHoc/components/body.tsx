import Image from "next/image";
export const Body = () => {
  return (
    <>
      <div className="text-[40px] text-center mt-4 font-bold text-[#001524]">
        THÔNG TIN KHÓA HỌC
      </div>
      <div className="bg-[#D8D9DA] mt-2 border-2 rounded-3xl border-[#61677A]">
        <div className="grid grid-cols-3">
          <Image
            width={352}
            height={329}
            alt=""
            src={"/ChiTietNganhHoc/SS-giao-tiep-trong-kinh-doanh 1.png"}
            className="col-span-1 ml-[52px] rounded-lg "
          />
          <div className="ml-[20px] col-span-2 mt-[20px]">
            <div className="grid grid-cols-12 ">
              <div
                className="col-span-1 mt-2
              rounded-full  w-[4px] h-[4px] bg-black
            "
              ></div>
              <p className="font-semibold col-span-11 ml-[-50px]">
                Ngày khai giảng: 10/10/2023
              </p>
            </div>

            <div className="grid grid-cols-12 ">
              <div
                className="col-span-1 mt-2
              rounded-full  w-[4px] h-[4px] bg-black
            "
              ></div>
              <p className="font-semibold col-span-11 ml-[-50px]">
                Học phí: 20,990 CAD
              </p>
            </div>
            <div className="grid grid-cols-12 ">
              <div
                className="col-span-1 mt-2
              rounded-full  w-[4px] h-[4px] bg-black
            "
              ></div>
              <p className="font-semibold col-span-11 ml-[-50px]">
                Liên hệ: Vui lòng liên hệ số: (08) 2225 0730 để được tư vấn
              </p>
            </div>
            <div className="grid grid-cols-12 ">
              <div
                className="col-span-1 mt-2
              rounded-full  w-[4px] h-[4px] bg-black
            "
              ></div>
              <p className="font-semibold col-span-11 ml-[-50px]">
                Văn bằng/ Chứng chỉ: Kết thúc khóa học, học viên tham gia thi
                trực tuyến.
              </p>
            </div>
            <div className="grid grid-cols-12 ">
              <div
                className="col-span-1 mt-2
              rounded-full  w-[4px] h-[4px] bg-black
            "
              ></div>
              <p className="font-semibold col-span-11 ml-[-50px]">
                Nếu đạt yêu cầu, học viên sẽ nhận được chứng chỉ Kỹ Năng Giao
                Tiếp Trong Kinh Doanh CBP do tổ chức IBTA-Hoa Kỳ cấp, có giá trị
                trên toàn cầu
              </p>
            </div>

            <div className="grid grid-cols-12 ">
              <div
                className="col-span-1 mt-2
              rounded-full  w-[4px] h-[4px] bg-black
            "
              ></div>
              <p className="font-semibold col-span-11 ml-[-50px]">
                Tần suất khai giảng: Thường xuyên
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
