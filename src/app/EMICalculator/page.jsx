"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { RotateCcw } from "lucide-react";

const COLORS = ["#3b82f6", "#ef4444"];

// Animated Number Component
const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 300;
    const steps = 20;
    const increment = (value - displayValue) / steps;
    let current = displayValue;
    let count = 0;

    const timer = setInterval(() => {
      current += increment;
      count++;
      setDisplayValue(current);
      if (count >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{Math.round(displayValue).toLocaleString()}</span>;
};

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanInput, setLoanInput] = useState("0");

  const [interestRate, setInterestRate] = useState(0);
  const [interestInput, setInterestInput] = useState("0");

  const [tenure, setTenure] = useState(0);
  const [tenureInput, setTenureInput] = useState("0");

  const [monthlyMode, setMonthlyMode] = useState(true);

  useEffect(() => setLoanInput(loanAmount.toString()), [loanAmount]);
  useEffect(() => setInterestInput(interestRate.toString()), [interestRate]);
  useEffect(() => setTenureInput(tenure.toString()), [tenure]);

  const calculateEMI = (P, R, N) => {
    if (P <= 0 || R <= 0 || N <= 0) return 0;
    const monthlyRate = R / (12 * 100);
    const months = N * 12;
    return (P * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  };

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const pieData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest }
  ];

  const resetFields = () => {
    setLoanAmount(0);
    setLoanInput("0");
    setInterestRate(0);
    setInterestInput("0");
    setTenure(0);
    setTenureInput("0");
    setMonthlyMode(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen  py-35 px-4 sm:px-8  text-gray-800">
      {/* className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-start justify-center py-16 px-4 sm:px-8 text-gray-800"> */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            EMI Calculator
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => setMonthlyMode(!monthlyMode)}
              className="px-4 py-2 text-sm rounded-full border hover:bg-gray-100 transition"
            >
              {monthlyMode ? "Yearly Summary" : "Monthly Summary"}
            </button>
            <button
              onClick={resetFields}
              className="flex items-center px-4 py-2 text-sm text-red-600 bg-red-100 rounded-full hover:bg-red-200 transition"
            >
              <RotateCcw size={16} className="mr-1" />
              Reset
            </button>
          </div>
        </div>

        {/* Inputs & Summary */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Loan Amount */}
            <div>
              <label className="block font-medium mb-1">Loan Amount (₹)</label>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="text"
                  value={loanInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setLoanInput(val);
                    setLoanAmount(Number(val || 0));
                  }}
                  className="w-28 p-2 border rounded"
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block font-medium mb-1">Interest Rate (% p.a.)</label>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="text"
                  value={interestInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9.]/g, "");
                    setInterestInput(val);
                    setInterestRate(Number(val || 0));
                  }}
                  className="w-20 p-2 border rounded"
                />
              </div>
            </div>

            {/* Tenure */}
            <div>
              <label className="block font-medium mb-1">Tenure (Years)</label>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="1"
                  max="35"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="text"
                  value={tenureInput}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setTenureInput(val);
                    setTenure(Number(val || 0));
                  }}
                  className="w-16 p-2 border rounded"
                />
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-indigo-50 p-5 rounded-xl shadow-inner space-y-2">
              <div className="flex justify-between">
                <span>Monthly EMI</span>
                <span className="font-semibold text-indigo-600">
                  ₹<AnimatedNumber value={emi || 0} />
                </span>
              </div>
              <div className="flex justify-between">
                <span>Principal</span>
                <span>₹<AnimatedNumber value={loanAmount} /></span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest</span>
                <span>₹<AnimatedNumber value={totalInterest || 0} /></span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2 font-medium">
                <span>Total Payable</span>
                <span>₹<AnimatedNumber value={totalAmount || 0} /></span>
              </div>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="flex flex-col items-center justify-center">
            {loanAmount > 0 && interestRate > 0 && tenure > 0 && (
              <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${Math.round(value).toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
