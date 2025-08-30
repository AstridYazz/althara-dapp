import { defineConfig } from "@wagmi/core";
import { sepolia } from "@wagmi/core/chains";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

export const config = defineConfig({
  chains: [sepolia],
  providers: [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      }),
    }),
  ],
});