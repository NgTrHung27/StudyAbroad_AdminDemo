import { Operation } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;

const getOperation = async (nameTruong: string): Promise<Operation[]> => {
  const res = await fetch(`${URL}/${nameTruong}/operations`);
  if(!res.ok)
  {
    throw new Error("Lấy cơ sở thất bại ");
  }
  return res.json();
};
export default getOperation;