"use client";

import { useState } from "react";

const currency = (n: number) =>
  n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });

export default function GrowthCalculator() {
  const [clientsPerMonth, setClientsPerMonth] = useState(50);
  const [takeUpRate, setTakeUpRate] = useState(20);
  const [pricePerScan, setPricePerScan] = useState(49);

  const adoptedClients = clientsPerMonth * (takeUpRate / 100);
  const annualScans = adoptedClients * 4; // assumes quarterly rescans
  const estimatedAnnualRevenue = annualScans * pricePerScan;
  const estimatedMonthlyRevenue = estimatedAnnualRevenue / 12;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="clientsPerMonth" className="flex items-center justify-between text-sm font-medium text-[#0D1B3E] mb-2">
              <span>Clients seen per month</span>
              <span className="text-[#C8953C] font-bold">{clientsPerMonth}</span>
            </label>
            <input
              id="clientsPerMonth"
              type="range"
              min={0}
              max={500}
              step={5}
              value={clientsPerMonth}
              onChange={(e) => setClientsPerMonth(Number(e.target.value))}
              className="w-full accent-[#C8953C]"
            />
          </div>

          <div>
            <label htmlFor="takeUpRate" className="flex items-center justify-between text-sm font-medium text-[#0D1B3E] mb-2">
              <span>Estimated take-up rate for adding scans</span>
              <span className="text-[#C8953C] font-bold">{takeUpRate}%</span>
            </label>
            <input
              id="takeUpRate"
              type="range"
              min={0}
              max={100}
              step={1}
              value={takeUpRate}
              onChange={(e) => setTakeUpRate(Number(e.target.value))}
              className="w-full accent-[#C8953C]"
            />
          </div>

          <div>
            <label htmlFor="pricePerScan" className="flex items-center justify-between text-sm font-medium text-[#0D1B3E] mb-2">
              <span>Price per scan</span>
              <span className="text-[#C8953C] font-bold">{currency(pricePerScan)}</span>
            </label>
            <input
              id="pricePerScan"
              type="range"
              min={0}
              max={150}
              step={5}
              value={pricePerScan}
              onChange={(e) => setPricePerScan(Number(e.target.value))}
              className="w-full accent-[#C8953C]"
            />
          </div>
        </div>

        {/* Results — matches the stat block style used on Technology & Science */}
        <div className="grid grid-cols-2 gap-4 content-start">
          <div className="bg-[#F7F4EF] rounded-2xl p-5 border border-[#C8953C]/10 col-span-2">
            <div className="text-2xl font-black text-[#C8953C] mb-1">
              {Math.round(adoptedClients)}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Clients Adopting Scans / Month
            </div>
          </div>
          <div className="bg-[#F7F4EF] rounded-2xl p-5 border border-[#C8953C]/10">
            <div className="text-2xl font-black text-[#C8953C] mb-1">
              {currency(estimatedMonthlyRevenue)}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Est. Monthly Added Revenue
            </div>
          </div>
          <div className="bg-[#F7F4EF] rounded-2xl p-5 border border-[#C8953C]/10">
            <div className="text-2xl font-black text-[#C8953C] mb-1">
              {currency(estimatedAnnualRevenue)}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Est. Annual Added Revenue
            </div>
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400 text-center leading-relaxed">
        Projections are illustrative only, based on the assumptions you enter, and are
        not a guarantee of results.
      </p>
    </div>
  );
}
