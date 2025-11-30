import { RiskEvaluation, TransactionMetadata } from "../../common/types";

export interface InterceptRequest {
  rawCalldata: string;
  txMeta: TransactionMetadata;
  origin?: string;
  dryRun?: boolean;
}

export interface TransactionClassification {
  action: string;
  targetContract: string;
  tokenSymbols: string[];
  confidence: number;
  notes?: string[];
}

export interface InterceptResponse {
  requestId: string;
  classification: TransactionClassification;
  risk: RiskEvaluation;
  forwarded: boolean;
}
