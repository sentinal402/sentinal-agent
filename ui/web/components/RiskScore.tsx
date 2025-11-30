import React from "react";

type Props = { score: number; level: "low" | "medium" | "high" | "critical" };

const levelColor: Record<Props["level"], string> = {
  low: "#16a34a",
  medium: "#fbbf24",
  high: "#f97316",
  critical: "#ef4444"
};

export const RiskScore: React.FC<Props> = ({ score, level }) => (
  <div style={{ border: `2px solid ${levelColor[level]}`, padding: "12px", borderRadius: "12px" }}>
    <div style={{ fontSize: "14px", color: "#555" }}>Risk Score</div>
    <div style={{ fontSize: "28px", fontWeight: 700 }}>{score}/100</div>
    <div style={{ color: levelColor[level], fontWeight: 600, textTransform: "uppercase" }}>{level}</div>
  </div>
);
