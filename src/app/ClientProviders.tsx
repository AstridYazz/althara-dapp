"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig, createConfig } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import { http } from "wagmi";
import { ReactNode } from "react";

const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/" + process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
  },
});

const queryClient = new QueryClient();

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfig>
  );
}
