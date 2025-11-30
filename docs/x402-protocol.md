# x402 Protocol

x402 implements HTTP 402-like micro-payments for gated deep scans.

## Flow
1. Client requests deep scan; server replies with `x-402-request` header and pricing tier.
2. Client settles the micro-fee (off-chain or L2) and obtains a receipt hash.
3. Server verifies receipt via `verify402Receipt` and proceeds with scan.

## Receipt Format
```json
{
  "requestId": "string",
  "payer": "0xabc",
  "amount": 25,
  "hash": "sha256",
  "timestamp": 1700000000
}
```

## Verification
`verificationHash = sha256(requestId:payer:amount:timestamp)`

## Pricing
- lite: 10
- standard: 25
- deep: 50

Receipts can be anchored on-chain via `402Receipt.sol` and tracked in `ScanRegistry.sol`.
