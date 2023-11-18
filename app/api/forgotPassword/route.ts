import db from "@/lib/db";
import { sendMail } from "@/service/mailService";
import forgotPassword from "@/templates/forgotPasswordTemplate";
import { NextResponse } from "next/server";

const otpGenerator = require("otp-generator");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email } = body;

    if (!email) {
      return new NextResponse("Không tìm thấy email", { status: 404 });
    }

    const user = await db.user.findUnique({
      where: {
        email,
        emailVerified: {
          not: undefined,
        },
      },
    });

    if (!user) {
      return new NextResponse(
        "Không tìm thấy tài khoản với email này hoặc chưa xác thực email",
        {
          status: 404,
          headers: corsHeaders,
        }
      );
    }

    const existOtp = await db.otp.findFirst({
      where: {
        userId: user.id,
      },
    });

    let otp;

    if (!existOtp) {
      const otpString = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
      });

      const expiresAt = Date.now() + 60 * 1;

      otp = await db.otp.create({
        data: {
          userId: user.id,
          otp: otpString,
          expiresAt: new Date(expiresAt),
        },
      });
    } else {
      const otpString = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
      });

      const expiresAt = Date.now() + 60 * 1;

      otp = await db.otp.update({
        where: {
          userId: user.id,
        },
        data: { otp: otpString, expiresAt: new Date(expiresAt) },
      });
    }

    const emailTemplate = forgotPassword(user.id, otp.otp);

    const options = {
      to: email,
      subject: "[QUẢN LÝ DU HỌC SINH CANADA] - Yêu cầu khôi phục lại mật khẩu",
      text: emailTemplate.text,
      html: emailTemplate.html,
    };

    await sendMail({ options });

    return new NextResponse("Gửi email khôi phục mật khẩu thành công", {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.log("FORGOT PASS ERROR", error);
    return new NextResponse("Gửi email khôi phục mật khẩu thất bại", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
