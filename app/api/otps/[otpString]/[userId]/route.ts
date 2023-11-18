import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { otpString: string; userId: string } }
) {
  try {
    if (!params.otpString) {
      return new NextResponse("Không tìm thấy mã yêu cầu", { status: 404 });
    }

    if (!params.userId) {
      return new NextResponse("Không tìm thấy mã người dùng", { status: 404 });
    }

    const otp = await db.otp.findUnique({
      where: {
        otp: params.otpString,
        userId: params.userId,
        expiresAt: {
          gte: new Date(),
        },
      },
    });

    if (!otp) {
      return new NextResponse("Không tìm thấy yêu cầu", { status: 404 });
    }

    return NextResponse.json(otp);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lỗi tìm kiếm yêu cầu khôi phục mật khẩu", {
      status: 500,
    });
  }
}
