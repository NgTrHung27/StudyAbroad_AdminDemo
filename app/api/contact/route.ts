import { NextResponse } from "next/server";
import { formContactSchema } from "../../(lienhe)/LienHe/constants";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { ...values } = formContactSchema.parse(body);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/contacts`,
      values
    );

    console.log(response);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Gửi liên hệ hất bại", { status: 500 });
  }
}
