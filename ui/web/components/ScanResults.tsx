import React from "react";

type Props = {
  delegateCalls: string[];
  proxies: string[];
  anomalies: string[];
};

const Section: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div style={{ marginBottom: "12px" }}>
    <div style={{ fontWeight: 700 }}>{title}</div>
    {items.length ? (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      <div style={{ color: "#9ca3af" }}>None</div>
    )}
  </div>
);

export const ScanResults: React.FC<Props> = ({ delegateCalls, proxies, anomalies }) => (
  <div style={{ padding: "12px", border: "1px solid #e5e7eb", borderRadius: "10px" }}>
    <h3>Deep Scan</h3>
    <Section title="Delegate Calls" items={delegateCalls} />
    <Section title="Proxies" items={proxies} />
    <Section title="Anomalies" items={anomalies} />
  </div>
);
