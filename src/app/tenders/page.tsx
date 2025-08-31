"use client";
import React, { useState } from "react";

type Tender = {
  walletAddress: string;
  governanceName: string;
  status: string;
  bids: number;
  timeLeft: string;
};

const mockTenders: Tender[] = [
  {
    walletAddress: "0x1234...abcd",
    governanceName: "Alpha DAO",
    status: "Open",
    bids: 12,
    timeLeft: "2d 4h",
  },
  {
    walletAddress: "0x5678...efgh",
    governanceName: "Beta Governance",
    status: "Closed",
    bids: 8,
    timeLeft: "0d 0h",
  },
  // Add more mock data as needed
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const filteredTenders = mockTenders.filter(
    (tender) =>
      tender.governanceName.toLowerCase().includes(search.toLowerCase()) ||
      tender.walletAddress.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Create or Bid
        </button>
      </nav>

      {/* Search */}
      <div className="max-w-4xl mx-auto mt-8">
        <input
          type="text"
          placeholder="Search by governance name or wallet address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-6"
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Wallet Address</th>
                <th className="px-4 py-2 text-left">Governance Name</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Bids</th>
                <th className="px-4 py-2 text-left">Time Left</th>
              </tr>
            </thead>
            <tbody>
              {filteredTenders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No tenders found.
                  </td>
                </tr>
              ) : (
                filteredTenders.map((tender, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">{tender.walletAddress}</td>
                    <td className="px-4 py-2">{tender.governanceName}</td>
                    <td className="px-4 py-2">{tender.status}</td>
                    <td className="px-4 py-2">{tender.bids}</td>
                    <td className="px-4 py-2">{tender.timeLeft}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}