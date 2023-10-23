import React from "react"
import ChiTietRow from "./ChiTietRow"
export const Body = () => {
    return (
        <>
            <div className="bg-[#F4E869] w-[95%] h-[630px] mx-auto border-[2px] border-[#3085C3] rounded-[40px]">
                <div className="w-[98%] h-[550px] bg-[#FAF2D3] mx-auto rounded-[40px] border-[2px] border-[#3085C3]">
                    <table className="border-collapse  border-[2px] border-[#3085C3]  w-full h-[550px] mx-auto mt-[40px] ">
                        <ChiTietRow
                            col1={"Tiêu chuẩn chất lượng"}
                            col2={"4"}
                            col3={"3"}
                            col4={"1"}
                            col5={"2"}
                            col6={"3"}
                        />
                        <ChiTietRow
                            col1={"Tiêu chuẩn dạy học"}
                            col2={"5"}
                            col3={"1"}
                            col4={"1"}
                            col5={"2"}
                            col6={"4"}
                        />
                        <ChiTietRow
                            col1={`Têu chuẩn công bố bài báo
 cáo khoa học`}
                            col2={"17"}
                            col3={"7"}
                            col4={"14"}
                            col5={"10"}
                            col6={"20"}
                        />
                        <ChiTietRow
                            col1={`Tiêu chuẩn chất lượng người
 học`}
                            col2={"10"}
                            col3={"5"}
                            col4={"6"}
                            col5={"4"}
                            col6={"1"}
                        />
                        <ChiTietRow
                            col1={`Tiêu chuẩn cơ sở vật chất`}
                            col2={"15"}
                            col3={"10"}
                            col4={"2"}
                            col5={"3"}
                            col6={"37"}
                        />
                        <ChiTietRow
                            col1={`Đánh giá 5 sao (nghìn người) `}
                            col2={"30"}
                            col3={"181"}
                            col4={"12"}
                            col5={"34"}
                            col6={"57"}
                        />
                        <ChiTietRow
                            col1={`Xếp hạng`}
                            col2={"97"}
                            col3={"25"}
                            col4={"63"}
                            col5={"94"}
                            col6={"8"}
                        />
                        <ChiTietRow
                            col1={`Tiêu chuẩn nhiệm vụ khoa 
học công nghệ và sáng chế`}
                            col2={"33"}
                            col3={"86.9"}
                            col4={"68"}
                            col5={"52"}
                            col6={"33"}
                        />
                        <ChiTietRow
                            col1={`Điểm trung bình đầu vào`}
                            col2={"7.3"}
                            col3={"8.2"}
                            col4={"7.4"}
                            col5={"6.9"}
                            col6={"8.1"}
                        />
                        <ChiTietRow
                            col1={`Tỉ lệ công có công việc khi ra trường`}
                            col2={"96%"}
                            col3={"99%"}
                            col4={"89%"}
                            col5={"90%"}
                            col6={"88%"}
                        />
                        <ChiTietRow
                            col1={`Số giảng viên trên thạc sỉ`}
                            col2={"20"}
                            col3={"30"}
                            col4={"19"}
                            col5={"28"}
                            col6={"25"}
                        />
                        <ChiTietRow
                            col1={`Học sinh tốt nghiệp trên loại khá`}
                            col2={"100%"}
                            col3={"99%"}
                            col4={"100%"}
                            col5={"95%"}
                            col6={"89.8%"}
                        />
                        <ChiTietRow
                            col1={`Tổng điểm`}
                            col2={"88.3"}
                            col3={"95"}
                            col4={"100"}
                            col5={"95"}
                            col6={"89.8"}
                        />


                    </table>
                </div>

            </div>
        </>
    )

}