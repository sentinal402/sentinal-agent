import { ThreatModel } from "./threatModel";

export interface PatternMatch {
  id: string;
  description: string;
  confidence: number;
  tag: string;
}

const PATTERNS: Array<{ id: string; matcher: (m: ThreatModel) => boolean; tag: string; description: string }> = [
  {
    id: "delegatecall-chain",
    tag: "delegatecall-chain",
    description: "Nested delegatecalls or proxy chains detected",
    matcher: (m) => !!m.classification.notes?.some((n) => n.toLowerCase().includes("delegatecall"))
  },
  {
    id: "unknown-selector",
    tag: "phishing",
    description: "Unknown selector with value transfer",
    matcher: (m) => m.classification.action === "unknown" && parseFloat(m.tx.value) > 0
  }
];

export const detectPatterns = (model: ThreatModel): PatternMatch[] =>
  PATTERNS.filter((p) => p.matcher(model)).map((p) => ({
    id: p.id,
    description: p.description,
    confidence: 0.6,
    tag: p.tag
  }));
