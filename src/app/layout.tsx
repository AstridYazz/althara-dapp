import type { Metadata } from "next";
import { WagmiConfig, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sepolia } from "@wagmi/core/chains";
import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Althara Pacta - Decentralized Government Tenders",
  description: "A transparent and corruption-free system for government tenders and bids built on blockchain technology.",
};

const config = createConfig({
  chains: [sepolia],
  providers: [jsonRpcProvider({ rpc: () => ({ http: process.env.SEPOLIA_RPC_URL || "" }) })],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig config={config}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}

