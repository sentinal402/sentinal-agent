import crypto from "crypto";
import { DEFAULT_EMBEDDING_DIM } from "../../common/constants";

export interface EmbeddingVector {
  values: number[];
  hash: string;
}

export const embedText = (text: string, dimension = DEFAULT_EMBEDDING_DIM): EmbeddingVector => {
  const hash = crypto.createHash("sha256").update(text).digest("hex");
  const values = Array.from({ length: dimension }, (_, idx) => {
    const slice = hash.slice((idx % hash.length), (idx % hash.length) + 4);
    return (parseInt(slice, 16) % 1000) / 1000;
  });

  return {
    values,
    hash
  };
};

export const similarity = (a: EmbeddingVector, b: EmbeddingVector): number => {
  const numerator = a.values.reduce((sum, val, idx) => sum + val * b.values[idx], 0);
  const denomA = Math.sqrt(a.values.reduce((sum, val) => sum + val * val, 0));
  const denomB = Math.sqrt(b.values.reduce((sum, val) => sum + val * val, 0));
  return denomA && denomB ? numerator / (denomA * denomB) : 0;
};
