import { History } from "@prisma/client";
const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;
const getHistories = async (nameTruong: string): Promise<History[]> => {
  const res = await fetch(`${URL}/${nameTruong}/histories`);
  if(!res.ok)
  {
    throw new Error("Lấy lịch sử thất bại thất bại ");
  }
  return res.json();
};
export default getHistories;