import { TransactionMetadata } from "../../common/types";
import { TransactionClassification } from "../../interceptor/src/types";

export interface ThreatModel {
  tx: TransactionMetadata;
  classification: TransactionClassification;
  heuristics: Record<string, number>;
  narrative: string[];
}

export const buildThreatModel = (
  tx: TransactionMetadata,
  classification: TransactionClassification
): ThreatModel => {
  const heuristics: Record<string, number> = {
    highValueTransfer: parseFloat(tx.value) > 0 ? 0.25 : 0,
    unknownFunction: classification.action === "unknown" ? 0.35 : 0,
    proxyTarget: classification.targetContract.endsWith("proxy") ? 0.2 : 0
  };

  const narrative: string[] = [
    `Action: ${classification.action}`,
    `Target: ${classification.targetContract}`,
    classification.notes?.join("; ") ?? ""
  ].filter(Boolean);

  return {
    tx,
    classification,
    heuristics,
    narrative
  };
};
