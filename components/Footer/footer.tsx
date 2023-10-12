import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import Image from "next/image";

export default function FooterDemo() {
  return (
    <footer className="bg-[#F8F8F8] w-full">
      <div className="container flex flex-col flex-wrap px-4 py-2 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="w-full text-center md:mx-0 md:text-left">
          <Image width={100} height={100} src="/LOGO_RED.png" alt="" />

          <p className="text-base text-justify text-[#767676]">
            Tầm nhìn cung cấp một nền giáo dục chất lượng và dễ tiếp cận cho
            sinh viên từ nhiều nền văn hóa khác nhau
          </p>

          <div className="flex justify-left mt-4 space-x-4 lg:mt-2 ">
            <Link href={""}>
              <Facebook className="text-blue-500" />
            </Link>
            <Link href={""}>
              <Twitter className="text-sky-300" />
            </Link>
            <Link href={""}>
              <Linkedin className="text-blue-400" />
            </Link>
          </div>
        </div>

        <div className="justify-between w-full text-left lg:flex">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-[#030000]">
              Company
            </h2>
            <ul className="mb-8 space-y-2 text-base list-none">
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90  "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-[#030000]">
              Get Help
            </h2>
            <ul className="mb-8 space-y-2 text-base list-none">
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  Support Carrer
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  24h Service
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  Cotact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-[#030000]">
              Support
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90  "
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90  "
                >
                  Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90  "
                >
                  Business
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-2 font-bold tracking-widest text-[#030000]">
              Contact
            </h2>
            <ul className="mb-8 space-y-2 text-sm list-none">
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  Whatsapp
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#767676] hover:underline hover:text-black/90 "
                >
                  Support 24
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
