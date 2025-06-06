import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {prismaClient } from "../../../lib/prisma"

const handler = NextAuth({
  adapter: PrismaAdapter(prismaClient),
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ??"",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
  })
],
 secret: process.env.NEXTAUTH_SECRET,
});


export { handler as GET, handler as POST }