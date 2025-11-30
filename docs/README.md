# Sentinel402

Sentinel402 is an AI-powered wallet security layer that classifies transactions before signature, runs optional deep scans, and verifies micro-payments using the x402 protocol.

## Modules
- **Interceptor**: hooks wallet signature flows, classifies calldata, and requests AI evaluation.
- **AI Engine**: heuristic + pattern + embedding pipeline for risk scoring.
- **Deep Scan**: simulation scaffold for delegatecall/proxy tracing and state diffing.
- **x402**: HTTP-402 style micro-payment flow with verifiable receipts.
- **API**: REST surface for classification, deep scans, 402 verification, and signature webhooks.
- **UI**: Next.js dashboard to visualize scores, alerts, and scan results.

## Quick Start
1. Install dependencies: `npm install`
2. Run API dev server: `npm --workspace api run dev`
3. Run web: `npm --workspace ui/web run dev`
4. Compile contracts: `npm --workspace contracts run build`

Each package is isolated but shares TypeScript types via the `common` folder.
