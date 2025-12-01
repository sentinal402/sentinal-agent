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

  // December 2025: add debug print for test
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug(`[createPaymentRequest] Created ID: ${id}`);
  }

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
