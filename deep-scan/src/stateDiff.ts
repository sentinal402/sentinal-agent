export const diffState = (beforeRoot: string, afterRoot: string): Array<{ slot: string; before: string; after: string }> => {
  if (beforeRoot === afterRoot) {
    return [];
  }
  return [
    { slot: "0x0", before: beforeRoot, after: afterRoot }
  ];
};
