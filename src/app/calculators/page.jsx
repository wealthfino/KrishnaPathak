'use client';

import { useRouter } from 'next/navigation';
import BlurText from "../Animations/BlurText";
import { AuroraBackground } from '../../../components/ui/aurora-background';

export default function CalculatorsPage() {
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <div className="pt-20 md:pt-10 min-h-screen">
      <div className="min-h-screen text-gray-900 px-4 py-40">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-12 text-center">
            <BlurText
              text="All Calculators"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-white"
            />
          </h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calc) => (
              <div
                key={calc.title}
                role="button"
                tabIndex={0}
                onClick={() => handleClick(calc.href)}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(calc.href)}
                className="cursor-pointer block p-6 rounded-2xl bg-white shadow-md text-left border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition"
              >
                <h2 className={`text-xl font-semibold ${calc.color}`}>
                  {calc.title}
                </h2>
                <p className="text-sm mt-3 text-gray-600">
                  {calc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const calculators = [
  {
    title: "SIP Calculator",
    description: "Estimate your future returns on systematic investment plans.",
    href: "/SIPCalculator",
    color: "text-blue-600",
  },
  {
    title: "ROI Calculator",
    description: "Calculate return on investment over time.",
    href: "/ROICalculator",
    color: "text-blue-600",
  },
  {
    title: "EMI Calculator",
    description: "Estimate your monthly loan repayments easily.",
    href: "/EMICalculator",
    color: "text-blue-600",
  },
  {
    title: "Split Calculator",
    description: "Calculate new share price and quantity after a stock split.",
    href: "/SpiltCalculator", // typo? should this be "/SplitCalculator"?
    color: "text-green-600",
  },
  {
    title: "Risk Calculator",
    description: "Determine your trading risk-reward ratio and visualize trade logic.",
    href: "/RiskCalculator",
    color: "text-green-600",
  },
  {
    title: "Net Worth Calculator",
    description: "Know your financial health by subtracting your liabilities from your assets.",
    href: "/NetWorthCalculator",
    color: "text-green-600",
  },
];
