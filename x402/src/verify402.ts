import { PaymentReceipt } from "./paymentReceipt";
import { checksumHash } from "../../common/utils";

export interface VerificationResult {
  verified: boolean;
  verificationHash: string;
  reason?: string;
}

export const verify402Receipt = (receipt: PaymentReceipt, expectedAmount: number): VerificationResult => {
  if (receipt.amount !== expectedAmount) {
    return { verified: false, verificationHash: "", reason: "amount-mismatch" };
  }
  const verificationHash = checksumHash(`${receipt.requestId}:${receipt.payer}:${receipt.amount}:${receipt.timestamp}`);
  return { verified: true, verificationHash };
};
