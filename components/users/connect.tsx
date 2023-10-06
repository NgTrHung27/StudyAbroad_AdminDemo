import React from "react";
import Connectcard from "./connectcard";

export const Connect = () => {
  return (
    <div className="relative w-full h-full">
      <div className="text-center mt-12">
        <h1 className="text-5xl capitalize font-bold">
          Quy trình kết nối Homestay
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 mx-auto p-20">
        <Connectcard
          imageSrc="/Truong1/truong7.png"
          title="Cho o cua gia dinh"
          description="Một trong số các loại chỗ ở là lựa chọn Homestay, mà học sinh/cha mẹ
          học sinh có thể đăng ký trước khi đến Vancouver. Việc đăng ký Homestay
          có thể được thực hiện thông qua Facebook, Airbnb và trang web
          Homestay. Một số công ty cung cấp dịch vụ này bao gồm Homadorma,
          VanMates, Cypress và HomeSweet, HomeStay."
          action="Dang ki ngay"
          bgColor="bg-emerald-500 text-white font-semibold hover:bg-emerald-500/90"
          iconColor="text-emerald-500 font-semibold"
        />
        <Connectcard
          imageSrc="/Truong1/truong8.png"
          title="Cho o cua gia dinh"
          description="Một trong số các loại chỗ ở là lựa chọn Homestay, mà học sinh/cha mẹ
          học sinh có thể đăng ký trước khi đến Vancouver. Việc đăng ký Homestay
          có thể được thực hiện thông qua Facebook, Airbnb và trang web
          Homestay. Một số công ty cung cấp dịch vụ này bao gồm Homadorma,
          VanMates, Cypress và HomeSweet, HomeStay."
          action="Dang ki ngay"
          bgColor="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          iconColor="text-emerald-500 font-bold"
        />
        <Connectcard
          imageSrc="/Truong1/truong9.png"
          title="Cho o cua gia dinh"
          description="Một trong số các loại chỗ ở là lựa chọn Homestay, mà học sinh/cha mẹ
          học sinh có thể đăng ký trước khi đến Vancouver. Việc đăng ký Homestay
          có thể được thực hiện thông qua Facebook, Airbnb và trang web
          Homestay. Một số công ty cung cấp dịch vụ này bao gồm Homadorma,
          VanMates, Cypress và HomeSweet, HomeStay."
          action="Dang ki ngay"
          bgColor="bg-yellow-500 text-white hover:bg-yellow-500/90"
          iconColor="text-yellow-500 font-bold"
        />
      </div>
      <div className="absolute w-full bg-blue-950 bottom-0 h-[40px]" />
      <div className="absolute border-l-[75px] bg-yellow-500 w-[55%] border-b-[40px] border-b-transparent border-l-blue-950 bottom-0 h-[40px] right-0" />
    </div>
  );
};
