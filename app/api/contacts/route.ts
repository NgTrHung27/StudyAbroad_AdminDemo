import db from "@/lib/db";
import { NextResponse } from "next/server";
import { formContactSchema } from "@/app/(root)/(routes)/lienhe/constants";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const { ...values } = formContactSchema.parse(body);

    const contact = await db.contact.create({
      data: {
        ...values,
      },
    });
    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Gửi liên hệ thất bại", {
      status: 500,
    });
  }
}
