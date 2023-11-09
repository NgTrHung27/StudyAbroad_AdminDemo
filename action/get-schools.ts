import { School } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;

const getSchools = async (): Promise<School[]> => {
  const res = await fetch(URL);

  return await res.json();
};
export default getSchools;