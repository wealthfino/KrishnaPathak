"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calculator,
  Calendar,
  IndianRupeeIcon,
  Percent,
  RotateCw,
} from "lucide-react";
import Chart from "chart.js/auto";

function App() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanYears, setLoanYears] = useState(20);
  const [interestRate, setInterestRate] = useState(7.5);
  const [emiDetails, setEmiDetails] = useState(null);
  const [yearlyData, setYearlyData] = useState([]);

  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const pieChartInstance = useRef(null);

  const calculateEMI = () => {
    const principal = loanAmount;
    const annualRate = interestRate;
    const tenureMonths = loanYears * 12;
    const monthlyRate = annualRate / 12 / 100;

    const emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    const totalPayment = emi * tenureMonths;
    const totalInterest = totalPayment - principal;

    const yearly = [];
    let balance = principal;
    for (let year = 1; year <= loanYears; year++) {
      const months = Math.min(12, tenureMonths - (year - 1) * 12);
      let interestPaid = 0;
      let principalPaid = 0;
      for (let m = 0; m < months; m++) {
        const interest = balance * monthlyRate;
        const principalPart = emi - interest;
        interestPaid += interest;
        principalPaid += principalPart;
        balance -= principalPart;
      }
      yearly.push({
        year,
        principalPaid,
        interestPaid,
        balance: balance < 0 ? 0 : balance,
      });
    }

    setEmiDetails({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    });

    setYearlyData(yearly);
  };

  const resetForm = () => {
    setLoanAmount(1000000);
    setLoanYears(20);
    setInterestRate(7.5);
  };

  const createLineChart = () => {
    if (lineChartInstance.current) lineChartInstance.current.destroy();
    if (!yearlyData.length) return;

    const ctx = lineChartRef.current.getContext("2d");
    lineChartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: yearlyData.map((d) => `Year ${d.year}`),
        datasets: [
          {
            label: "Principal Paid",
            data: yearlyData.map((d) => d.principalPaid),
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Interest Paid",
            data: yearlyData.map((d) => d.interestPaid),
            borderColor: "#EF4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderWidth: 3,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: (context) =>
                context.dataset.label +
                ": ₹" +
                context.parsed.y.toLocaleString("en-IN"),
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) =>
                "₹" + (value / 100000).toFixed(1) + "L",
            },
          },
        },
      },
    });
  };

  const createPieChart = () => {
    if (pieChartInstance.current) pieChartInstance.current.destroy();
    if (!emiDetails) return;

    const ctx = pieChartRef.current.getContext("2d");
    pieChartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Principal", "Interest"],
        datasets: [
          {
            data: [loanAmount, emiDetails.totalInterest],
            backgroundColor: ["#3B82F6", "#EF4444"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const total = context.dataset.data.reduce(
                  (a, b) => a + b,
                  0
                );
                const percent = (
                  (context.parsed / total) *
                  100
                ).toFixed(1);
                return `${context.label}: ₹${context.parsed.toLocaleString(
                  "en-IN"
                )} (${percent}%)`;
              },
            },
          },
        },
        cutout: "60%",
      },
    });
  };

  useEffect(() => {
    if (loanAmount && loanYears && interestRate) calculateEMI();
  }, [loanAmount, loanYears, interestRate]);

  useEffect(() => {
    if (yearlyData.length) createLineChart();
  }, [yearlyData]);

  useEffect(() => {
    if (emiDetails) createPieChart();
  }, [emiDetails]);

  useEffect(() => {
    return () => {
      if (lineChartInstance.current) lineChartInstance.current.destroy();
      if (pieChartInstance.current) pieChartInstance.current.destroy();
    };
  }, []);

  const formatCurrency = (amount) =>
    "₹" + amount.toLocaleString("en-IN");

  const sanitizeInput = (value) => {
    const cleaned = value.replace(/^0+/, "");
    return cleaned === "" ? 0 : Number(cleaned);
  };

  return (
  <div className="min-h-screen pt-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto py-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-5 shadow-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            EMI Calculator
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your Loan EMI, Total Interest, and visualize amortization
            over time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 ring-2 ring-blue-200 ring-offset-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <IndianRupeeIcon className="w-5 h-5 mr-2 text-blue-600" />
                  Loan Details
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
                {/* Loan Amount */}
                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    min="10000"
                    max="50000000"
                    step="10000"
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setLoanAmount("");
                      } else {
                        setLoanAmount(Number(value));
                      }
                    }}
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                  <input
                    type="range"
                    min="10000"
                    max="50000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Loan Years */}
                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={loanYears}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setLoanYears("");
                      } else {
                        setLoanYears(Number(value));
                      }
                    }}
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={loanYears}
                    onChange={(e) =>
                      setLoanYears(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="flex text-sm font-medium text-gray-700 mb-2">
                    <Percent className="w-4 h-4 mr-1" />
                    Annual Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setInterestRate("");
                      } else {
                        setInterestRate(Number(value));
                      }
                    }}
                    className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 text-lg"
                  />
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(Number(e.target.value))
                    }
                    className="w-full mt-2 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="lg:col-span-2">
            {emiDetails && (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-blue-200">
                    <p className="text-sm text-gray-500">Monthly EMI</p>
                    <h3 className="text-xl font-bold text-blue-600">
                      {formatCurrency(emiDetails.emi)}
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-green-200">
                    <p className="text-sm text-gray-500">Total Payment</p>
                    <h3 className="text-xl font-bold text-green-600">
                      {formatCurrency(emiDetails.totalPayment)}
                    </h3>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-red-200">
                    <p className="text-sm text-gray-500">Total Interest</p>
                    <h3 className="text-xl font-bold text-red-600">
                      {formatCurrency(emiDetails.totalInterest)}
                    </h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-blue-200">
                    <h3 className="font-semibold mb-2">Amortization Chart</h3>
                    <div className="h-64 sm:h-80 w-full max-w-full overflow-hidden">
                      <canvas ref={lineChartRef} className="w-full max-w-full"></canvas>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md ring-2 ring-blue-200">
                    <h3 className="font-semibold mb-2">Payment Breakdown</h3>
                    <div className="h-64 sm:h-80 w-full max-w-full overflow-hidden">
                      <canvas ref={pieChartRef} className="w-full max-w-full"></canvas>
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
