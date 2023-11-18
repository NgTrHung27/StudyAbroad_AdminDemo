import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt, { hash } from "bcrypt";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS, PATCH",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return new NextResponse("Không tìm thấy mã người dùng", { status: 404 });
    }

    const user = await db.user.findUnique({
      where: {
        id: params.userId,
      },
    });

    if (!user) {
      return new NextResponse("Không tìm thấy người dùng", { status: 404 });
    }

    const body = await req.json();

    const { password } = body;

    if (!password) {
      return new NextResponse("Không tìm thấy mật khẩu truyền vào", {
        status: 404,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    console.log(hashedPassword);

    const updatedUser = await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        hashedPassword,
      },
    });

    await db.otp.deleteMany({
      where: {
        userId: updatedUser.id,
      },
    });

    return NextResponse.json(updatedUser, {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    return new NextResponse("Lỗi đặt lại mật khẩu", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
