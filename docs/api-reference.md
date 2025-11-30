# API Reference

## POST /scan
Request: `TransactionMetadata` payload.  
Response: `DeepScanResult` with delegateCalls, proxies, anomalies, receiptHash.

## POST /classify
Request: `TransactionMetadata`.  
Response: `TransactionClassification` (action, targetContract, tokenSymbols, confidence).

## POST /verify-402
Request: `{ receipt: PaymentReceipt, expectedAmount?: number }`.  
Response: `{ verified: boolean, verificationHash: string, reason?: string }`.

## POST /signature
Webhook for wallet signature interception.  
Request: `InterceptRequest` with rawCalldata + txMeta.  
Response: `InterceptResponse` with requestId, classification, risk, forwarded.

All endpoints return JSON and expect `application/json` content type.
