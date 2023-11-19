import { News } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/news`;

const getNewsById = async (newsId: string): Promise<News> => {
  const res = await fetch(`${URL}/${newsId}`);

  return res.json();
};
export default getNewsById;
