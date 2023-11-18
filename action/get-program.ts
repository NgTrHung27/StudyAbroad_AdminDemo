import { Program } from "@prisma/client";
const getProgram = async (nameTruong: string, nameNganh: string): Promise<Program> => 
{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/schools/${nameTruong}/programs/${nameNganh}`);
  if(!res.ok)
  {
    throw new Error("Lấy ngành học thất bại");
  }
  return res.json();
};

export default getProgram;