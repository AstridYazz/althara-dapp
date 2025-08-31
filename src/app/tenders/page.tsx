"use client";
import React, { useState } from 'react';

const mockData = [
  {
    wallet: '0x123...abc',
    governance: 'Althara DAO',
    status: 'Active',
    bids: 5,
    timeLeft: '2d 4h',
  },
  {
    wallet: '0x456...def',
    governance: 'BetaGov',
    status: 'Closed',
    bids: 12,
    timeLeft: '0d 0h',
  },
  // Add more mock items as needed
];

export default function Dashboard() {
  const [search, setSearch] = useState('');

  const filteredData = mockData.filter(
    item =>
      item.governance.toLowerCase().includes(search.toLowerCase()) ||
      item.wallet.toLowerCase().includes(search.toLowerCase())
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
      <div className="max-w-2xl mx-auto mt-8">
        <input
          type="text"
          placeholder="Search by governance name or wallet address"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto mt-8">
        <table className="w-full border-collapse bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Wallet Address</th>
              <th className="px-4 py-2 text-left">Governance Name</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Bids</th>
              <th className="px-4 py-2 text-left">Time Left</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{item.wallet}</td>
                <td className="px-4 py-2">{item.governance}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">{item.bids}</td>
                <td className="px-4 py-2">{item.timeLeft}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}