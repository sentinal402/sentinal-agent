Sentinel402
AI-Powered Transaction Security + x402 Deep-Scan Protocol

Sentinel402 is an AI-driven security layer that analyzes wallet signature requests before you approve them.
It detects malicious contracts, phishing transactions, abnormal spending patterns, and suspicious calldata in real time.

For deeper inspection, Sentinel402 integrates the x402 micro-payment protocol, enabling autonomous Deep Scans costing as little as $0.000402 with verifiable on-chain receipts.

Blind signing is dead.

🔥 Core Capabilities
1. Real-Time Signature Interception

Analyzes every signature request, including:

Approve() / Permit()

Swap and router paths

Bridge transactions

Raw calldata

Proxy and upgradeable contract flows

Delegatecall chains

Outputs:
Risk Score, Threat Tags, Reasoning, Recommended Action

2. AI Threat Engine

The AI subsystem evaluates:

malicious bytecode patterns

exploit signatures

suspicious call structures

address reputation graphs

phishing behavior

anomalous spending patterns

Modular design. Real inference models can be integrated later.

3. Deep Scan (x402 Micro-Payments)

Full forensic analysis including:

execution simulation

proxy + delegatecall tracing

state-change prediction

inheritance mapping

anomaly detection

threat severity scoring

Deep Scans generate:
402-Verified receipts + optional registry entries.

4. Privacy & Safety

Sentinel402 maintains strict boundaries:

no private key access

no user accounts

no data retention

stateless analysis

on-chain verifiable results

📁 Monorepo Structure
sentinel402/
  ├─ interceptor/          # Transaction interception & parsing
  ├─ ai-engine/            # Threat modeling & risk scoring
  ├─ deep-scan/            # Execution simulation & forensics
  ├─ x402/                 # Micro-payment & verification logic
  ├─ ui/                   # Web + Mobile dashboards
  ├─ common/               # Shared utilities & types
  ├─ contracts/            # 402Receipt + ScanRegistry contracts
  ├─ api/                  # REST endpoints
  └─ docs/                 # Technical documentation

🧱 Architecture Overview

Signature → Classification → AI Analysis → (Optional) Deep Scan → Receipt → Verification

Intercept signature request

Parse & classify transaction type

AI engine evaluates malicious patterns

Output risk score + detailed reasoning

Optional Deep Scan using x402 micro-payments

Produce complete forensic report

Verify using on-chain 402 receipt

🛠️ Development
Install
pnpm install
# or
npm install

Run API Server
cd api
pnpm dev

Run Web Dashboard
cd ui/web
pnpm dev

Compile Smart Contracts
cd contracts
npx hardhat compile

🧪 Testing
pnpm test

🔌 API Endpoints
Endpoint	Description
/classify	Returns risk score + threat tags
/scan	Runs full Deep Scan
/verify-402	Validates micro-payment receipts
/signature	Webhook for signature interception

See /docs/api-reference.md for detailed examples.

🔐 Smart Contracts

402Receipt.sol – emits Deep Scan receipts

ScanRegistry.sol – optional receipt registry

IReceipt.sol – shared interface for third-party integrations

Built with Hardhat.

📜 License

MIT License.

📌 Status

Sentinel402 is under active development.
Upcoming milestones include production-grade ML integrations, advanced simulation modules, and multi-chain Deep Scan routing.

Contributions welcome.

