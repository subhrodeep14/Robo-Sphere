import { NextApiRequest, NextApiResponse } from "next";
import {prismaClient} from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const users = await prismaClient.user.findMany();
    res.json(users);
  }
}
