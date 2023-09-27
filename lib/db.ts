import { PrismaClient } from "@prisma/client";

declare global {
  var db: PrismaClient | undefined;
}

const client = globalThis.db || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.db = client;

export default client;
