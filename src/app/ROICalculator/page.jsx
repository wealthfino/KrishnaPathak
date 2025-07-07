"use client";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ROICalculatorApp() {
  const [entry, setEntry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [investment, setInvestment] = useState(0);
  const [targetPrice, setTargetPrice] = useState("");
  const [stoplossPrice, setStoplossPrice] = useState("");
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const entryNum = parseFloat(entry);
    const quantityNum = parseFloat(quantity);
    if (!isNaN(entryNum) && !isNaN(quantityNum)) {
      setInvestment(entryNum * quantityNum);
    } else {
      setInvestment(0);
    }
  }, [entry, quantity]);

  const calculateROI = (price) => {
    const netProfit = (price - parseFloat(entry || 0)) * parseFloat(quantity || 0);
    const roi = investment !== 0 ? (netProfit / investment) * 100 : 0;
    return {
      netProfit,
      roi: parseFloat(roi.toFixed(2)),
    };
  };

  const chartData = levels.map((level) => {
    const { netProfit, roi } = calculateROI(level.price);
    return {
      name: level.label,
      roi,
      netProfit,
      absNetProfit: Math.abs(netProfit),
    };
  });

  const handleAddLevel = () => {
    const newLevels = [];

    if (targetPrice) {
      newLevels.push({ label: "Target", price: parseFloat(targetPrice) });
    }

    if (stoplossPrice) {
      newLevels.push({ label: "Stoploss", price: parseFloat(stoplossPrice) });
    }

    if (newLevels.length === 0) return;

    setLevels((prev) => [...prev, ...newLevels]);
    setTargetPrice("");
    setStoplossPrice("");
  };

  const handleReset = () => {
    setEntry("");
    setQuantity("");
    setInvestment(0);
    setTargetPrice("");
    setStoplossPrice("");
    setLevels([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-35 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 w-full max-w-6xl text-center text-slate-800">
        <h2 className="text-3xl font-bold mb-8 text-purple-600">ROI Calculator</h2>

        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Entry Price</label>
            <input
              type="number"
              value={entry}
              onChange={(e) =>
                setEntry(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Total Investment</label>
            <input
              type="number"
              value={investment}
              readOnly
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-lg"
            />
          </div>
        </div>

        {/* Target & Stoploss Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Target Price</label>
            <input
              type="number"
              value={targetPrice}
              onChange={(e) =>
                setTargetPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              placeholder="e.g. 150"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Stoploss Price</label>
            <input
              type="number"
              value={stoplossPrice}
              onChange={(e) =>
                setStoplossPrice(e.target.value === "" ? "" : Number(e.target.value))
              }
              placeholder="e.g. 90"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div className="flex flex-col justify-end gap-2">
            <button
              onClick={handleAddLevel}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* ROI Table */}
        {levels.length > 0 && (
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-100 text-blue-900 font-semibold">
                <tr>
                  <th className="px-4 py-2 text-left">Label</th>
                  <th className="px-4 py-2 text-right">Price</th>
                  <th className="px-4 py-2 text-right">Net Profit</th>
                  <th className="px-4 py-2 text-right">ROI (%)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {levels.map((level, idx) => {
                  const { netProfit, roi } = calculateROI(level.price);
                  return (
                    <tr key={idx} className="border-t">
                      <td className="px-4 py-2">{level.label}</td>
                      <td className="px-4 py-2 text-right">₹{level.price.toFixed(2)}</td>
                      <td
                        className={`px-4 py-2 text-right ${
                          netProfit >= 0 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        ₹{netProfit.toFixed(2)}
                      </td>
                      <td
                        className={`px-4 py-2 text-right ${
                          roi >= 0 ? "text-blue-600" : "text-red-500"
                        }`}
                      >
                        {roi}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Line Chart */}
          <div className="bg-white shadow-md ring-2 ring-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              ROI Over Levels (Line)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="roi"
                    stroke="#2563EB"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow-md ring-2 ring-purple-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-purple-600">
              Profit Share (Pie)
            </h3>
            <div className="h-64">
              {chartData.some((d) => d.absNetProfit > 0) ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData.filter((d) => d.absNetProfit > 0)}
                      dataKey="absNetProfit"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(1)}%`
                      }
                    >
                      {chartData
                        .filter((d) => d.absNetProfit > 0)
                        .map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.netProfit >= 0 ? "#22C55E" : "#EF4444"}
                          />
                        ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name, props) => {
                        const index = props?.payload?.index;
                        const actual = chartData?.[index]?.netProfit;
                        return typeof actual === "number"
                          ? [`₹${actual.toFixed(2)}`, name]
                          : [value, name];
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-gray-400 mt-20">
                  No positive net profit to display
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
