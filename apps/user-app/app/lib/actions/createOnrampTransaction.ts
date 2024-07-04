"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(
  provider: string,
  amount: number
) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  if(!userId){
    return {
      message:"UnAuthorized User"
    }
  }
  const token = Math.random().toString()
  await prisma.onRampTransaction.create({
    data:{
      amount:amount,
      provider:provider,
      userId:Number(userId),
      status:"Processing",
      startTime:new Date(),
      token:token

    }
  })

  return {
    message:"On Ramp Transaction is Added"
  }
}
