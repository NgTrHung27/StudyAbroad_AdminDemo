import { Program } from "@prisma/client";
const URL = `${process.env.NEXT_PUBLIC_ADMIN_URL}/schools`;
const getPrograms = async (nameTruong: string): Promise<Program[]> => {
  const res = await fetch(`${URL}/${nameTruong}/programs`);

  return res.json();
};
export default getPrograms;