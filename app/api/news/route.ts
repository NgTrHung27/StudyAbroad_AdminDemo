import db from "@/lib/db";
import { NextResponse } from "next/server";
import { formTinTuc } from "@/app/(root)/(routes)/tintuc/create/constant";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const { ...values } = formTinTuc.parse(body);

    const news = await db.news.create({
      data: {
        ...values,
      },
    });
    return NextResponse.json(news);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Gửi tin tức thất bại", {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const news = await db.news.findMany();

    return NextResponse.json(news);
  } catch (error) {
    console.log("FIND NEWS", error);
    return new NextResponse("Tìm tin tức thất bại", { status: 500 });
  }
}
