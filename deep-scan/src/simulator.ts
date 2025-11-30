import { TransactionMetadata, DeepScanResult } from "../../common/types";
import { traceDelegateCalls } from "./delegateCallMapper";
import { resolveProxies } from "./proxyResolver";
import { diffState } from "./stateDiff";

export interface SimulationOptions {
  forkUrl?: string;
  blockTag?: string | number;
}

export const simulateExecution = async (
  tx: TransactionMetadata,
  options: SimulationOptions = {}
): Promise<DeepScanResult> => {
  // Placeholder for actual EVM simulation; replace with anvil/foundry or hardhat network calls.
  const delegateCalls = traceDelegateCalls(tx.data);
  const proxies = resolveProxies(tx.to);
  const stateDiffs = diffState("0xprestate", "0xpoststate");

  return {
    receiptHash: `sim-${tx.nonce ?? 0}-${tx.to}`,
    stateDiffs,
    delegateCalls,
    proxies,
    anomalies: [],
    summary: `Simulated with fork=${options.forkUrl ?? "none"} blockTag=${options.blockTag ?? "latest"}`
  };
};
