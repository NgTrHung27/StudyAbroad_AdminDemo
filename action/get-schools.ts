import { School } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_ADMIN_URL}/schools`;

const getSchools = async (): Promise<School[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getSchools;
