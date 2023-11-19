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
    const values = await req.json();
    const existingNew = await db.news.findUnique({
      where: {
        id: params.newsId,
      },
    });
    if (!existingNew) {
      return new NextResponse("Không tim thấy bài viết", { status: 404 });
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
    return new NextResponse("Lỗi cập nhật bài viết", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { newsId: string } }
) {
  try {
    if (!params.newsId) {
      return new NextResponse("Không tìm thấy mã tin tức", { status: 404 });
    }

    const news = await db.news.findUnique({
      where: {
        id: params.newsId,
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lỗi tìm tin tức", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { newsId: string } }
) {
  try {
    if (!params.newsId) {
      return new NextResponse("Không tìm thấy mã tin tức", { status: 404 });
    }

    const news = await db.news.findUnique({
      where: {
        id: params.newsId,
      },
    });

    await db.news.delete({
      where: {
        id: params.newsId,
      },
    });
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    return new NextResponse("Lỗi tìm tin tức", { status: 500 });
  }
}
