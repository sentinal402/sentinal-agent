import crypto from "crypto";
import { resolvePricing } from "./pricing";

export interface X402PaymentRequest {
  id: string;
  tier: string;
  amount: number;
  callbackUrl: string;
  headers: Record<string, string>;
}

export const createPaymentRequest = (tier = "standard", callbackUrl = ""): X402PaymentRequest => {
  const pricing = resolvePricing(tier);
  const id = crypto.randomBytes(6).toString("hex");

  return {
    id,
    tier: pricing.name,
    amount: pricing.microFee,
    callbackUrl,
    headers: {
      "x-402-request": id,
      "x-402-tier": pricing.name
    }
  };
};
