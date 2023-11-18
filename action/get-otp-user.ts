import { School } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/otps`;

const getOtpUser = async (
  otpString: string,
  userId: string
): Promise<School> => {
  const res = await fetch(`${URL}/${otpString}/${userId}`);
  if (!res.ok) {
    throw new Error("Lỗi tìm kiếm mã yêu cầu khôi phục mật khẩu");
  }
  return res.json();
};

export default getOtpUser;
