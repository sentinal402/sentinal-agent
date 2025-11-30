# Sentinel402

> **AI-powered transaction security with x402 deep-scan verification.**

Sentinel402 is an advanced transaction-security layer that analyzes wallet signature requests *before* they are approved.  
It detects malicious contracts, phishing attempts, abnormal spending patterns, and suspicious calldata in real time.

The protocol integrates the **x402 Payment Required** standard to enable autonomous micro-payments for full forensic Deep Scans, generating on-chain **402-Verified receipts**.

Sentinel402 is designed to eliminate blind-signing and bring structural security to the Web3 signature layer.

---

## Table of Contents

- [Overview](#overview)
- [Core Capabilities](#core-capabilities)
- [Architecture](#architecture)
- [Monorepo Structure](#monorepo-structure)
- [Development](#development)
- [API Endpoints](#api-endpoints)
- [Smart Contracts](#smart-contracts)
- [Status](#status)
- [License](#license)

---

## Overview

Sentinel402 protects users by analyzing every signature request and returning:

- A **Risk Score (0–100)**
- Threat tags
- Behavioral reasoning
- Recommended action
- Optional Deep Scan results

Deep Scan uses x402 micro-payments (~$0.000402) to run:

- contract execution simulation
- proxy/delegatecall tracing
- inheritance mapping
- abnormal-behavior detection
- threat modeling and severity scoring

---

## Core Capabilities

### 🔍 1. Real-Time Signature Interception
Detects risk across:

- `approve()`
- `permit()`
- swap / router interactions
- bridge flows
- raw calldata
- proxy + upgradeable contracts
- delegatecall paths

Returns structured threat metadata for every transaction.

---

### 🧠 2. AI Threat Engine
Evaluates:

- malicious bytecode patterns  
- known exploit signatures  
- suspicious behavioral flows  
- anomalous spending patterns  
- phishing-style transactions  
- address reputation graphs  

Modular design.  
Supports future ML inference upgrades.

---

### 🛰️ 3. Deep Scan (x402 Micro-Payments)

**Deep Scan performs:**

- execution simulation  
- delegatecall mapping  
- proxy resolution  
- state-change prediction  
- inheritance analysis  
- anomaly detection  
- threat severity scoring  

Outputs:  
✔ **402-Verified receipt**  
✔ Optional registry entry on-chain

---

### 🔒 4. Privacy & Safety

Sentinel402 operates with strict boundaries:

- No private-key access  
- No user accounts  
- No centralized logging  
- No metadata retention  
- Stateless risk analysis  
- On-chain verifiable results  

---

## Architecture

Signature → Classification → AI Analysis → (Optional) Deep Scan → Receipt → Verification

yaml
Copy code

1. Intercept signature request  
2. Parse & classify transaction type  
3. Run AI-based threat detection  
4. Produce risk score + reasoning  
5. Optionally run Deep Scan via x402  
6. Produce forensic report  
7. Verify using on-chain 402 receipt  

---

## Monorepo Structure

sentinel402/
├─ interceptor/ # Transaction parsing & interception
├─ ai-engine/ # Threat modeling, risk scoring
├─ deep-scan/ # Simulation & forensic analysis
├─ x402/ # Micro-payment & verification
├─ ui/ # Web + Mobile frontends
├─ common/ # Shared utilities & types
├─ contracts/ # Receipt + registry contracts
├─ api/ # REST API endpoints
└─ docs/ # Technical documentation

yaml
Copy code

---

## Development

### 📦 Install

```bash
pnpm install
# or
npm install
🚀 Run API
bash
Copy code
cd api
pnpm dev
💻 Run Web Dashboard
bash
Copy code
cd ui/web
pnpm dev
🧱 Compile Smart Contracts
bash
Copy code
cd contracts
npx hardhat compile
API Endpoints
Endpoint	Description
/classify	Risk score + threat tags
/scan	Full Deep Scan
/verify-402	Validate x402 micro-payment receipt
/signature	Signature interception webhook

Detailed documentation in /docs/api-reference.md.
