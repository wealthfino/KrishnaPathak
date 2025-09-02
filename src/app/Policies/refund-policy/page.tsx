// app/refund-policy/page.jsx (Next.js App Router) OR src/components/SocialMediaDisclaimersPage.jsx
"use client";

import React from "react";

export default function SocialMediaDisclaimersPage() {
  return (
    
      <div className="max-w-4xl mx-auto  space-y-8">
        <header>
          <h1 className="text-3xl font-bold">Refund Policy</h1>
          <p className="mt-2 text-base text-gray-300">
            This Refund Policy governs the conditions under which refunds may be
            granted for purchases made through our website and mobile
            application. By completing a purchase on our platform, you
            acknowledge, understand, and agree to be bound by the terms set
            forth in this policy.
          </p>
        </header>

        {/* 1. Overview */}
        <section aria-labelledby="overview">
          <h2 id="overview" className="text-xl font-semibold">
            1. Overview
          </h2>
          <p className="mt-2">
            This Refund Policy applies to all purchases made via our platform,
            including but not limited to digital research reports, subscriptions,
            educational content, and market insights. Our objective is to ensure
            transparency and protect the interests of all users. Please note
            that by purchasing any of our offerings, you agree to this Refund
            Policy in addition to our Terms &amp; Conditions.
          </p>
        </section>

        {/* 2. Refund Eligibility */}
        <section aria-labelledby="eligibility">
          <h2 id="eligibility" className="text-xl font-semibold">
            2. Refund Eligibility
          </h2>

          <p className="mt-2">
            Refunds shall be permitted only under the following limited
            circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              <span className="font-medium">Duplicate Payments:</span> If you
              are charged more than once for the same transaction.
            </li>
            <li>
              <span className="font-medium">Technical Errors:</span> When
              payment is deducted but the research report, subscription, or
              service is not delivered due to a verified technical issue.
            </li>
          </ul>

          <p className="mt-4 font-medium">Conditions for Refund Requests:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              A refund request must be submitted within seven (7) calendar days
              from the transaction date.
            </li>
            <li>
              The request must be supported with valid proof, such as a bank
              statement, UTR number, transaction ID, or payment gateway
              confirmation.
            </li>
            <li>
              Once a research report, digital content, or subscription has been
              delivered or accessed, refunds are not allowed.
            </li>
          </ul>
        </section>

        {/* 3. Refund Process */}
        <section aria-labelledby="process">
          <h2 id="process" className="text-xl font-semibold">
            3. Refund Process
          </h2>
          <p className="mt-2">To initiate a refund request, the customer must:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              Send a written request to{" "}
              <a
                href="mailto:help@krishnapathak.com"
                className="underline hover:no-underline"
              >
                help@krishnapathak.com
              </a>{" "}
              within the 7-day period.
            </li>
            <li>
              Provide necessary proof of payment such as transaction ID, UTR, or
              bank statement.
            </li>
            <li>Allow 5–7 working days for compliance validation.</li>
            <li>
              If approved, refunds will be credited back to the original payment
              method within 7–10 business days, subject to standard banking
              timelines.
            </li>
          </ul>
        </section>

        {/* 4. Exclusions */}
        <section aria-labelledby="exclusions">
          <h2 id="exclusions" className="text-xl font-semibold">
            4. Exclusions
          </h2>
          <p className="mt-2">Refunds will not be provided in the following cases:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              Once digital research reports, subscriptions, or market insight
              content have been delivered or accessed.
            </li>
            <li>Subscription renewals after delivery or access of services.</li>
            <li>
              Requests based on dissatisfaction with content quality,
              interpretation, or market outcomes.
            </li>
            <li>Requests submitted beyond the 7-day window.</li>
          </ul>
        </section>

        {/* Disclaimer */}
        <aside
          aria-label="Investment Risk Disclaimer"
          className="bg-gray-800 p-5 rounded-2xl shadow-md"
        >
          <p className="text-lg font-bold italic mb-2">Disclaimer</p>
          <p className="italic text-sm leading-relaxed text-gray-200">
            Investment in securities is subject to market risks. Research
            services are not a guarantee of returns. Users must exercise
            discretion and consult a financial advisor before acting. Krishna
            Kumar Pathak (SEBI Registered Research Analyst - INH300009914) is
            not responsible for any kind of loss, overtrading, excessive
            trading, missed profits, or damages of any nature. All decisions are
            solely the responsibility of the user. Market investments are
            subject to risk.
          </p>
        </aside>
      </div>
    
  );
}
