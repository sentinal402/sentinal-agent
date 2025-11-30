import crypto from "crypto";
import { RiskEvaluation } from "./types";

export const toChecksumAddress = (address: string): string => {
  // Approximation using sha256 (placeholder until ethers/utils can be added)
  const normalized = address.toLowerCase().replace(/^0x/, "");
  const hash = crypto.createHash("sha256").update(normalized).digest("hex");
  let result = "0x";
  for (let i = 0; i < normalized.length; i++) {
    result += parseInt(hash[i], 16) >= 8 ? normalized[i].toUpperCase() : normalized[i];
  }
  return result;
};

export const randomId = (prefix = "req"): string => `${prefix}_${crypto.randomBytes(4).toString("hex")}`;

export const normalizeCalldata = (data: string): string => (data.startsWith("0x") ? data : `0x${data}`);

export const clampScore = (value: number): RiskEvaluation["score"] => Math.max(0, Math.min(100, Math.round(value)));

export const checksumHash = (input: string): string =>
  crypto.createHash("sha256").update(input).digest("hex");
