import { School } from "@prisma/client";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/schools`;

const getSchools = async (): Promise<School[]> => {
  const res = await fetch(URL, {next: {tags: ["school"]}});

  return await res.json();
};

export default getSchools;
