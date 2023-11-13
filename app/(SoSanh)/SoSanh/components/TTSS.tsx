import Image from "next/image";
import React from "react";
export const TTSS = () => {
  return (
    <>
      <div className="text-[60px] font-bold text-center my-[40px]">
        Thông tin so sánh các trường
      </div>
      <div className="bg-[#F4E869] w-[98%] md:rounded-[40px] rounded-[20px] mx-auto border-2 border-[#3085C3] pt-2">
        <div className="w-full md:h-[70px] h-[30px] pl-[58.3333333%] pr-[2%] relative">
            <div className=" md:mt-5 grid grid-cols-5 w-full h-full relative md:gap-6 gap-1">
              <div className="h-full w-full col-span-1 relative">
                <Image
                  alt=""
                  fill
                  src={"/ThongTinCacTruongHoc/1.png"}
                  className="absolute"
                />
                </div>
                <div className="h-full w-full col-span-1 relative ">
                <Image
                  alt=""
                  fill
                  src={"/ThongTinCacTruongHoc/2.png"}
                  className="absolute"
                />
                </div>
              <div className="h-full w-full col-span-1 relative">
                <Image
                  alt=""
                  fill
                  src={"/ThongTinCacTruongHoc/3.png"}
                  className="absolute"
                />
                </div>
              <div className="col-span-1 relative">
                <Image
                  alt=""
                  fill
                  src={"/ThongTinCacTruongHoc/4.png"}
                  className="absolute"
                />
              </div>
              <div className="col-span-1 relative">
                <Image
                  alt=""
                  fill
                  src={"/ThongTinCacTruongHoc/5.png"}
                  className="absolute"
                />
              </div>
            </div>
        </div>
        <div className="md:mt-8 mt-2 pb-4 w-[98%] mx-auto relative">
          <div className="bg-[#FAF2D3] border-2 border-[#3085C3] md:rounded-[40px] rounded-[20px]">
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn chất lượng</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">4</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">3</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">1</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">2</div>
              <div className="w-1/12   py-3 text-center">3</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn dạy học</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">5</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">1</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">1</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">2</div>
              <div className="w-1/12   py-3 text-center">4</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn công bố bài báo
                cáo khoa khọc</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">17</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">7</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">14</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">10</div>
              <div className="w-1/12   py-3 text-center">20</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn chất lượng người
                học</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">10</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">5</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">6</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">4</div>
              <div className="w-1/12   py-3 text-center">1</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn chất lượng người
                học</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">15</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">10</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">2</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">3</div>
              <div className="w-1/12   py-3 text-center">37</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn cơ sở vật chất</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">30</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">181</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">12</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">34</div>
              <div className="w-1/12   py-3 text-center">57</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Đánh giá 5 sao (nghìn người)</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">97</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">25</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">63</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">94</div>
              <div className="w-1/12   py-3 text-center">8</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Xếp hạng</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">33</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">86.9</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">68</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">52</div>
              <div className="w-1/12   py-3 text-center">33</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tiêu chuẩn nhiệm vụ khoa
                học công nghệ và sáng chế</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">7.3</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">82</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">7.4</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">6.9</div>
              <div className="w-1/12   py-3 text-center">8.1</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Điểm trung bình đầu vào</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">96%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">99%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">89%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">90%</div>
              <div className="w-1/12   py-3 text-center">88%</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tỉ lệ công có công việc khi ra trường</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">96%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">99%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">89%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">90%</div>
              <div className="w-1/12   py-3 text-center">88%</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Số giảng viên trên thạc sỉ</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">20</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">30</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">19</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">28</div>
              <div className="w-1/12   py-3 text-center">25</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px] border-b-2 border-[#3085C3]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Học sinh tốt nghiệp trên loại khá</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">100%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">99%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">100%</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">95%</div>
              <div className="w-1/12   py-3 text-center">89.8%</div>
            </div >
            <div className="flex flex-row font-bold text-[10px] md:text-[25px]">
              <div className="w-7/12  border-r-2 border-[#3085C3] py-3"><p className="ml-[10px]">Tổng điểm</p></div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">88.3</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">5</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">100</div>
              <div className="w-1/12  border-r-2 border-[#3085C3] py-3 text-center">95</div>
              <div className="w-1/12   py-3 text-center">89.8</div>
            </div >
          </div>
        </div>
      </div>
    </>
  );
};
