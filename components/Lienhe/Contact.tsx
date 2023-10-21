import Image from "next/image";

import { Input } from "../ui/input";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
      <div className="my-auto">
        <div className="flex items-center justify-between gap-x-3 px-12">
          <h1 className="text-3xl capitalize font-bold">Liên hệ</h1>
        </div>
        <div className="mx-12 pt-2">
          <ul className="list-none decoration-slice text-lg font-medium space-y-8 text-[#777E90] ">
            <li className="flex justify-between">
              <span>
                {" "}
                <strong>Văn phòng miền Nam:</strong> Tầng 75 Landmark 81, 720A
                Đ. Điện Biên Phủ, Vinhomes Tân Cảng, Bình Thạnh, Thành phố Hồ
                Chí Minh, Việt Nam
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span>
                {" "}
                <strong>Điện thoại:</strong> (024) 37777777
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                {" "}
                <strong>Mr. Hưng:</strong> (098) 8888888
              </span>
            </li>
            <li className="flex justify-between mt-10">
              <span>
                {" "}
                <strong>Văn phòng miền Bắc:</strong> 5 P. Hoàng Văn Thụ, Quán
                Thánh, Ba Đình, Hà Nội, Việt Nam
              </span>
            </li>
            <li className="flex justify-between mt-4">
              <span>
                {" "}
                <strong>Điện thoại:</strong> (024) 39999999
              </span>
            </li>
            <li className="flex justify-between">
              <span>
                {" "}
                <strong>Mr. Hưng:</strong> (098) 9999999
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-auto ">
        <div className="flex items-center justify-between gap-x-3 px-12">
          <div className="capitalize font-bold mt-3">
            <h1>Thông tin liên hệ</h1>
          </div>
        </div>
        <div className="mx-12 pb-10 mt-6">
          <form>
            <Input
              type="text"
              className="w-full h-full my-6 text-black border outline outline-1 focus-visible:ring-offset-500 focus-visible:ring-sky-500"
              placeholder="Họ và tên(*)"
            />
            <Input
              type="email"
              className="w-full h-full my-6 text-black border outline outline-1 focus-visible:ring-offset-500 focus-visible:ring-sky-500"
              placeholder="Email"
            />
            <Input
              type="phone"
              className="w-full h-full my-6 text-black border outline outline-1 focus-visible:ring-offset-500 focus-visible:ring-sky-500"
              placeholder="Số điện thoại"
            />
            <Input
              type="text"
              className="w-full h-full my-6 text-black border outline outline-1 focus-visible:ring-offset-500 focus-visible:ring-sky-500"
              placeholder="Nội dung cần tư vấn"
            />
          </form>
          <button
            type="submit"
            className="bg-[#7D1F1F] text-white px-4 py-2 w-full h-full"
          >
            Liên hệ với chúng tôi
          </button>
          <span className="flex flex-col text-[12px] md:text-15px">
            *Sau khi nhận được thông tin, chúng tôi sẽ tư vấn cho bạn hoàn toàn
            miễn phí
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
