"use client";

import React from "react";

const ComplaintsBoardPage = () => {
  return (
    <div className="text-[#18181b] text-base space-y-8">
      <div>
        <h2 className="text-3xl text-center text-blue-50 font-bold border-b-2 border-white pb-2">
          ANNEXURE - B
        </h2>
      </div>

      {/* Table 1 */}
      <div>
        <h2 className="text-xl text-blue-50 font-bold mb-4">
          Data for the month ending - June 2025
        </h2>
        <div className="overflow-x-auto scroll-hidden">
          <table className="w-full border border-[#18181b]">
            <thead className="bg-green-200 text-[#18181b]">
              <tr>
                <th className="p-2 border border-[#18181b]">Sr No</th>
                <th className="p-2 border border-[#18181b]">Received from</th>
                <th className="p-2 border border-[#18181b]">
                  Pending at the end of last month
                </th>
                <th className="p-2 border border-[#18181b]">Received</th>
                <th className="p-2 border border-[#18181b]">Resolved*</th>
                <th className="p-2 border border-[#18181b]">Total Pending#</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Directly from Investors", "0", "0", "0", "0"],
                ["2", "SEBI (SCORES)", "0", "0", "0", "0"],
                ["3", "Other Sources (if any)", "0", "0", "0", "0"],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  {row.map((cell, i) => (
                    <td key={i} className="p-2 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold bg-blue-50">
                <td className="p-2 border" colSpan={2}>
                  GRAND TOTAL
                </td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes */}
      <div className="text-blue-50 space-y-2">
        <p>
          * Inclusive of complaints of previous months resolved in the current
          month.
        </p>
        <p>
          # Inclusive of complaints pending as on the last day of the month.
        </p>
      </div>

      {/* Table 2 */}
      <div>
        <h2 className="text-xl text-blue-50 font-bold mb-4">
          Trend of monthly disposal of complaints
        </h2>
        <div className="overflow-x-auto scroll-hidden">
          <table className="w-full border border-[#18181b]">
            <thead className="bg-blue-200 text-[#18181b]">
              <tr>
                <th className="p-2 border border-[#18181b]">Sr No</th>
                <th className="p-2 border border-[#18181b]">Month</th>
                <th className="p-2 border border-[#18181b]">
                  Carried forward from previous month
                </th>
                <th className="p-2 border border-[#18181b]">Received</th>
                <th className="p-2 border border-[#18181b]">Resolved*</th>
                <th className="p-2 border border-[#18181b]">Pending</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Apr 24", "0", "1", "0", "0"],
                ["2", "May 24", "1", "0", "1", "0"],
                ["3", "Jun 24", "0", "0", "0", "0"],
                ["4", "Jul 24", "0", "0", "0", "0"],
                ["5", "Aug 24", "0", "0", "0", "0"],
                ["6", "Sep 24", "0", "0", "0", "0"],
                ["7", "Oct 24", "0", "0", "0", "0"],
                ["8", "Nov 24", "0", "0", "0", "0"],
                ["9", "Dec 24", "0", "0", "0", "0"],
                ["10", "Jan 25", "0", "0", "0", "0"],
                ["11", "Feb 25", "0", "0", "0", "0"],
                ["12", "Mar 25", "0", "0", "0", "0"],
                ["13", "Apr 25", "0", "0", "0", "0"],
                ["14", "May 25", "0", "0", "0", "0"],
                ["15", "Jun 25", "0", "0", "0", "0"],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  {row.map((cell, i) => (
                    <td key={i} className="p-2 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold bg-blue-50">
                <td className="p-2 border" colSpan={2}>
                  GRAND TOTAL
                </td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes */}
      <div className="text-blue-50 space-y-2">
        <p>
          *Inclusive of complaints of previous years resolved in the current
          year.
        </p>
        <p>#Inclusive of complaints pending as on the last day of the year.</p>
      </div>

      {/* Table 3 */}
      <div>
        <h2 className="text-xl text-blue-50 font-bold mb-4">
          Trend of annual disposal of complaints
        </h2>
        <div className="overflow-x-auto scroll-hidden">
          <table className="w-full border border-[#18181b]">
            <thead className="bg-yellow-200 text-[#18181b]">
              <tr>
                <th className="p-2 border border-[#18181b]">Sr No</th>
                <th className="p-2 border border-[#18181b]">Year</th>
                <th className="p-2 border border-[#18181b]">
                  Carried forward from previous month
                </th>
                <th className="p-2 border border-[#18181b]">Received</th>
                <th className="p-2 border border-[#18181b]">Resolved*</th>
                <th className="p-2 border border-[#18181b]">Pending</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "2022-2023", "0", "0", "0", "0"],
                ["2", "2023-2024", "0", "1", "1", "0"],
                ["3", "2024-2025", "0", "0", "0", "0"],
              ].map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                >
                  {row.map((cell, i) => (
                    <td key={i} className="p-2 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="font-bold bg-blue-50">
                <td className="p-2 border" colSpan={2}>
                  GRAND TOTAL
                </td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Notes */}
      <div className="text-blue-50 space-y-2">
        <p>
          *Inclusive of complaints of previous years resolved in the current
          year.
        </p>
        <p>#Inclusive of complaints pending as on the last day of the year.</p>
      </div>
    </div>
  );
};

export default ComplaintsBoardPage;
