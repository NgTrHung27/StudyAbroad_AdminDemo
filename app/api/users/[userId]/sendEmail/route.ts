import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { sendMail } from "@/service/mailService";
import verifyEmail from "@/templates/verifyEmailTemplate";
import { NextResponse } from "next/server";

const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const body = await req.json();

    const { email } = body;

    const token = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30m",
    });

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    if (!email) {
      return new NextResponse("Email không tồn tại", { status: 404 });
    }

    if (!params.userId) {
      return new NextResponse("Id người dùng không tồn tại", { status: 404 });
    }

    const user = await db.user.findUnique({
      where: {
        id: params.userId,
        email,
        emailVerified: undefined,
      },
    });

    if (!user || user.emailVerified) {
      return new NextResponse("Người dùng không tồn tại hoặc đã xác thực rồi", {
        status: 404,
      });
    }

    const confirmToken = await db.activateToken.upsert({
      where: {
        token_userId: {
          userId: params.userId,
          token,
        },
      },
      update: {
        token,
        expiresAt: new Date(Date.now() + 60 * 30 * 1000),
      },
      create: {
        userId: params.userId,
        token,
        otp,
        expiresAt: new Date(Date.now() + 60 * 30 * 1000),
      },
    });

    const emailTemplate = verifyEmail(
      confirmToken.id,
      confirmToken.token,
      confirmToken.otp
    );

    const options = {
      to: email,
      subject: "Xác thực email để tiếp tục",
      text: emailTemplate.text,
      html: emailTemplate.html,
    };

    await sendMail({ options });

    return new NextResponse("Gửi email xác thực thành công", {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.log("VERIFY EMAIL", error);
    return new NextResponse("Gửi email xác thực thất bại", { status: 500 });
  }
}
