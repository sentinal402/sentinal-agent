import { Request, Response } from "express";
import { classifyTransaction } from "../../interceptor/src/classifyTransaction";
import { TransactionMetadata } from "../../common/types";

export const handleClassify = (req: Request, res: Response): void => {
  const tx = req.body as TransactionMetadata;
  if (!tx?.data || !tx?.to) {
    res.status(400).json({ error: "invalid-transaction" });
    return;
  }

  const classification = classifyTransaction(tx.data, tx);
  res.json(classification);
};
