import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: {
      newsId: string;
    };
  }
) {
  try {
    const currentUser = await getCurrentUser();

    const values = await req.json();

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const existingNew = await db.news.findUnique({
      where: {
        id: params.newsId,
      },
    });

    if (!existingNew) {
      return new NextResponse("User not found", { status: 404 });
    }

    const news = await db.news.update({
      where: {
        id: params.newsId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.log("[NEWS_ID_PATCH]", error);
    return new NextResponse("Lỗi cập nhật hồ sơ", { status: 500 });
  }
}
