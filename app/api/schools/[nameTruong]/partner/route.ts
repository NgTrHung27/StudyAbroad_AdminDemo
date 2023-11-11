import getCurrentUser from "@/actions/get-current-user";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import {formCreatePartnerSchema} from "../../../../../constaints-create/constants-partner"
export async function POST(req: Request,{params}: {params: {nameTruong: string}}) {
  try {

    const currentuser = await getCurrentUser();
    if (!currentuser) {
      return new NextResponse("Chưa xác thực", { status: 401 });

    }
    const body = await req.json();
    const {ImageNav1,ImageNav2,Title,Content1,Image1, des1,des2,Title1,content2,contentlist,content_Tuvan } =
      formCreatePartnerSchema.parse(body);
    const partner = await db.partner.create(
      {
       data: {
         ImageNav1,
         ImageNav2,
         Title,
         Content1,
         Image1,
         des1,
         des2,
         Title1,
         content2,
         contentlist,
         content_Tuvan
        },
     }
    );
    return NextResponse.json(partner);
  } catch (error) {
    console.log("CREATE PARTNER", error);
    return new NextResponse(`Tạo đối tác thất bại ${error}`, {
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
