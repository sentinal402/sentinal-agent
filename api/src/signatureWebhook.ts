import { Request, Response } from "express";
import { interceptSignature } from "../../interceptor/src/interceptSignature";
import { InterceptRequest } from "../../interceptor/src/types";

export const handleSignatureWebhook = async (req: Request, res: Response): Promise<void> => {
  const payload = req.body as InterceptRequest;
  if (!payload?.rawCalldata || !payload?.txMeta) {
    res.status(400).json({ error: "invalid-payload" });
    return;
  }

  const result = await interceptSignature(payload);
  res.json(result);
};
