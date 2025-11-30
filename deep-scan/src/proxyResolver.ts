const MOCK_PROXY_REGISTRY = new Set(["0xproxy000000000000000000000000000000"]);

export const resolveProxies = (address: string): string[] => {
  if (MOCK_PROXY_REGISTRY.has(address.toLowerCase())) {
    return [address, "0ximplementation0000000000000000000000"];
  }
  return [];
};
