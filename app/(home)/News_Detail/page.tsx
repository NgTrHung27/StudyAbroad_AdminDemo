"use client";

import React from "react";
import Image from "next/image";
import News_Card_Detail from "../(routes)/_components/8_News/News_Card_Detail";


const News_Detail = () => {
  return (
    <div className="h-fit w-full p-[5%] bg-white">
      <div className="h-fit w-full shadow-md border-gray-200/95 border-[0.09px] p-[5.5%] relative gap-5">
        <div className="w-full text-right md:text-2xl text-base">
            Thứ bảy, 4/11/2023, 15:19 &#40;GMT+7&#41;	
        </div>
          <div className="w-full flex flex-col">
            <div className=" md:text-5xl text-2xl text-red-900 font-bold mt-[8%] tracking-normal justify-center items-center text-justify">
                Canada siết quy định liên quan đến sinh viên quốc tế
            </div>
            <div className=" md:text-3xl text-base font-medium mt-[3%] tracking-tighter leading-[140%] text-justify">
                Canada giám sát chặt việc cấp giấy phép nhập học, đề xuất các trường nâng cao tiêu chuẩn dịch vụ, để bảo vệ du học sinh trước nạn lừa đảo hay khó khăn về nhà ở.
                <br/><br/>
                Ông Marc Miller, Bộ trưởng Bộ Di trú, Người tị nạn và Quốc tịch Canada (IRCC) hôm 27/10 công bố kế hoạch này.
                <br/><br/>
                Đầu tiên, kể từ ngày 1/12, các cơ sở giáo dục được phép nhận sinh viên quốc tế ở Canada (DLI) sẽ phải trực tiếp xác nhận thư mời nhập học của mọi ứng viên với IRCC. Việc này nhằm đảm bảo giấy phép nhập học được cấp chính xác. Trước đó, việc nộp thư mời nhập học để xin giấy phép từ IRCC do các công ty trung gian thực hiện.
                <br/><br/>
                IRCC cũng thiết lập một hệ thống để công nhận các trường học có tiêu chuẩn cao hơn về dịch vụ, chính sách hỗ trợ sinh viên quốc tế từ học kỳ mùa thu 2024. Theo ông Miller, các tiêu chuẩn có thể bao gồm khả năng tiếp cận đầy đủ nhà ở, dịch vụ sức khỏe tâm thần... Nếu đạt, các trường được nhận nhiều lợi ích, chẳng hạn việc xử lý giấy phép nhập học cho du học sinh được ưu tiên hơn.
                <br/><br/>
                Cuối cùng, IRCC sẽ đưa ra một số điều chỉnh về Chương trình Giấy phép làm việc sau tốt nghiệp (PGWP) để phù hợp với nhu cầu của thị trường lao động, cũng như các mục tiêu về nhập cư.
                <br/><br/>
            </div>
            <div className="w-full md:h-[50rem] h-[20rem] relative " >
              <Image alt="newsimgin" src={"/newsthumb.png"} className="absolute w-full h-full" fill />
            </div>
            <div className="w-full h-fit p-[2%] bg-gray-500/20 flex text-justify justify-center italic md:text-lg text-xs">
                 Một phòng học được nhiều sinh viên ưa thích ở Đại học British Columbia, Canada. Ảnh: University of British Columbia Fanpage
            </div>
            <div className="md:text-3xl text-base font-medium mt-[3%] tracking-tighter leading-[140%] text-justify" >
              Các biện pháp trên được đưa ra trong bối cảnh số sinh viên quốc tế đến Canada tăng vọt nhưng nhiều quyền lợi của họ không được bảo đảm.
            <br/><br/>
              Số sinh viên quốc tế đến Canada đã tăng gấp bốn lần trong 15 năm qua, lên mức kỷ lục hơn 550.000 vào năm ngoái. Giáo dục quốc tế mang lại hơn 22 tỷ CAD (16 tỷ USD) hàng năm cho nền kinh tế nước này, gồm học phí, tiền thuê nhà và chi tiêu cho dịch vụ, lớn hơn xuất khẩu phụ tùng ô tô, gỗ hoặc máy bay.
            <br/><br/>
              Hiện, sinh viên tốt nghiệp ở Canada có thể xin giấy phép làm việc PGWP, thời gian ở lại dao động 8-36 tháng, tùy độ dài của chương trình học. Sinh viên quốc tế chưa tốt nghiệp, có giấy phép làm việc ngoài khuôn viên trường thì được làm thêm không giới hạn số giờ đến cuối tháng 12 năm nay.
            <br/><br/>
              Bộ trưởng Miller đánh giá việc cấp giấy phép lao động tương đối dễ dàng là điểm hấp dẫn sinh viên quốc tế tới Canada, nhưng cũng &ldquo;đầy rẫy&rdquo; gian lận.
            <br/><br/>
              Hồi tháng 6, khi xem xét hơn 100 trường hợp sử dụng thư nhập học giả, cơ quan này phát hiện khoảng 40% thư này được sử dụng để đưa người vào Canada trái phép, còn lại là nạn nhân bị lừa. Nhiều sinh viên quốc tế đã đến Canada du học trong hai năm 2018-2019 nhưng khi học xong và nộp đơn xin thường trú mới phát hiện thư nhập học là giả và có nguy cơ bị trục xuất.
            <br/><br/>
              Ngoài ra, trong một báo cáo hôm 20/9, bốn thành viên thượng viện Canada cho hay có tình trạng các trung tâm tư vấn du học hướng sinh viên quốc tế đến các chương trình không đủ điều kiện được cấp PGWP. Điều này khiến du học sinh lãng phí đáng kể thời gian và tiền bạc.
            <br/><br/>
              Còn theo báo cáo hồi tháng 6 của Cơ quan Thống kê Canada, 40% sinh viên có giấy phép du học không có chỗ ở phù hợp. Du học sinh còn gặp phải nhiều vấn đề khác, chẳng hạn bị chủ nhà trọ phân biệt đối xử, bạo lực lời nói, giá đặt cọc cao, quá tải người thuê... Trong khi đó, nhiều trường tuyển sinh vượt quá số người mà mình có thể phục vụ tốt.
            <br/><br/>
              Theo IRCC, Việt Nam hiện đứng thứ 8 về số du học sinh ở Canada. Nếu tính riêng ở khu vực châu Á, số sinh viên người Việt đông thứ 5, sau Ấn Độ, Trung Quốc, Philipines và Hàn Quốc. Còn nếu tính về số giấy phép làm việc sau tốt nghiệp năm 2022, thống kê của Applyboard cho thấy du học sinh Việt xếp thứ 6 với 2.714 giấy phép được chấp thuận.
            <br/><br/>
              Chi phí để theo học bậc cử nhân ở Canada hiện trung bình khoảng 36.000 USD một năm, gồm học phí, tiền thuê nhà và sinh hoạt phí.
            <br/><br/>
            </div>
            <div className="text-base md:text-3xl font-bold mt-[3%] tracking-tighter leading-[140%] items-start text-start" >
              Huy Quân (Theo Government of Canada, CIC News, Applyboard)
            </div>
            <div className="text-base md:text-3xl font-medium mt-[5%] mb-[2%] tracking-tighter leading-[140%] items-start text-start" >
              GỢI Ý:
            </div>
            <div className=" gap-8 flex flex-col">
              <News_Card_Detail/>
              <News_Card_Detail/>
              <News_Card_Detail/>
              <News_Card_Detail/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default News_Detail;
