import { School } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;

const getSchools = async (): Promise<School[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Lấy trường học thất bại");
  }

  return await res.json();
};

export default getSchools;
