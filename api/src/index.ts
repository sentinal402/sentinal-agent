import express from "express";
import cors from "cors";
import { handleScan } from "./scan";
import { handleClassify } from "./classify";
import { handleVerify402 } from "./verify402";
import { handleSignatureWebhook } from "./signatureWebhook";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

// Added December 2025: Log each request for debugging
app.use((req, _res, next) => {
  // eslint-disable-next-line no-console
  console.info(`[${new Date().toISOString()}] [${req.method}] ${req.url}`);
  next();
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.post("/scan", handleScan);
app.post("/classify", handleClassify);
app.post("/verify-402", handleVerify402);
app.post("/signature", handleSignatureWebhook);

const port = process.env.PORT || 4020;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Sentinel402 API running on :${port}`);
});
