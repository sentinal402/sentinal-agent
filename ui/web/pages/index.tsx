import React from "react";
import Link from "next/link";
import { RiskScore } from "../components/RiskScore";
import { ThreatTags } from "../components/ThreatTags";
import { WalletAlerts } from "../components/WalletAlerts";

const HomePage: React.FC = () => {
  const mockRisk = { score: 42, level: "medium" as const, tags: ["phishing", "delegatecall-chain"] };
  const alerts = [
    { id: "1", message: "Approval to unverified contract detected", severity: "critical" as const },
    { id: "2", message: "Deep scan recommended due to proxy chain", severity: "warn" as const }
  ];

  return (
    <main style={{ padding: "32px", fontFamily: "Inter, system-ui, -apple-system" }}>
      <h1>Sentinel402 Dashboard</h1>
      <p>AI-powered wallet security. Inspect every signature before it leaves the device.</p>

      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "1fr 1fr", marginTop: "24px" }}>
        <RiskScore score={mockRisk.score} level={mockRisk.level} />
        <ThreatTags tags={mockRisk.tags} />
      </div>

      <div style={{ marginTop: "24px" }}>
        <WalletAlerts alerts={alerts} />
      </div>

      <div style={{ marginTop: "32px" }}>
        <Link href="/scan">Run Deep Scan →</Link>
      </div>
    </main>
  );
};

export default HomePage;
