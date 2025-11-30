import config from "./modelConfig.json";
import { ThreatModel } from "./threatModel";
import { detectPatterns } from "./patternDetection";
import { embedText, similarity } from "./embeddings";
import { clampScore } from "../../common/utils";
import { RiskEvaluation, RiskBreakdown, ThreatTag } from "../../common/types";
import { WARNING_THRESHOLD, CRITICAL_THRESHOLD, SAFE_THRESHOLD } from "../../common/constants";

interface RiskOptions {
  includePatterns?: boolean;
}

const { riskWeights } = config;

export const evaluateRisk = async (model: ThreatModel, options: RiskOptions = {}): Promise<RiskEvaluation> => {
  const heuristicScore = Object.values(model.heuristics).reduce((sum, val) => sum + val, 0) * 100;
  const patterns = options.includePatterns ? detectPatterns(model) : [];
  const patternScore = patterns.length ? patterns.length * 10 : 0;

  // Cheap semantic similarity placeholder to flag repeated narratives
  const narrativeEmbedding = embedText(model.narrative.join(" "));
  const baseline = embedText("benign approval transfer");
  const mlScore = (1 - similarity(narrativeEmbedding, baseline)) * 100;

  const weighted =
    heuristicScore * riskWeights.heuristics +
    patternScore * riskWeights.patterns +
    mlScore * riskWeights.ml;

  const breakdown: RiskBreakdown = {
    heuristics: clampScore(heuristicScore),
    patterns: clampScore(patternScore),
    ml: clampScore(mlScore),
    notes: patterns.map((p) => p.description)
  };

  const score = clampScore(weighted);
  const level: RiskEvaluation["level"] =
    score >= CRITICAL_THRESHOLD ? "critical" : score >= WARNING_THRESHOLD ? "high" : score >= SAFE_THRESHOLD ? "medium" : "low";

  const tags: ThreatTag[] = patterns.map((p) => p.tag as ThreatTag);
  if (!tags.length && level === "low") {
    tags.push("benign");
  }

  return {
    score,
    level,
    tags,
    breakdown
  };
};
