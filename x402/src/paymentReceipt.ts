import crypto from "crypto";

export interface PaymentReceipt {
  requestId: string;
  payer: string;
  amount: number;
  hash: string;
  timestamp: number;
}

export const generateReceipt = (requestId: string, payer: string, amount: number): PaymentReceipt => {
  const timestamp = Date.now();
  const hash = crypto.createHash("sha256").update(`${requestId}:${payer}:${amount}:${timestamp}`).digest("hex");

  return {
    requestId,
    payer,
    amount,
    hash,
    timestamp
  };
};
