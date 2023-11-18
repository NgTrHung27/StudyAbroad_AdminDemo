import { Program } from "@prisma/client";
import Image from "next/image";
import { Preview } from "../../../../../../../../components/preview";
import { Montserrat } from "next/font/google";
import { cn } from "../../../../../../../../lib/utils";
const font = Montserrat({ weight: "500", subsets: ["vietnamese"] });
interface Props {
  program: Program;
}
export const Body = ({ program }: Props) => {
  return (
    <>
      <div className="text-[40px] text-center mt-4 font-bold text-[#001524]">
        THÔNG TIN KHÓA {program.name}
      </div>
      <div className="bg-[#D8D9DA] mt-2 border-2 rounded-3xl border-[#61677A]">
        <div className="lg:grid grid-cols-3">
          <Image
            width={352}
            height={329}
            alt=""
            src={program.Image1}
            className="col-span-1 lg:ml-[52px] rounded-lg "
          />
          <br className="lg:hidden" />
          <div className={cn(
            "mt-4 w-full col-span-2",
            font.className
          )}>
            <Preview value={program.description1} />
          </div>
        </div>
      </div>
    </>
  );
};
