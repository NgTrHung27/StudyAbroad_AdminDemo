import Link from "next/link";
import Image from "next/image";
import { Blogscard } from "../users/blogscard";

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
          <p className="text-[64px] text-white font-bold text-center">
            CHÀO MỪNG ĐẾN VỚI THẾ
            <br /> GIỚI THỂ THAO ĐIỆN TỬ
          </p>
        </div>
      </div>
      <div className="relative z-[-3]">
        <div className="flex items-center justify-center w-full h-[219px] bg-[#D120B5] bg-opacity-90 text-center">
          <p className="text-white text-[60px] font-bold leading-[80px]">
            GIỚI THIỆU
            <br /> NGÀNH E-SPORT
          </p>
        </div>
        <Image
          alt=""
          src={"/ImgDoiTac2/nav.png"}
          width={900}
          height={500}
          className="w-full h-[219px] absolute inset-0 z-[-1]"
        />
      </div>
      <div className=" pt-[10px]">
        <div className=" grid grid-cols-2 ">
          <div className="col-span-1">
            <div className="grid grid-cols-12 pl-[10px]">
              <div className="col-span-1">
                <div className=" p-0 w-8 h-8 rounded-full border-yellow-500 border-[2px] border-dashed justify-center items-center font-bold flex absolute ">
                  <p>01</p>
                </div>
              </div>
              <div className="ml-[-25px] col-span-11">
                <p className="text-[24px] text-justify mb-[10px]">
                  Chương trình cấp bằng quản lý thể thao điện tử quốc tế mang
                  đến cho sinh viên cơ hội biến niềm đam mê chơi trò chơi điện
                  tử thành một nghề nghiệp khả thi trong ngành thể thao điện tử,
                  ngành đã phát triển vượt bậc trong thập kỷ qua. Khi ngành tiếp
                  tục phát triển và phát triển với tốc độ ngày càng cao, triển
                  vọng nghề nghiệp và nhu cầu về các chuyên gia đầu ngành cũng
                  ngày càng tăng. Để đáp ứng nhu cầu về các nhà lãnh đạo cấp cao
                  trong ngành thể thao điện tử, chương trình quản lý thể thao
                  điện tử quốc tế được thiết kế độc đáo để đào tạo và giáo dục
                  sinh viên về lịch sử, sự phát triển, khái niệm, văn hóa và
                  quản lý của các đội thể thao điện tử và các tổ chức liên quan.
                  Sinh viên tốt nghiệp được chuẩn bị sẵn sàng để tham gia vào
                  ngành công nghiệp đang phát triển nhanh chóng này và có thể
                  chọn học lên cao hơn hoặc nắm bắt nhiều cơ hội nghề nghiệp sau
                  khi hoàn thành chương trình.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image
              alt=""
              src={"/ImgDoiTac2/image9.png"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[80%] h-[80%]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[60px]">
        <div className="relative ">
          <div className="w-[1223px] h-[36px] bg-[#D120B5] absolute top-[-18px] left-[200px]"></div>
          <div>
            <div className="bg-black/60 w-full h-[876px]"></div>
            <Image
              alt=""
              src={"/ImgDoiTac2/backgroud1.png"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[876px] absolute inset-0 z-[-1]"
            />
          </div>
          <div className="absolute top-0 left-0 z-50 mt-[120px]">
            <div className="flex flex-row items-start mt-[20px] mr-[250px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Chuyên sâu trong học tập, nhưng linh hoạt trong lịch trình
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Định hướng kinh doanh và quản lý
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] pr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Học tập và định hướng nghề nghiệp, sinh viên tốt nghiệp có thể
                theo đuổi giáo dục cao hơn hoặc tìm kiếm sự nghiệp trong ngành
                công nghiệp không ngừng phát triển.
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Một chương trình độc đáo với việc tổ chức và quản lý dự án thi
                đấu thể thao điện tử ngoài đời thực
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Cơ sở đào tạo và mô phỏng hiện đại
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Nhiều lựa chọn về triển vọng nghề nghiệp
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Các buổi thảo luận và giảng dạy theo nhóm
              </p>
            </div>
          </div>
          <Image
            alt=""
            src={"/ImgDoiTac2/trenbackgroud.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-[612px] h-[693px] absolute top-[90px] right-[35px]"
          />
          <div className="absolute bottom-[-50px] left-0 z-50">
            <div className="h-[110px] w-[1080px] bg-[#D120B5] rounded-br-3xl relative">
              <p className="font-bold text-[60px] text-white text-center justify-center">
                Tổng quan chương trình
              </p>

              <Image
                alt=""
                src={"/ImgDoiTac2/phihanhgia.png"}
                width={0}
                height={0}
                sizes="100vw"
                className="w-[150px] h-[150px] absolute top-[-50px] right-[-20px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-60px]">
        <div className="relative ">
          <div>
            <div className="bg-black/60 w-full h-[1143px] "></div>
            <Image
              alt=""
              src={"/ImgDoiTac2/backgroud1.png"}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[1143px] absolute inset-0 z-[-1]"
            />
          </div>
          <div className="absolute top-0 left-0 z-50 mt-[200px] ml-[50px]">
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Chứng chỉ được cung cấp: Diploma
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Độ dài của chương trình :60-120 tuần Toàn thời gian/Bán thời
                gian
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] pr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Số khóa học :20
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Số tín chỉ :60
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Tổng số giờ liên hệ :1.200
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Thời khóa biểu học kỳ
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Mùa thu (tháng 9 - tháng 12)
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Mùa đông (tháng 1 - tháng 4)
              </p>
            </div>
            <div className="flex flex-row items-start mt-[20px] mr-[900px]">
              <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
              <p className="text-white ml-[-25px] text-[24px]">
                Mùa hè (tháng 5 - tháng 8)
              </p>
            </div>
          </div>
          <Image
            alt=""
            src={"/ImgDoiTac2/dadenchoigame.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-[845px] h-[800px] absolute top-[170px] right-[35px]"
          />
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src={"/ImgDoiTac2/artplay.png"}
            className="w-[200px] h-[200px] absolute bottom-[400px] left-[500px]"
          />
          <div className="h-[350px] w-[800px] bg-[#D120B5] absolute bottom-[-30px] left-0">
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              src={"/ImgDoiTac2/taycam.png"}
              className="w-[103px] h-[94px] ml-[350px]"
            />
            <p className="text-[60px] text-white font-bold text-center mt-[-20px]">
              Cơ hội nghề
              <br />
              nghiệp của ngành
              <br />
              E-sport
            </p>
          </div>
          <div className="h-[200px] w-[890px] bg-[#D120B5] absolute bottom-[-30px] right-0"></div>
          <Image
            alt=""
            src={"/ImgDoiTac2/nhohon.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[180px] absolute bottom-[-20px] left-[770px] z-20"
          />
          <Image
            alt=""
            src={"/ImgDoiTac2/logoucm.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[100px] absolute bottom-[30px] left-[1100px] z-20"
          />
          <Image
            alt=""
            src={"/ImgDoiTac2/logotruongla.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-[200px] absolute bottom-[-20px] left-[1480px] z-20"
          />
        </div>
      </div>
      <div className="relative ">
        <div>
          <div className="bg-black/60 w-full h-[870px] mt-[30px]"></div>
          <Image
            alt=""
            src={"/ImgDoiTac2/damchoinet.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[876px] absolute inset-0 z-[-1]"
          />
        </div>
        <div className="absolute top-0 left-0 z-50 mt-[30px]">
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Chơi game chuyên nghiệp:</b> Trở thành một vận động viên chuyên
              nghiệp, thi đấu trong các giải đấu và giành chiến thắng.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Quản lý đội tuyển Esports:</b> Điều hành và huấn luyện đội
              tuyển Esports, quản lý các hoạt động của đội và đảm bảo sự phát
              triển và thành công của các thành viên.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] pr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Truyền thông và sản xuất truyền hình:</b> Bao gồm việc sản xuất
              và phát sóng trực tiếp các trận đấu và sự kiện Esports, quay phim,
              chỉnh sửa video và quảng cáo.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Quản lý sự kiện Esports:</b> Tổ chức, quản lý và điều phối các
              sự kiện Esports như giải đấu, hội thảo, triển lãm và buổi gặp gỡ
              cộng đồng.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Tiếp thị và quảng cáo Esports:</b>Xây dựng chiến lược tiếp thị
              và quảng cáo, quản lý thương hiệu và tạo dựng mối quan hệ với
              khách hàng trong ngành Esports.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Phân tích và số liệu Esports:</b> Phân tích dữ liệu và số liệu
              thống kê trong các trận đấu Esports, đánh giá hiệu suất và phân
              tích chiến thuật.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Giám đốc dự án Esports:</b>Quản lý và điều hành các dự án liên
              quan đến Esports, bao gồm quản lý ngân sách, thời gian và nhân sự.
            </p>
          </div>
          <div className="flex flex-row items-start mt-[20px] mr-[250px]">
            <div className="rounded-full mx-[48px] w-[12px] h-[12px] mt-[10px] bg-white"></div>
            <p className="text-white ml-[-25px] text-[24px]">
              <b>Giáo dục và huấn luyện Esports:</b>Trở thành huấn luyện viên,
              giáo viên hoặc nhà phát triển chương trình đào tạo Esports để đào
              tạo và hướng dẫn người chơi trẻ.
            </p>
          </div>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            src={"/ImgDoiTac2/startright.png"}
            className="w-[240px] h-[728px] absolute top-[17px] right-0"
          />
        </div>
      </div>
      <div className="w-full h-[60px] bg-[#D120B5]"></div>
      <div className="w-full min-h-[1000px]  p-3 bg-black flex flex-col relative">
        <div className="flex flex-row  ">
          <Image
            src={"/Truong1/blogsicon.png"}
            alt="logoBottom"
            width={280}
            height={214}
            className="absolute left-[400px] mt-[-52px]"
          />
          <p className="text-white font-extrabold text-4xl absolute left-[600px] mt-7">
            BLOGS
          </p>
        </div>
        <div className="grid grid-cols-3 px-10 gap-4 absolute top-28">
          <div className="col-span-1">
            <Blogscard />
          </div>
          <div className="col-span-1">
            <Blogscard />
          </div>
          <div className="col-span-1">
            <Blogscard />
          </div>
          <div className="col-span-1">
            <Blogscard />
          </div>
          <div className="col-span-1">
            <Blogscard />
          </div>
          <div className="col-span-1">
            <Blogscard />
          </div>
        </div>
      </div>
    </>
  );
}
