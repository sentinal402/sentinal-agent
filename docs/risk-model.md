# Risk Model

## Inputs
- Transaction metadata (from/to/value/data/nonce/chainId)
- Classification (function selector, target contract, token symbols)
- Heuristics (value transfer, unknown selector, proxy markers)
- Pattern detection (delegatecall chains, proxy upgrade paths)
- Embedding similarity between action narrative and benign baseline

## Scoring
`score = heuristics * w_h + patterns * w_p + ml * w_ml`

Levels:
- `<25`: low
- `25-59`: medium
- `60-84`: high
- `85+`: critical

## Extending
- Add anomaly detectors (reentrancy, approval-to-EOA).
- Train embeddings on curated malicious calldata corpora.
- Persist feedback loops from confirmed incidents to reweight heuristics.
