# Deep Scan

The deep scan orchestrator simulates execution and aggregates signals:
- **Simulator**: placeholder for EVM fork simulation.
- **Delegatecall Mapper**: traces delegatecall chains.
- **Proxy Resolver**: maps proxies to implementations.
- **State Diff**: compares state roots before/after.

### Workflow
1. Receive transaction metadata.
2. Run `simulateExecution` with optional fork URL/block tag.
3. Collect delegatecalls, proxies, anomalies.
4. Return `DeepScanResult` for UI/API.

### Future Work
- Integrate anvil/Hardhat node for real bytecode execution.
- Capture storage slot reads/writes for taint tracking.
- Persist scan reports to `ScanRegistry`.
