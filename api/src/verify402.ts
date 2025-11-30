import { Request, Response } from "express";
import { verify402Receipt } from "../../x402/src/verify402";
import { PaymentReceipt } from "../../x402/src/paymentReceipt";

export const handleVerify402 = (req: Request, res: Response): void => {
  const { receipt, expectedAmount } = req.body as { receipt: PaymentReceipt; expectedAmount: number };
  if (!receipt) {
    res.status(400).json({ error: "missing-receipt" });
    return;
  }
  const result = verify402Receipt(receipt, expectedAmount ?? receipt.amount);
  res.json(result);
};
