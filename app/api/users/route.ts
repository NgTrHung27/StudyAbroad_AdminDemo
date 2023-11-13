import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import verifyEmail from "@/templates/verifyEmailTemplate";
import { sendMail } from "@/service/mailService";
import { formCreateUserSchema } from "@/constants/create-user-schema";

const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { dob: birth } = body;

    if (typeof birth === "string") {
      body.dob = new Date(birth);
    }

    const {
      studyCategory,
      certificateCategory,
      schoolCategory,
      schoolName,
      password,
      ...values
    } = formCreateUserSchema.parse(body);

    if (!values.email) {
      return new NextResponse("Không tìm thấy địa chỉ email", { status: 404 });
    }

    if (!password) {
      return new NextResponse("Không tìm thấy mật khẩu", { status: 404 });
    }

    const existUser = await db.user.findUnique({
      where: {
        email: values.email,
      },
    });

    if (existUser) {
      return new NextResponse("Người dùng với email này đã tồn tại", {
        status: 403,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const school = await db.school.findUnique({
      where: {
        name: schoolName,
      },
    });

    if (!school) {
      return new NextResponse("Không tìm thấy trường học", { status: 404 });
    }

    const user = await db.user.create({
      data: {
        students: {
          create: {
            schoolId: school.id,
          },
        },
        hashedPassword,
        ...values,
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
    console.log(error);
    return new NextResponse(`Đăng ký thất bại ${error}`, { status: 500 });
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
