export interface PricingTier {
  name: string;
  microFee: number; // in wei equivalent for the 402 micro-payment
  description: string;
}

export const PRICING_TABLE: PricingTier[] = [
  { name: "lite", microFee: 10, description: "Lightweight classification" },
  { name: "standard", microFee: 25, description: "Classification + heuristic scan" },
  { name: "deep", microFee: 50, description: "Deep simulation and forensic trace" }
];

export const resolvePricing = (tierName = "standard"): PricingTier =>
  PRICING_TABLE.find((t) => t.name === tierName) ?? PRICING_TABLE[1];
