import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";

const ConfirmEmailPage = async ({
  params,
}: {
  params: {
    tokenLink: string;
  };
}) => {
  console.log("COME HERE COME HERE");
  const { tokenLink } = params;
  console.log(tokenLink);

  if (!tokenLink) {
    return redirect(`${process.env.NEXT_PUBLIC_USER_URL}/${"xacthucemail"}`);
  }

  const tokenId = tokenLink.split("%20")[0];
  const tokenString = tokenLink.split("%20")[1];

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

  try {
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
  } catch (error) {
    console.log("CONFIRM EMAIL ERROR", error);
    return redirect(`${process.env.NEXT_PUBLIC_USER_URL}`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Xác thực email thành công</CardTitle>
        <CardDescription>Bạn có thể tiếp tục quay về trang chủ</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`${process.env.NEXT_PUBLIC_USER_URL}`}>
          <Button>Quay về trang chủ</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConfirmEmailPage;
