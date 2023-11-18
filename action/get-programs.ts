import { Program } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;

const getPrograms = async (nameTruong: string): Promise<Program[]> => {
  const res = await fetch(`${URL}/${nameTruong}/programs`);
  if(!res.ok)
  {
    throw new Error("Lấy ngành học thất bại");
  }
  return res.json();
};
export default getPrograms;