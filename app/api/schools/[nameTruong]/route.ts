import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {nameTruong: string}}) {
    try {
        if (!params.nameTruong) {
            return new NextResponse("Không tìm thấy tên trường", {status: 404})
        }
        
        const school = await db.school.findUnique({
            where: {
                name: params.nameTruong
            }
        })
    
        return NextResponse.json(school);
    } catch (error) {
        console.log(error);
        return new NextResponse("Lỗi tìm trường học", {status: 500})        
    }
}