import getCurrentUser, { getSession } from "@/actions/get-current-user";
import db from "@/lib/db";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { formCreateUserSchema } from "@/app/(root)/(routes)/taikhoan/create/constants";
import verifyEmail from "@/templates/verifyEmailTemplate";
import { sendMail } from "@/service/mailService";

const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { dob: birth, session } = body;
    if (typeof birth === "string") {
      body.dob = new Date(birth);
    }

    console.log(session);

    const {
      name,
      address,
      cccd,
      description,
      dob,
      email,
      gender,
      phoneNumber,
    } = formCreateUserSchema.parse(body);

    const hashedPassword = await bcrypt.hash("test", 12);

    const user = await db.user.create({
      data: {
        hashedPassword,
        name,
        address,
        cccd,
        description,
        dob,
        email,
        gender,
        phoneNumber,
      },
    });

    const confirmToken = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30m",
      }
    );

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const token = await db.activateToken.create({
      data: {
        otp,
        expiresAt: new Date(Date.now() + 60 * 30 * 1000),
        token: confirmToken,
        userId: user.id,
      },
    });

    const emailTemplate = verifyEmail(user.id, token.token, token.otp);

    const options = {
      to: user.email,
      subject: "Xác thực email để tiếp tục",
      text: emailTemplate.text,
      html: emailTemplate.html,
    };

    await sendMail({ options });

    return NextResponse.json(user);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Tạo tài khoản người dùng thất bại", {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const users = await db.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lấy người dùng thất bại", { status: 500 });
  }
}
