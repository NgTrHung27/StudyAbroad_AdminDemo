import React from "react";
import Image from "next/image";
export const Body2 = () => {
  return (
    <>
      <div className="text-[40px] text-center mt-6 font-bold text-[#001524]">
        CHƯƠNG TRÌNH HỌC
      </div>
      <div className="bg-[#D8D9DA] mt-7 border-2 rounded-3xl border-[#61677A]">
        <div className="grid grid-cols-3 ">
          <div className="col-span-3 md:col-span-2">
            <div className="ml-3">
              <p className="my-6">
                <b> Mục tiêu chương trình:</b> Mục tiêu của chương trình này có
                thể là đào tạo sinh viên để trở thành những người có khả năng
                giao tiếp hiệu quả trong môi trường kinh doanh và cũng có kiến
                thức cơ bản về kế toán. Sinh viên có thể được trang bị kỹ năng
                trong việc tạo, hiểu và trình bày thông tin kinh doanh, cũng như
                trong việc quản lý số liệu tài chính và kế toán.
              </p>
              <p className="my-6">
                <b>Chương trình học:</b> Chương trình học có thể bao gồm các môn
                học về kỹ năng giao tiếp kinh doanh, viết kỹ thuật, trình bày,
                quản lý thời gian, quản lý tài chính cá nhân, và các môn học về
                kế toán cơ bản như lập sổ cái, tổng hợp báo cáo tài chính, và
                phân tích số liệu kế toán.
              </p>
              <p className="my-6">
                <b> Mục tiêu chương trình:</b> Mục tiêu của chương trình này có
                thể là đào tạo sinh viên để trở thành những người có khả năng
                giao tiếp hiệu quả trong môi trường kinh doanh và cũng có kiến
                thức cơ bản về kế toán. Sinh viên có thể được trang bị kỹ năng
                trong việc tạo, hiểu và trình bày thông tin kinh doanh, cũng như
                trong việc quản lý số liệu tài chính và kế toán.
              </p>
              <p className="my-6">
                <b>Mục tiêu chương trình:</b> Chương trình học có thể bao gồm
                các môn học về kỹ năng giao tiếp kinh doanh, viết kỹ thuật,
                trình bày, quản lý thời gian, quản lý tài chính cá nhân, và các
                môn học về kế toán cơ bản như lập sổ cái, tổng hợp báo cáo tài
                chính, và phân tích số liệu kế toán.
              </p>
            </div>
          </div>
          <div className=" invisible md:visible my-auto">
            <Image
              width={360}
              height={330}
              alt=""
              src={"/ChiTietNganhHoc/SS-giao-tiep-trong-kinh-doanh 2.png"}
              className="col-span-1  rounded-lg mr-0"
            />

          </div>

        </div>
      </div>
    </>
  );
};
