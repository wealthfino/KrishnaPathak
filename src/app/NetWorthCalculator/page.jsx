"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, IndianRupee, RotateCw } from "lucide-react";
import Chart from "chart.js/auto";

// ---------------------- Component ----------------------
function NetWorthCalculator() {
  const [assets, setAssets] = useState({
    cash: "",
    realEstate: "",
    investments: "",
    vehicles: "",
    business: "",
    gold: "", // ✅ added gold
  });

  const [liabilities, setLiabilities] = useState({
    homeLoan: "",
    carLoan: "",
    creditCard: "",
    personalLoan: "",
  });

  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  const sanitize = (val) =>
    val.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "").replace(/^(\.)/, "0.");

  const handleAssetChange = (key, value) => {
    setAssets({ ...assets, [key]: sanitize(value) });
  };

  const handleLiabilityChange = (key, value) => {
    setLiabilities({ ...liabilities, [key]: sanitize(value) });
  };

  const parse = (val) => parseFloat(val) || 0;

  const reset = () => {
    setAssets({
      cash: "",
      realEstate: "",
      investments: "",
      vehicles: "",
      business: "",
      gold: "", // ✅ reset gold
    });
    setLiabilities({
      homeLoan: "",
      carLoan: "",
      creditCard: "",
      personalLoan: "",
    });
  };

  const totalAssets =
    parse(assets.cash) +
    parse(assets.realEstate) +
    parse(assets.investments) +
    parse(assets.vehicles) +
    parse(assets.business) +
    parse(assets.gold); // ✅ include gold

  const totalLiabilities =
    parse(liabilities.homeLoan) +
    parse(liabilities.carLoan) +
    parse(liabilities.creditCard) +
    parse(liabilities.personalLoan);

  const netWorth = totalAssets - totalLiabilities;

  const formatINR = (val) => "₹" + val.toLocaleString("en-IN");

  const renderCharts = () => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();

    if (totalAssets === 0 && totalLiabilities === 0) return;

    barChartInstance.current = new Chart(barChartRef.current, {
      type: "bar",
      data: {
        labels: ["Assets", "Liabilities"],
        datasets: [
          {
            label: "Amount",
            data: [totalAssets, totalLiabilities],
            backgroundColor: ["#10B981", "#EF4444"],
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ₹${ctx.parsed.y}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => "₹" + value,
            },
          },
        },
      },
    });

    doughnutChartInstance.current = new Chart(doughnutChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Assets", "Liabilities"],
        datasets: [
          {
            data: [totalAssets, totalLiabilities],
            backgroundColor: ["#34D399", "#F87171"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "65%",
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const total = totalAssets + totalLiabilities;
                const percent = total > 0 ? ((ctx.parsed / total) * 100).toFixed(1) : 0;
                return `${ctx.label}: ₹${ctx.parsed} (${percent}%)`;
              },
            },
          },
          legend: { display: false },
        },
      },
    });
  };

  useEffect(() => {
    renderCharts();
  }, [assets, liabilities]);

  useEffect(() => {
    return () => {
      if (barChartInstance.current) barChartInstance.current.destroy();
      if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-slate-100 via-emerald-100 to-blue-200 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mb-5 shadow-xl animate-pulse">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Net Worth Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Track your personal finances effortlessly – assets vs liabilities in a glance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="backdrop-blur-md bg-white/80 rounded-3xl shadow-2xl p-6 sm:p-8 ring-2 ring-blue-200 ring-offset-2 transition hover:scale-[1.01] duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <IndianRupee className="w-5 h-5 mr-2 text-green-600" />
                Your Financial Details
              </h2>
              <button
                onClick={reset}
                className="flex items-center text-blue-600 text-sm hover:underline hover:text-blue-800 transition"
              >
                <RotateCw className="w-4 h-4 mr-1" />
                Reset
              </button>
            </div>

            {/* Assets */}
            <div className="mb-6">
              <h3 className="text-md font-medium text-green-700 mb-2">Assets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Cash & Bank Balances", key: "cash" },
                  { label: "Real Estate (home or property)", key: "realEstate" },
                  { label: "Investments(stocks, mutual funds)", key: "investments" },
                  { label: "Vehicles (market value)", key: "vehicles" },
                  { label: "Business/Other Assets", key: "business" },
                  { label: "Gold (current market value)", key: "gold" }, // ✅ added
                ].map(({ label, key }) => (
                  <div key={key}>
                    <label className="text-sm text-gray-700">{label}(₹)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={assets[key]}
                      onChange={(e) => handleAssetChange(key, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-black transition-all focus:ring-2 focus:ring-green-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Liabilities */}
            <div>
              <h3 className="text-md font-medium text-red-700 mb-2">Liabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Home Loan", key: "homeLoan" },
                  { label: "Car Loan", key: "carLoan" },
                  { label: "Credit Card", key: "creditCard" },
                  { label: "Other Loans/EMIs", key: "personalLoan" },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <label className="text-sm text-gray-700">{label} (₹)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={liabilities[key]}
                      onChange={(e) => handleLiabilityChange(key, e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl text-black transition-all focus:ring-2 focus:ring-red-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary + Charts */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 ring-2 ring-blue-200 text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Your Financial Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <SummaryCard label="Total Assets" amount={totalAssets} color="green" />
                <SummaryCard label="Total Liabilities" amount={totalLiabilities} color="red" />
                <SummaryCard label="Net Worth" amount={netWorth} color="blue" />
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChartCard title="Bar Chart" ref={barChartRef} color="green" />
              <ChartCard title="Assets vs Liabilities" ref={doughnutChartRef} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------- Helper Components ----------------------
function SummaryCard({ label, amount, color }) {
  const formatted = "₹" + amount.toLocaleString("en-IN");
  return (
    <div className={`p-4 bg-${color}-50 rounded-xl ring-1 ring-${color}-300`}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-lg font-bold text-${color}-700 transition-all duration-500`}>
        {formatted}
      </p>
    </div>
  );
}

const ChartCard = React.forwardRef(({ title, color }, ref) => (
  <div className={`bg-white p-4 rounded-2xl shadow-lg ring-2 ring-${color}-200`}>
    <p className="text-sm text-gray-600 mb-2">{title}</p>
    <div className="h-60 flex items-center justify-center">
      <canvas ref={ref}></canvas>
    </div>
  </div>
));

export default NetWorthCalculator;
