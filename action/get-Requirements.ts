import { Requirement } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;

const getRequirements = async (nameTruong: string): Promise<Requirement[]> => {
  const res = await fetch(`${URL}/${nameTruong}/requirements`);
  if(!res.ok)
  {
    throw new Error("Lấy yêu cầu thất bại");
  }
  
  return res.json();
};
export default getRequirements;