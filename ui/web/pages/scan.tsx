import React from "react";
import { ScanResults } from "../components/ScanResults";
import { RiskScore } from "../components/RiskScore";
import { ThreatTags } from "../components/ThreatTags";

const ScanPage: React.FC = () => {
  const result = {
    delegateCalls: ["0xdelegatee0000000000000000000000000000"],
    proxies: ["0xproxy000000000000000000000000000000"],
    anomalies: ["High gas usage detected"]
  };

  return (
    <main style={{ padding: "32px", fontFamily: "Inter, system-ui, -apple-system" }}>
      <h1>Deep Scan</h1>
      <p>Orchestrate full-stack forensic scans before finalizing a signature.</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginTop: "24px" }}>
        <RiskScore score={78} level="high" />
        <ThreatTags tags={["delegatecall-chain", "proxy-upgrade"]} />
      </div>

      <div style={{ marginTop: "24px" }}>
        <ScanResults delegateCalls={result.delegateCalls} proxies={result.proxies} anomalies={result.anomalies} />
      </div>
    </main>
  );
};

export default ScanPage;
