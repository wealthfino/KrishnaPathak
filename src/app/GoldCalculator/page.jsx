"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calculator,
  Percent,
  Weight,
  Coins,
  RotateCw,
} from "lucide-react";
import Chart from "chart.js/auto";

function App() {
  const [pricePerGram, setPricePerGram] = useState("");
  const [weightGrams, setWeightGrams] = useState("");
  const [makingCharges, setMakingCharges] = useState("");
  const [gst, setGst] = useState("");
  const [goldDetails, setGoldDetails] = useState(null);

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartInstance = useRef(null);
  const barChartInstance = useRef(null);

  const calculateGoldPrice = () => {
    if (
      pricePerGram === "" ||
      weightGrams === "" ||
      makingCharges === "" ||
      gst === ""
    ) {
      setGoldDetails(null);
      return;
    }

    const basePrice = pricePerGram * weightGrams;
    const makingChargeAmount = (basePrice * makingCharges) / 100;
    const gstAmount = ((basePrice + makingChargeAmount) * gst) / 100;
    const finalPrice = basePrice + makingChargeAmount + gstAmount;

    setGoldDetails({
      basePrice: Math.round(basePrice),
      makingChargeAmount: Math.round(makingChargeAmount),
      gstAmount: Math.round(gstAmount),
      finalPrice: Math.round(finalPrice),
    });
  };

  const resetForm = () => {
    setPricePerGram("");
    setWeightGrams("");
    setMakingCharges("");
    setGst("");
    setGoldDetails(null);
  };

  const createPieChart = () => {
    if (pieChartInstance.current) pieChartInstance.current.destroy();
    if (!goldDetails) return;

    const ctx = pieChartRef.current.getContext("2d");
    pieChartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Base Price", "Making Charges", "GST"],
        datasets: [
          {
            data: [
              goldDetails.basePrice,
              goldDetails.makingChargeAmount,
              goldDetails.gstAmount,
            ],
            backgroundColor: ["#3B82F6", "#FBBF24", "#EF4444"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%",
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percent = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ₹${context.parsed.toLocaleString(
                  "en-IN"
                )} (${percent}%)`;
              },
            },
          },
        },
      },
    });
  };

  const createBarChart = () => {
    if (barChartInstance.current) barChartInstance.current.destroy();
    if (!goldDetails) return;

    const ctx = barChartRef.current.getContext("2d");
    barChartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Base Price", "Making Charges", "GST"],
        datasets: [
          {
            label: "Amount (₹)",
            data: [
              goldDetails.basePrice,
              goldDetails.makingChargeAmount,
              goldDetails.gstAmount,
            ],
            backgroundColor: ["#3B82F6", "#FBBF24", "#EF4444"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) =>
                `₹${context.parsed.y.toLocaleString("en-IN")}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) =>
                "₹" + value.toLocaleString("en-IN"),
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    calculateGoldPrice();
  }, [pricePerGram, weightGrams, makingCharges, gst]);

  useEffect(() => {
    if (goldDetails) {
      createPieChart();
      createBarChart();
    }
  }, [goldDetails]);

  useEffect(() => {
    return () => {
      if (pieChartInstance.current) pieChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
    };
  }, []);

  const formatCurrency = (amount) =>
    "₹" + amount.toLocaleString("en-IN");

  return (
    <div className="min-h-screen pt-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto py-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl mb-5 shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Gold Price Calculator
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your gold purchase cost with making charges and GST.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 ring-2 ring-yellow-200 ring-offset-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Coins className="w-5 h-5 mr-2 text-yellow-600" />
                  Gold Details
                </h2>
                <button
                  onClick={resetForm}
                  className="flex items-center text-yellow-600 text-sm hover:underline"
                >
                  <RotateCw className="w-4 h-4 mr-1" />
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                {/* Price per gram */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Price per Gram (₹)
                  </label>
                  <input
                    type="number"
                    value={pricePerGram}
                    onChange={(e) =>
                      setPricePerGram(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                </div>

                {/* Weight in grams */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Weight (grams)
                  </label>
                  <input
                    type="number"
                    value={weightGrams}
                    onChange={(e) =>
                      setWeightGrams(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                </div>

                {/* Making Charges */}
                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-2">
                    <Percent className="w-4 h-4 mr-1" />
                    Making Charges (%)
                  </label>
                  <input
                    type="number"
                    value={makingCharges}
                    onChange={(e) =>
                      setMakingCharges(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                </div>

                {/* GST */}
                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-2">
                    <Percent className="w-4 h-4 mr-1" />
                    GST (%)
                  </label>
                  <input
                    type="number"
                    value={gst}
                    onChange={(e) =>
                      setGst(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="lg:col-span-2">
            {goldDetails && (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-blue-200">
                    <p className="text-sm text-gray-500">Base Price</p>
                    <h3 className="text-xl font-bold text-blue-600">
                      {formatCurrency(goldDetails.basePrice)}
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-yellow-200">
                    <p className="text-sm text-gray-500">Making Charges</p>
                    <h3 className="text-xl font-bold text-yellow-600">
                      {formatCurrency(goldDetails.makingChargeAmount)}
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-red-200">
                    <p className="text-sm text-gray-500">GST</p>
                    <h3 className="text-xl font-bold text-red-600">
                      {formatCurrency(goldDetails.gstAmount)}
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-green-200">
                    <p className="text-sm text-gray-500">Final Price</p>
                    <h3 className="text-xl font-bold text-green-600">
                      {formatCurrency(goldDetails.finalPrice)}
                    </h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-yellow-200">
                    <h3 className="font-semibold mb-2">Cost Breakdown</h3>
                    <div className="h-64 sm:h-80 w-full">
                      <canvas ref={pieChartRef}></canvas>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-yellow-200">
                    <h3 className="font-semibold mb-2">Component Comparison</h3>
                    <div className="h-64 sm:h-80 w-full">
                      <canvas ref={barChartRef}></canvas>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
