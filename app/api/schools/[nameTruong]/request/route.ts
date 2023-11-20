import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import {formCreateRequestSchema} from "../../../../../constaints-create/constants-request"
export async function POST(req: Request, {params}: {params: {nameTruong: string}}) {
  try {
    const currentuser = await getCurrentUser();
    if (!currentuser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }
    const body = await req.json();
    const { Name,Image1,Content1,Title1,Content2, Title2,checkcontent,roundcontent} =
      formCreateRequestSchema.parse(body);

    const request = await db.request.create(
      {
       data: {
         Name,
         Image1,
         Content1,
         Title1,
         Content2,
         Title2,
         checkcontent,
         roundcontent
        },
     }
    );
    return NextResponse.json(request);
  } catch (error) {
    console.log("CREATE REQUEST", error);
    return new NextResponse(`Tạo yêu cầu thất bại ${error}`, {
      status: 500,
    });
  }
}
export async function GET(req: Request, {params}: {params: {nameTruong: string}}) {
    try {
        if (!params.nameTruong) {
            return new NextResponse("Không tìm thấy tên trường", {status: 404})
        }
        const requests = await db.request.findMany({
            where: {
              school: {
                name:params.nameTruong
              }
            },
        })
        return NextResponse.json(requests);
    } catch (error) {
        console.log(error);
        return new NextResponse("Lỗi tìm trường học", {status: 500})        
    }
}
