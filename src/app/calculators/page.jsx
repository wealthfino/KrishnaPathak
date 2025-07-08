'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BlurText from "../Animations/BlurText"

const loadMotion = async () => {
  const mod = await import('framer-motion');
  return mod.motion;
};

export default function CalculatorsPage() {
  const [motionA, setMotionA] = useState(null);

  useEffect(() => {
    loadMotion().then((m) => setMotionA(() => m.a));
  }, []);

  if (!motionA) return null;

  const MotionCard = motionA;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-4 py-40">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 text-center">
  <BlurText
    text="All Calculators"
    delay={150}
    animateBy="words"
    direction="top"
    className=""
  />
</h1>


        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc, index) => (
            <MotionCard
              key={calc.title}
              href={calc.href}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
              }}
              className="block p-6 rounded-2xl bg-white shadow-md transition-all duration-300 text-left"
            >
              <h2 className={`text-xl font-semibold ${calc.color}`}>
                {calc.title}
              </h2>
              <p className="text-sm mt-3 text-gray-600">{calc.description}</p>
            </MotionCard>
          ))}
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
    color: "text-purple-600",
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
    href: "/SpiltCalculator",
    color: "text-green-600",
  },
];
