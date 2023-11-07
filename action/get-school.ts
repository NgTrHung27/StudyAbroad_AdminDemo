import { School } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_ADMIN_URL}/schools`;

const getSchool = async (nameTruong: string): Promise<School> => {
  const res = await fetch(`${URL}/${nameTruong}`);

  return res.json();
};

export default getSchool;
