import { evaluateRisk } from "../../ai-engine/src/riskScoring";
import { buildThreatModel } from "../../ai-engine/src/threatModel";
import { classifyTransaction } from "./classifyTransaction";
import { InterceptRequest, InterceptResponse } from "./types";
import { logger } from "../../common/logging";
import { randomId } from "../../common/utils";

export const interceptSignature = async (request: InterceptRequest): Promise<InterceptResponse> => {
  const requestId = randomId("intercept");
  logger.info("Intercepting signature", { requestId, to: request.txMeta.to });

  const classification = classifyTransaction(request.rawCalldata, request.txMeta);
  const threatModel = buildThreatModel(request.txMeta, classification);
  const risk = await evaluateRisk(threatModel, { includePatterns: true });

  logger.info("Risk evaluation complete", { requestId, risk: risk.score, level: risk.level });

  return {
    requestId,
    classification,
    risk,
    forwarded: !request.dryRun
  };
};
