import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  PhoneCall,
  MapPin,
} from "lucide-react";

import Image from "next/image";

export default function FooterDemo() {
  return (
    <footer className="bg-[#F8F8F8] w-full auto">
      <div className="container grid md:grid-cols-3 grid-cols-1 mx-auto py-10">
        <div className="w-auto mb-4">
          <Image width={130} height={100} src="/login/LOGO_RED.png" alt="" />
          <div className="md:w-2/3">
            <p className="text-base text-[#767676] w-auto">
              Tầm nhìn cung cấp một nền giáo dục chất lượng và dễ tiếp cận cho
              sinh viên từ nhiều nền văn hóa khác nhau
            </p>
          </div>

          <div className="flex justify-left mt-4 space-x-5 lg:mt-2">
            <Link href={""}>
              <Facebook className=" text-[#7D1F1F] rounded shadow hover:text-white hover:bg-[#4267B2] hover:ring-4 " />
            </Link>
            <Link href={""}>
              <Instagram className="text-[#7D1F1F] hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white rounded shadow hover:ring-4" />
            </Link>
            <Link href={""}>
              <Linkedin className="text-[#7D1F1F] hover:bg-[#0077b5] hover:text-white rounded shadow hover:ring-4" />
            </Link>
          </div>
        </div>

        <div className="justify-between w-full text-left lg:flex">
          <div className="w-full px-4 ">
            <h2 className="mb-4 font-bold tracking-widest text-[#030000] md:text-lg">
              CHÚNG TÔI
            </h2>
            <ul className="mb-8 space-y-2 text-base list-none">
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:text-[#7D1F1F] hover:font-bold "
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:text-[#7D1F1F] hover:font-bold"
                >
                  Điều khoản
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:text-[#7D1F1F] hover:font-bold"
                >
                  Chính sách
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:text-[#7D1F1F] hover:font-bold"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 ">
          <h2 className="mb-4 font-bold md:text-lg tracking-widest text-[#030000]">
            CEMC. CO LTD
          </h2>
          <div className="grid grid-cols-1 gap-y-3 text-[#767676] text-base  ">
            <div className="flex hover:text-[#7D1F1F] hover:font-bold ">
              <Mail></Mail>
              <span className="ml-3 ">contact@huflit.edu.vn</span>
            </div>
            <div className="flex hover:text-[#7D1F1F] hover:font-bold ">
              <PhoneCall></PhoneCall>
              <span className="ml-3">
                (+84 28) 38 632 052 - Fax: (+84 28) 38 650 991
              </span>
            </div>
            <div className="flex hover:text-[#7D1F1F] hover:font-bold ">
              <Mail></Mail>
              <span className="ml-3">
                828 Sư Vạn Hạnh, Phường 13, Quận 10, TP. Hồ Chí Minh
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
