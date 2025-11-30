import React from "react";

type Alert = { id: string; message: string; severity: "info" | "warn" | "critical" };
type Props = { alerts: Alert[] };

const severityColor: Record<Alert["severity"], string> = {
  info: "#2563eb",
  warn: "#f59e0b",
  critical: "#dc2626"
};

export const WalletAlerts: React.FC<Props> = ({ alerts }) => (
  <div>
    <h3>Alerts</h3>
    {alerts.length === 0 && <div style={{ color: "#9ca3af" }}>No alerts</div>}
    {alerts.map((alert) => (
      <div
        key={alert.id}
        style={{
          borderLeft: `4px solid ${severityColor[alert.severity]}`,
          padding: "8px 12px",
          marginBottom: "8px",
          background: "#f8fafc"
        }}
      >
        <strong style={{ color: severityColor[alert.severity] }}>{alert.severity.toUpperCase()}</strong> {alert.message}
      </div>
    ))}
  </div>
);
