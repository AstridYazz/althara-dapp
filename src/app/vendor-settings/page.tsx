"use client";

import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import Link from "next/link";
import Image from "next/image";

export default function VendorSettings() {
  const { isConnected, address, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const [vendorData, setVendorData] = useState<any>(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);

  useEffect(() => {
    if (isConnected && address) {
      setIsCorrectNetwork(chainId === sepolia.id);
      // Get vendor data from localStorage
      const storedData = localStorage.getItem(`vendor_${address}`);
      if (storedData) {
        setVendorData(JSON.parse(storedData));
      }
    }
  }, [isConnected, address, chainId]);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Connected</h2>
          <p className="text-gray-600 mb-6">Please connect your wallet to access vendor settings.</p>
          <Link 
            href="/connect-wallet-vendor" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Connect Wallet
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Image 
                  src="/althara pacta logo.png" 
                  alt="Althara Pacta" 
                  width={32} 
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Vendor Settings</h1>
                <p className="text-gray-600">Manage your vendor profile and bids</p>
              </div>
            </div>
            <Link 
              href="/" 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vendor Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Vendor Information</h2>
              
              {vendorData ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                    <p className="text-lg font-semibold text-gray-900">{vendorData.organizationName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Head of Bids</label>
                    <p className="text-lg font-semibold text-gray-900">{vendorData.headOfBids}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <p className="text-lg font-semibold text-gray-900">{vendorData.location}</p>
                  </div>
                  {vendorData.website && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      <a 
                        href={vendorData.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {vendorData.website}
                      </a>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Address</label>
                    <p className="text-sm font-mono text-gray-600 bg-gray-100 rounded-lg p-2 break-all">
                      {address}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Registration Date</label>
                    <p className="text-sm text-gray-600">
                      {new Date(vendorData.registeredAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">No vendor data found. Please complete registration.</p>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/tenders" 
                  className="block w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  📋 Browse Tenders
                </Link>
                <Link 
                  href="/my-bids" 
                  className="block w-full py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  💼 My Bids
                </Link>
                <Link 
                  href="/vendor-settings/edit" 
                  className="block w-full py-3 px-4 bg-gray-600 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors text-center"
                >
                  ⚙️ Edit Profile
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Network Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Network:</span>
                  <span className={`text-sm font-semibold ${isCorrectNetwork ? 'text-green-600' : 'text-red-600'}`}>
                    {isCorrectNetwork ? 'Sepolia' : 'Wrong Network'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Connection:</span>
                  <span className="text-sm font-semibold text-green-600">Connected</span>
                </div>
              </div>
              
              <button
                onClick={() => disconnect()}
                className="w-full mt-4 py-2 px-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Disconnect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
