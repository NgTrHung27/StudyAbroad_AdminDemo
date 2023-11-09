import getCurrentUser from "@/actions/get-current-user";
import { formCreateNganhHocSchema } from "@/app/(root)/(routes)/nganhhoc/create/constant";
import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const currentuser = await getCurrentUser();
    if (!currentuser) {
      return new NextResponse("Chưa xác thực", { status: 401 });
    }
    const body = await req.json();
    const { name, description1, description2, Price, Image1,Image2 } =
      formCreateNganhHocSchema.parse(body);
    const program = await db.program.create(
      {
       data: {
          name,
          description1,
          description2,
          Price,
          Image1,
          Image2,
        },
     }
    );
    return NextResponse.json(program);
  } catch (error) {
    console.log("CREATE USER", error);
    return new NextResponse("Tạo ngành học thất bại", {
      status: 500,
    });
  }
}
export async function GET(req: Request, {params}: {params: {nameTruong: string}}) {
    try {
        if (!params.nameTruong) {
            return new NextResponse("Không tìm thấy tên trường", {status: 404})
        }
        
        const programs = await db.program.findMany({
            where: {
              school: {
                name:params.nameTruong
              }
            },
        })
    
        return NextResponse.json(programs);
    } catch (error) {
        console.log(error);
        return new NextResponse("Lỗi tìm trường học", {status: 500})        
    }
}
