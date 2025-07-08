"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Calculator,
    IndianRupeeIcon,
    Percent,
    RotateCw,
    ListOrdered,
    Hash,
} from "lucide-react";
import Chart from "chart.js/auto";

export default function StockSplitCalculator() {
    const [oldPrice, setOldPrice] = useState(1000);
    const [oldShares, setOldShares] = useState(100);
    const [splitFrom, setSplitFrom] = useState(2);
    const [splitTo, setSplitTo] = useState(1);
    const [results, setResults] = useState(null);

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const calculateSplit = () => {
        if (
            !oldPrice ||
            !oldShares ||
            !splitFrom ||
            !splitTo ||
            splitFrom === 0 ||
            splitTo === 0
        )
            return;

        const newPrice = (oldPrice * splitTo) / splitFrom;
        const newShares = oldShares * (splitFrom / splitTo);
        const totalValue = oldPrice * oldShares;

        setResults({
            newPrice: Math.round(newPrice),
            newShares: Math.round(newShares),
            totalValue: Math.round(totalValue),
        });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            calculateSplit();
        }, 300);
        return () => clearTimeout(timeout);
    }, [oldPrice, oldShares, splitFrom, splitTo]);

    useEffect(() => {
        if (chartInstance.current) chartInstance.current.destroy();
        if (!results) return;

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Old", "New"],
                datasets: [
                    {
                        label: "Price per Share",
                        data: [oldPrice, results.newPrice],
                        backgroundColor: "#3B82F6",
                    },
                    {
                        label: "Number of Shares",
                        data: [oldShares, results.newShares],
                        backgroundColor: "#10B981",
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: "bottom" },
                    tooltip: {
                        callbacks: {
                            label: (context) =>
                                `${context.dataset.label}: ₹${context.parsed.y.toLocaleString("en-IN")}`,
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
    }, [results]);

    const resetForm = () => {
        setOldPrice(1000);
        setOldShares(100);
        setSplitFrom(2);
        setSplitTo(1);
        setResults(null);
        if (chartInstance.current) chartInstance.current.destroy();
    };

    return (
        <div className="min-h-screen pt-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-5 shadow-lg">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        Stock Split Calculator
                    </h1>
                    <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Estimate your new share price and quantity after a stock split
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Input Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 ring-2 ring-blue-200 ring-offset-2">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                                    <ListOrdered className="w-5 h-5 mr-2 text-blue-600" />
                                    Split Details
                                </h2>
                                <button
                                    onClick={resetForm}
                                    className="flex items-center text-blue-600 text-sm hover:underline"
                                >
                                    <RotateCw className="w-4 h-4 mr-1" />
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Old Price per Share (₹)
                                    </label>
                                    <input
                                        type="number"
                                        value={oldPrice}
                                        min="0"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/^0+(?!$)/, "");
                                            setOldPrice(value === "" ? "" : Number(value));
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Number of Shares Owned
                                    </label>
                                    <input
                                        type="number"
                                        value={oldShares}
                                        min="0"
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/^0+(?!$)/, "");
                                            setOldShares(value === "" ? "" : Number(value));
                                        }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                                    />
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Split From
                                        </label>
                                        <input
                                            type="number"
                                            value={splitFrom}
                                            min="0"
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/^0+(?!$)/, "");
                                                setSplitFrom(value === "" ? "" : Number(value));
                                            }}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Split To
                                        </label>
                                        <input
                                            type="number"
                                            value={splitTo}
                                            min="0"
                                            onChange={(e) => {
                                                const value = e.target.value.replace(/^0+(?!$)/, "");
                                                setSplitTo(value === "" ? "" : Number(value));
                                            }}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-lg text-black"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="lg:col-span-2">
                        {results && (
                            <>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-blue-200">
                                        <p className="text-sm text-gray-500">New Price per Share</p>
                                        <h3 className="text-xl font-bold text-blue-600">
                                            ₹{results.newPrice.toLocaleString("en-IN")}
                                        </h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-green-200">
                                        <p className="text-sm text-gray-500">Total Number of Shares</p>
                                        <h3 className="text-xl font-bold text-green-600">
                                            {results.newShares.toLocaleString("en-IN")}
                                        </h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-purple-200">
                                        <p className="text-sm text-gray-500">Total Value </p>
                                        <h3 className="text-xl font-bold text-purple-600">
                                            ₹{results.totalValue.toLocaleString("en-IN")}
                                        </h3>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-blue-200">
                                    <h3 className="font-semibold mb-4">Split Comparison</h3>
                                    <div className="h-80">
                                        <canvas ref={chartRef}></canvas>
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
