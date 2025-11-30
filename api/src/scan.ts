import { Request, Response } from "express";
import { runDeepScan } from "../../deep-scan/src/scanOrchestrator";
import { TransactionMetadata } from "../../common/types";

export const handleScan = async (req: Request, res: Response): Promise<void> => {
  const tx = req.body as TransactionMetadata;
  if (!tx?.to || !tx?.data) {
    res.status(400).json({ error: "invalid-transaction" });
    return;
  }

  const result = await runDeepScan(tx, { forkUrl: process.env.RPC_URL });
  res.json(result);
};
