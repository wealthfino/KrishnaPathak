// app/calculators/page.tsx

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pt-50 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-10">All Calculators</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/SIPCalculator"
            className="block p-6 rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">SIP Calculator</h2>
            <p className="text-sm mt-2 text-gray-600">
              Estimate your future returns on systematic investment plans.
            </p>
          </a>

          <a
            href="/ROICalculator"
            className="block p-6 rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-purple-600">ROI Calculator</h2>
            <p className="text-sm mt-2 text-gray-600">
              Calculate return on investment over time.
            </p>
          </a>

          <a
            href="/EMICalculator"
            className="block p-6 rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">EMI Calculator</h2>
            <p className="text-sm mt-2 text-gray-600">
              Estimate your monthly loan repayments easily.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
