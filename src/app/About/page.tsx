"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutUsKrishnaPathak() {
  return (
    <section className="bg-blue-50 text-blue-50 pt-40 pb-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex flex-col justify-center text-center mb-12">
          {/* Top Left Decorative Line */}
          <div className="w-24 h-1 bg-[#1f2b5e] rounded-full mb-2" />
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-[#1f2b5e] font-extrabold pb-3">
            <span className="animate-gradient bg-gradient-to-r from-[#1f2b5e] via-[#13B5E8] to-[#7ac678] bg-clip-text text-transparent px-1">
              About{"  "}
            </span>
            Me
          </h2>
          {/* Bottom Right Decorative Line */}
          <div className="w-24 h-1 bg-[#7ac678] rounded-full mt-2 ml-auto" />
        </div>
        <p className="text-base font-medium md:text-lg text-[#1f2b5e] max-w-2xl mx-auto mb-14">
          Learn and trade with simple tools and Research Based Insights.
        </p>
      </motion.div>

      {/* Section 1 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#18181b] max-w-7xl mx-auto px-6 py-16 text-center space-y-6 rounded-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#7ac678]">
          Unlock Research Based Insights With Krishna Pathak
        </h2>
        <p className="text-lg">
          Welcome to Krishna Pathak's Insight Hub, where we combine valuable
          knowledge with trading insights. We don't just offer recommendations;
          we explain the reasoning behind every trade and provide chart
          explanations with clear logic, making it easy for anyone to learn,
          regardless of age or background.
        </p>
        <p className="text-lg">
          Join us to keep learning, expand your understanding, and take the
          first step in your Learning journey.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 py-16 md:min-h-[500px]"
      >
        <motion.div
          variants={fadeUpVariant}
          className="w-full md:w-[60%] bg-[#18181b] p-8 md:px-8 md:py-16 rounded-xl flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#13B5E8]">
            Meet Krishna Pathak - Your SEBI Registered Research Analyst
          </h3>
          <p className="mb-4">
            Krishna Pathak is a SEBI Registered Research Analyst and the founder
            of WealthFino Capital, a platform dedicated to promoting financial
            education, disciplined investing, and research-driven learning for
            retail investors.
            <br />
            His qualifications include:
          </p>
          <ul className="space-y-3 text-base">
            {[
              "SEBI Registered Research Analyst (INH300009914)",
              "Certifications in NISM Series XV: Research Analyst, NSE Goal Planning",
              "Post Graduate Diploma in Management (PGDM)",
              "BSE Enlistment No - 5590",
              "Founder - WealthFino Capital",
            ].map((text, i) => (
              <motion.li key={i} variants={fadeUpVariant}>
                <CheckCircle className="inline mr-2 text-[#13B5E8]" />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={fadeUpVariant}
          className="w-full md:w-[40%] flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/assets/KP.png"
              alt="Krishna Pathak"
              width={420}
              height={420}
              className="rounded-xl shadow-[0_0_40px_#13B5E8] object-cover max-w-full h-auto cursor-pointer"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* New Section Between 2 and 3 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto p-8 md:px-8 md:py-16 bg-[#18181b] rounded-xl text-base space-y-5"
      >
        <h3 className="text-2xl font-bold text-[#7ac678]">
          Commitment to Transparency and Investor Awareness
        </h3>
        <p>
          As a professional regulated by the Securities and Exchange Board of
          India (SEBI), Krishna provides:
        </p>
        <ul className="space-y-3 text-base">
          {[
            "Equity research based on publicly available information",
            "Market insights grounded in technical and fundamental analysis",
            "Research-based stock recommendations",
          ].map((text, i) => (
            <motion.li key={i} variants={fadeUpVariant}>
              <CheckCircle className="inline mr-2 text-[#7ac678]" />
              {text}
            </motion.li>
          ))}
        </ul>
        <p>
          His research is developed independently and shared in accordance with
          SEBI's guidelines to promote awareness, transparency, and investor
          understanding.
        </p>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 py-16 md:min-h-[500px]"
      >
        <motion.div
          variants={fadeUpVariant}
          className="w-full bg-[#18181b] p-8 md:px-8 md:py-16 rounded-xl flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#13B5E8]">
            What an SEBI Registered Research Analyst Can Do
          </h3>
          <p className="mb-4">
            As per SEBI (Research Analyst) Regulations, Krishna Pathak is
            authorized to:
          </p>
          <ul className="space-y-3 text-base">
            {[
              "Publish independent research reports and views on securities and market trends",
              "Share non-advisory insights based on objective analysis and research",
              "Promote financial literacy and help investors understand market dynamics",
              "Support clients through well-researched, non-discretionary recommendations",
            ].map((text, i) => (
              <motion.li key={i} variants={fadeUpVariant}>
                <CheckCircle className="inline mr-2 text-[#13B5E8]" />
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl rounded-xl mx-auto p-8 md:px-8 md:py-16 bg-[#18181b] space-y-6"
      >
        <h3 className="text-2xl font-bold text-[#7ac678]">
          Beyond Research - A Mission to Educate
        </h3>
        <p>
          Krishna has been featured in leading financial and news platforms such
          as The Economic Times, CNBC, MSN, Inshorts, Investing.com, Asianet
          News, Stocktwits, and Moneycontrol, and is also recognized by MDRT
          (Million Dollar Round Table) for his financial insights.
        </p>
        <p>
          More than just a market researcher, Krishna Kumar Pathak is a mentor
          and educator focused on promoting financial literacy and he encourages
          beginners to:
        </p>
        <ul className="space-y-3 text-base">
          {[
            "Start with education and awareness",
            "Set clear investment goals",
            "Practice risk management and diversification",
            "Focus on long-term learning and patience",
          ].map((text, i) => (
            <motion.li key={i} variants={fadeUpVariant}>
              <CheckCircle className="inline mr-2 text-[#7ac678]" />
              {text}
            </motion.li>
          ))}
        </ul>
        <p>
          Through research-based insights and educational content, Krishna aims
          to empower individuals to make informed financial decisions — without
          relying on tips or speculation.
        </p>
      </motion.div>

      {/* Section 5 – Mandatory Notice */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto p-8 md:px-6 md:py-12 mt-12 bg-[#18181b] rounded-xl text-white text-center space-y-4"
      >
        <h2 className="text-lg font-bold text-[#13B5E8] italic">DISCLAIMER</h2>
        <p className="text-base italic">
          Investment in the securities market is subject to market risks. Please
          read all related documents carefully before investing. Trading in
          Futures & Options (F&O) carries a high level of risk and may not be
          suitable for all investors, as it depends heavily on market momentum
          and volatility. Registration granted by SEBI and certification from
          NISM in no way guarantee the performance of the intermediary or
          provide any assurance of returns to investors. Past performance is not
          indicative of future results.
        </p>
        <p className="text-base">
          Dear Members, it is mandatory to read and understand all Terms &
          Conditions, including: SEBI Guidelines Research Disclaimers User
          Guidelines Investor Charter Grievance Redressal Policy.
        </p>
        <p className="text-base">
          For more details, visit:{" "}
          <Link
            href="https://www.krishnapathak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#13B5E8] underline"
          >
            www.krishnapathak.com
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
