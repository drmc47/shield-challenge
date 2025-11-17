import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../errors/CustomError";
import prisma from "../../lib/prisma";
import { CreateWalletInput } from "../../schemas/walletSchemas";

export async function listWallets(userId: string) {
  return prisma.wallet.findMany({ where: { userId } });
}

export async function addWallet(userId: string, data: CreateWalletInput) {
  const { chain: chainSlug, tag, address } = data;

  const chain = await prisma.chain.findUnique({
    where: { slug: chainSlug },
  });

  if (!chain) {
    throw new CustomError(`Chain ${chainSlug} does not exist`, StatusCodes.NOT_FOUND);
  }

  return prisma.wallet.create({
    data: { tag, address, userId, chainId: chain.id },
  });
}

export async function getWallet(userId: string, id: string) {
  const wallet = await prisma.wallet.findFirst({ where: { id, userId } });

  if (!wallet) {
    throw new CustomError("Wallet not found", StatusCodes.NOT_FOUND);
  }

  return wallet;
}

export async function modifyWallet(userId: string, id: string, data: CreateWalletInput) {
  const { chain: chainSlug, tag, address } = data;

  const wallet = await prisma.wallet.findFirst({
    where: { id, userId },
  });

  if (!wallet) {
    throw new CustomError("Wallet not found", StatusCodes.NOT_FOUND);
  }

  let chainId;
  if (chainSlug) {
    const chain = await prisma.chain.findUnique({
      where: { slug: chainSlug },
    });

    if (!chain) {
      throw new CustomError("Invalid chain", StatusCodes.NOT_FOUND);
    }

    chainId = chain.id;
  }

  const updated = await prisma.wallet.update({
    where: { id },
    data: { tag, address, chainId },
  });

  return updated;
}

export async function removeWallet(userId: string, id: string) {
  const wallet = await prisma.wallet.findFirst({ where: { id, userId } });

  if (!wallet) {
    throw new CustomError("Wallet not found", StatusCodes.NOT_FOUND);
  }
  await prisma.wallet.delete({ where: { id } });
}
