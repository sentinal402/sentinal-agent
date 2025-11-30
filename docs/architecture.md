# Architecture

Sentinel402 is a monorepo with layered security components:

- **Interceptor** (wallet-adjacent) parses calldata and collects metadata for evaluation.
- **AI Engine** scores risk using heuristics, pattern detection, and lightweight embeddings.
- **Deep Scan** simulates execution to trace delegatecalls, proxies, and state diffs.
- **x402 Protocol** gates expensive scans with micro-fee receipts and verifiable hashes.
- **API** exposes REST endpoints to integrate with wallets and backends.
- **UI** provides operator-facing dashboards.

## Data Flow
1. Wallet posts `/signature` with calldata and metadata.
2. Interceptor classifies the transaction and builds a threat model.
3. AI Engine evaluates risk; if score exceeds thresholds, Deep Scan is suggested or triggered.
4. Optional x402 micro-payment validates access; receipt hash is generated and can be anchored on-chain.
5. Responses include risk score, threat tags, and deep scan results for user confirmation.

## Integration Points
- Replace embedding generator with a hosted model provider.
- Swap simulation engine with Hardhat/Foundry or remote sandbox.
- Store receipts and scan hashes in `ScanRegistry` for auditing.
