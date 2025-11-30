export const traceDelegateCalls = (calldata: string): string[] => {
  // Stand-in for tracing delegatecall opcodes during simulation.
  if (calldata.includes("delegatecall")) {
    return ["0xdelegatee0000000000000000000000000000"];
  }
  return [];
};
