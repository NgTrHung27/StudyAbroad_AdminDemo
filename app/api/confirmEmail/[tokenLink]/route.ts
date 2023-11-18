import db from "@/lib/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      tokenLink: string;
    };
  }
) {
  try {
    const { tokenLink } = params;
    console.log(tokenLink);

    if (!tokenLink) {
      return redirect(`${process.env.NEXT_PUBLIC_USER_URL}/${"xacthucemail"}`);
    }

    const tokenId = tokenLink.split(" ")[0];
    const tokenString = tokenLink.split(" ")[1];

    if (!tokenId) {
      return redirect(`${process.env.NEXT_PUBLIC_USER_URL}/${"xacthucemail"}`);
    }

    const token = await db.activateToken.findUnique({
      where: {
        id: tokenId,
        token: tokenString,
      },
    });

    if (!token) {
      return redirect(`${process.env.NEXT_PUBLIC_USER_URL}/${"xacthucemail"}`);
    }

    const user = await db.user.findUnique({
      where: {
        id: token.userId,
        emailVerified: undefined,
      },
    });

    if (!user) {
      return redirect(`${process.env.NEXT_PUBLIC_USER_URL}/${"dangnhap"}`);
    }

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: new Date(Date.now()),
        activateTokens: {
          deleteMany: {
            userId: user.id,
          },
        },
      },
    });

    return new NextResponse("Xác thực email thành công", { status: 200 });
  } catch (error) {
    console.log("CONFIRM EMAIL ERROR", error);
    return new NextResponse("Xác thực email thất bại", { status: 500 });
  }
}
