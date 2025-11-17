import { Request, Response, NextFunction } from "express";
import { listWallets, addWallet, getWallet, modifyWallet, removeWallet } from "./wallet.service";
// import { CustomError } from "../../errors/CustomError";
import { StatusCodes } from "http-status-codes";

export const getWallets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const wallets = await listWallets(req.user!.id);
    res.json(wallets);
  } catch (err) {
    next(err);
  }
};

export const createWallet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const wallet = await addWallet(req.user!.id, req.body);
    res.status(StatusCodes.CREATED).json(wallet);
  } catch (err) {
    next(err);
  }
};

export const getWalletById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const wallet = await getWallet(req.user!.id, req.params.id);
    res.json(wallet);
  } catch (err) {
    next(err);
  }
};

export const updateWallet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const wallet = await modifyWallet(req.user!.id, req.params.id, req.body);
    res.json(wallet);
  } catch (err) {
    next(err);
  }
};

export const deleteWallet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await removeWallet(req.user!.id, req.params.id);
    res.json({ message: "Wallet deleted" }).status(StatusCodes.NO_CONTENT);
  } catch (err) {
    next(err);
  }
};
