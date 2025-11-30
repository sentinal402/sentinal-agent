import { TransactionMetadata, DeepScanResult } from "../../common/types";
import { simulateExecution, SimulationOptions } from "./simulator";

export const runDeepScan = async (
  tx: TransactionMetadata,
  options: SimulationOptions = {}
): Promise<DeepScanResult> => {
  const simulation = await simulateExecution(tx, options);
  const anomalies = [
    ...simulation.anomalies,
    ...simulation.delegateCalls.map((d) => `Delegatecall observed to ${d}`)
  ];

  return {
    ...simulation,
    anomalies,
    summary: `${simulation.summary}; delegateCalls=${simulation.delegateCalls.length} proxies=${simulation.proxies.length}`
  };
};
