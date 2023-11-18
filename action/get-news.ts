import { News } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/news`;

const getNews = async (): Promise<News[]> => {
  const res = await fetch(`${URL}`);

  return res.json();
};
export default getNews;
