import { Program } from "@prisma/client";
import Image from "next/image";
interface Props {
  program: Program;
}
export const Body = ({ program }: Props) => {
  return (
    <>
      <div className="text-[40px] text-center mt-4 font-bold text-[#001524]">
        THÔNG TIN KHÓA {program.name}
      </div>
      <div className="bg-[#D8D9DA] mt-2 border-2 rounded-3xl border-[#61677A]">
        <div className="lg:grid grid-cols-3">
          <Image
            width={352}
            height={329}
            alt=""
            src={program.Image1}
            className="col-span-1 lg:ml-[52px] rounded-lg "
          />
          <br className="lg:hidden" />
          <div className="ml-[20px] lg:col-span-2 mt-[20px]">
            <ul className="list-disc">
              <li className="text-[16px] lg:text-[20px]">
                Ngày khai giảng: 10/10/2023
              </li>
              <li className="text-[16px] lg:text-[20px]">
                Học phí: 20,990 CAD
              </li>
              <li className="text-[16px] lg:text-[20px]">
                Liên hệ: Vui lòng liên hệ số: (08) 2225 0730 để được tư vấn
              </li>
              <li className="text-[16px] lg:text-[20px]">
                Văn bằng/ Chứng chỉ: Kết thúc khóa học, học viên tham gia thi trực tuyến. Nếu đạt yêu cầu, học viên sẽ nhận được chứng chỉ Kỹ Năng Giao Tiếp Trong Kinh Doanh CBP do tổ chức IBTA-Hoa Kỳ cấp, có giá trị trên toàn cầu
              </li>
              <li className="text-[16px] lg:text-[20px]">
                Tần suất khai giảng: Thường xuyên
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
