import { normalizeCalldata } from "../../common/utils";
import { TransactionMetadata } from "../../common/types";
import { TransactionClassification } from "./types";

const KNOWN_METHODS: Record<string, string> = {
  "0xa9059cbb": "erc20.transfer",
  "0x095ea7b3": "erc20.approve",
  "0x23b872dd": "erc20.transferFrom",
  "0x42842e0e": "erc721.safeTransferFrom"
};

export const classifyTransaction = (calldata: string, txMeta: TransactionMetadata): TransactionClassification => {
  const normalized = normalizeCalldata(calldata);
  const selector = normalized.slice(0, 10);
  const action = KNOWN_METHODS[selector] ?? "unknown";
  const tokenSymbols = action.startsWith("erc20") ? ["ERC20"] : [];

  return {
    action,
    targetContract: txMeta.to,
    tokenSymbols,
    confidence: action === "unknown" ? 0.4 : 0.85,
    notes: action === "unknown" ? ["Unrecognized function selector"] : []
  };
};
