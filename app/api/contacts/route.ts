import { formContactSchema } from "@/constants/create-contact-schema";
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { ...values } = formContactSchema.parse(body);

    const contact = await db.contact.create({
      data: {
        ...values,
      },
    });
    return NextResponse.json(contact);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Gửi liên hệ thất bại", {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const contacts = await db.contact.findMany();

    return NextResponse.json(contacts);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lỗi lấy thông tin liên hệ", { status: 500 });
  }
}
