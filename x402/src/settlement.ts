import { PaymentReceipt, generateReceipt } from "./paymentReceipt";
import { X402PaymentRequest } from "./paymentRequest";

export interface SettlementResult {
  receipt: PaymentReceipt;
  status: "settled" | "pending";
}

export const settlePayment = (request: X402PaymentRequest, payer: string): SettlementResult => {
  const receipt = generateReceipt(request.id, payer, request.amount);
  return {
    receipt,
    status: "settled"
  };
};
