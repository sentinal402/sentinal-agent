import React from "react";

type Props = { tags: string[] };

export const ThreatTags: React.FC<Props> = ({ tags }) => (
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    {tags.map((tag) => (
      <span key={tag} style={{ padding: "6px 10px", borderRadius: "8px", background: "#0f172a", color: "#e2e8f0" }}>
        {tag}
      </span>
    ))}
    {!tags.length && <span style={{ color: "#9ca3af" }}>No threats detected</span>}
  </div>
);
