import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { redirect } from "next/navigation";

const jwt = require("jsonwebtoken");

const ConfirmEmailPage = async ({
  params,
}: {
  params: {
    taikhoanId: string;
    tokenId: string;
  };
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/");
  }

  const { taikhoanId, tokenId } = params;

  if (!taikhoanId) {
    return redirect("/");
  }

  if (!tokenId) {
    return redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      id: taikhoanId,
      emailVerified: undefined,
    },
  });

  if (!user) {
    return redirect("/");
  }

  const decoded = jwt.verify(tokenId, process.env.JWT_SECRET_KEY);
  console.log(decoded.email);

  if (!decoded) {
    return redirect("/");
  }

  try {
    await db.user.update({
      where: {
        id: taikhoanId,
        email: decoded.email,
        emailVerified: undefined,
      },
      data: {
        emailVerified: new Date(Date.now()),
      },
      include: {
        activateTokens: {
          where: {
            expiresAt: {
              gt: new Date(Date.now()),
            },
          },
        },
      },
    });
  } catch (error) {
    console.log("CONFIRM EMAIL", error);
    return redirect("/");
  }
  return redirect(`/taikhoan/edit/${taikhoanId}`);
};

export default ConfirmEmailPage;
