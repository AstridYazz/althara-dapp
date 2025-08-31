
"use client";

import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain, type Connector } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Image from "next/image";

// Disable SSR for this component to avoid wagmi serialization issues
const ConnectWalletComponent = () => {
  const { isConnected, address, chainId } = useAccount();
  const { connect, connectors, error: connectError } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    if (isConnected && chainId) {
      setIsCorrectNetwork(chainId === sepolia.id);
    }
  }, [isConnected, chainId]);

  const handleConnect = async (connector: Connector) => {
    if (isConnecting) return; // Prevent multiple clicks
    
    try {
      setIsConnecting(true);
      await connect({ connector });
    } catch (error) {
      console.error("Connection error:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSwitchNetwork = async () => {
    try {
      await switchChain({ chainId: sepolia.id });
    } catch (error) {
      console.error("Network switch error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header with Logo */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Image 
                src="/althara pacta logo.png" 
                alt="Althara Pacta" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-white">Althara Pacta</h1>
              <p className="text-blue-100 text-sm">Government Portal</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">Connect Your Wallet</h2>
          <p className="text-blue-100 mt-2">Access the transparent tendering platform</p>
        </div>

        {/* Wallet Connection Section */}
        <div className="p-6">
          {!isConnected ? (
            <>
              <div className="space-y-3 mb-6">
                <ConnectButton />
              </div>
              
              {connectError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-600 text-sm text-center">{connectError.message}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wallet Connected!</h3>
                <p className="text-gray-600 text-sm font-mono bg-gray-100 rounded-lg p-2 break-all">
                  {address}
                </p>
              </div>

              {!isCorrectNetwork && (
                <button
                  onClick={handleSwitchNetwork}
                  className="w-full py-3 px-6 mb-4 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 active:bg-yellow-700 transition-colors cursor-pointer select-none"
                >
                  Switch to Sepolia Network
                </button>
              )}

              <div className="space-y-3">
                <button
                  onClick={() => disconnect()}
                  className="w-full py-3 px-6 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 active:bg-red-700 transition-colors cursor-pointer select-none"
                >
                  Disconnect Wallet
                </button>
                <Link 
                  href="/government-dashboard" 
                  className="block w-full py-3 px-6 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors text-center select-none"
                >
                  → Government Dashboard
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletComponent;