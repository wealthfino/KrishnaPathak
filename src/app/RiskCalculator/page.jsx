"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, IndianRupeeIcon, RotateCw } from "lucide-react";
import Chart from "chart.js/auto";

function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [stopLoss, setStopLoss] = useState("");

  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const barChartInstance = useRef(null);
  const doughnutChartInstance = useRef(null);

  const reset = () => {
    setEntryPrice("");
    setTargetPrice("");
    setStopLoss("");
  };

  const parseNumber = (val) => parseFloat(val) || 0;

  const risk = Math.max(parseNumber(entryPrice) - parseNumber(stopLoss), 0);
  const reward = Math.max(parseNumber(targetPrice) - parseNumber(entryPrice), 0);
  const ratio = risk > 0 ? (reward / risk).toFixed(2) : "N/A";

  const allInputsValid =
    entryPrice !== "" && targetPrice !== "" && stopLoss !== "" && risk > 0 && reward > 0;

  const formatCurrency = (val) => "₹" + val.toLocaleString("en-IN");

  const sanitizeAndSet = (val, setter) => {
    let cleaned = val.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");
    if (parts.length > 1) {
      cleaned = parts[0] + "." + parts[1].slice(0, 1);
    }
    cleaned = cleaned.replace(/^0+(?=\d)/, "");
    if (cleaned.startsWith(".")) {
      cleaned = "0" + cleaned;
    }
    setter(cleaned);
  };

  const renderCharts = () => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();

    if (!allInputsValid) return;

    // Bar Chart
    barChartInstance.current = new Chart(barChartRef.current, {
      type: "bar",
      data: {
        labels: ["Risk", "Reward"],
        datasets: [
          {
            label: "Amount",
            data: [risk, reward],
            backgroundColor: ["#EF4444", "#10B981"],
            borderRadius: 8,
            borderWidth: 1,
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

    // Doughnut Chart
    doughnutChartInstance.current = new Chart(doughnutChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Risk", "Reward"],
        datasets: [
          {
            data: [risk, reward],
            backgroundColor: ["#F87171", "#34D399"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: "60%",
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const total = risk + reward;
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
  }, [entryPrice, targetPrice, stopLoss]);

  useEffect(() => {
    return () => {
      if (barChartInstance.current) barChartInstance.current.destroy();
      if (doughnutChartInstance.current) doughnutChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen pt-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto py-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-5 shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Risk-Reward Ratio Calculator
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-xl mx-auto">
            Determine your trading risk-reward ratio and visualize trade logic.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 ring-2 ring-blue-200 ring-offset-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <IndianRupeeIcon className="w-5 h-5 mr-2 text-blue-600" />
                Trade Details
              </h2>
              <button
                onClick={reset}
                className="flex items-center text-blue-600 text-sm hover:underline"
              >
                <RotateCw className="w-4 h-4 mr-1" />
                Reset
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Entry Price (₹)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={entryPrice}
                  onChange={(e) => sanitizeAndSet(e.target.value, setEntryPrice)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Target Price (₹)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={targetPrice}
                  onChange={(e) => sanitizeAndSet(e.target.value, setTargetPrice)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Stop Loss Price (₹)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={stopLoss}
                  onChange={(e) => sanitizeAndSet(e.target.value, setStopLoss)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                />
              </div>
            </div>
          </div>

          {/* Result & Charts */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 ring-2 ring-blue-200 text-center">
              {allInputsValid && (
                <>
                  <p className="text-sm text-gray-500 mb-2">Risk-Reward Ratio</p>
                  <h2 className="text-4xl font-bold text-blue-700 mb-2">1 : {parseFloat(ratio).toFixed(1)}</h2>
                  <p className="text-md mt-2 text-gray-600">
                    For every ₹1 risked, potential gain is ₹{parseFloat(ratio).toFixed(1)}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                    <div className="p-4 rounded-lg bg-blue-50 ring-1 ring-blue-300">
                      <p className="text-sm text-gray-500 mb-1">Risk</p>
                      <p className="text-lg font-bold text-red-600">
                        {formatCurrency(risk)}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-50 ring-1 ring-green-300">
                      <p className="text-sm text-gray-500 mb-1">Reward</p>
                      <p className="text-lg font-bold text-green-600">
                        {formatCurrency(reward)}
                      </p>
                    </div>
                  </div>
                </>
              )}
              {!allInputsValid && (
                <p className="text-gray-400">Enter all values to calculate risk-reward</p>
              )}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-red-200">
                <p className="text-sm text-gray-600 mb-2">Risk vs Reward (Bar)</p>
                <div className="h-60 flex items-center justify-center">
                  {allInputsValid ? (
                    <canvas ref={barChartRef}></canvas>
                  ) : (
                    <p className="text-gray-400">Enter valid prices to generate chart</p>
                  )}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-green-200">
                <p className="text-sm text-gray-600 mb-2">Proportion (Doughnut)</p>
                <div className="h-60 flex items-center justify-center">
                  {allInputsValid ? (
                    <canvas ref={doughnutChartRef}></canvas>
                  ) : (
                    <p className="text-gray-400">Enter valid prices to generate chart</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiskRewardCalculator;
