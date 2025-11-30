export type ThreatTag =
  | "phishing"
  | "rugpull"
  | "suspicious-owner"
  | "high-fee"
  | "delegatecall-chain"
  | "proxy-upgrade"
  | "benign";

export interface RiskBreakdown {
  heuristics: number;
  patterns: number;
  ml: number;
  notes: string[];
}

export interface RiskEvaluation {
  score: number; // 0 (safe) -> 100 (critical)
  level: "low" | "medium" | "high" | "critical";
  tags: ThreatTag[];
  breakdown: RiskBreakdown;
}

export interface TransactionMetadata {
  from: string;
  to: string;
  value: string;
  data: string;
  chainId: number;
  nonce?: number;
  gas?: string;
}

export interface DeepScanResult {
  receiptHash: string;
  stateDiffs: Array<{ slot: string; before: string; after: string }>;
  delegateCalls: string[];
  proxies: string[];
  anomalies: string[];
  summary: string;
}
