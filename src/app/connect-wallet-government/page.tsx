
"use client";

import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain, type Connector } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import Link from "next/link";

export default function ConnectWallet() {
  const { isConnected, address, chainId } = useAccount();
  const { connect, connectors, error: connectError } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);

  useEffect(() => {
    if (isConnected && chainId) {
      setIsCorrectNetwork(chainId === sepolia.id);
    }
  }, [isConnected, chainId]);

  const handleConnect = async (connector: Connector) => {
    try {
      await connect({ connector });
    } catch (error) {
      console.error("Connection error:", error);
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Connect Your Wallet</h1>
        {!isConnected ? (
          <>
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => handleConnect(connector)}
                className={`w-full py-2 px-4 mb-2 rounded ${
                  !connector.ready
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
                disabled={!connector.ready}
              >
                Connect with {connector.name}
              </button>
            ))}
            {connectError && (
              <p className="text-red-500 text-center mt-2">{connectError.message}</p>
            )}
          </>
        ) : (
          <>
            <p className="text-center mb-4">Connected: {address}</p>
            {!isCorrectNetwork && (
              <button
                onClick={handleSwitchNetwork}
                className="w-full py-2 px-4 mb-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Switch to Sepolia
              </button>
            )}
            <button
              onClick={() => disconnect()}
              className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Disconnect
            </button>
            <div className="mt-4 text-center">
              <Link href="/" className="text-blue-500 hover:underline">
                Go to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}