// app/refund-policy/page.jsx (Next.js App Router) OR src/components/SocialMediaDisclaimersPage.jsx
"use client";

import React from "react";

export default function SocialMediaDisclaimersPage() {
  return (
    
      <div className="max-w-4xl mx-auto  space-y-8">
        <header>
          <h1 className="text-3xl font-bold">Cancellation Policy</h1>
          <p className="mt-2 text-base text-gray-300">
           This Cancellation Policy sets out the conditions under which cancellations are permitted for
purchases made through our website and mobile application. By placing an order, you
acknowledge and agree to this policy.
          </p>
        </header>

        {/* 1. Overview */}
        <section aria-labelledby="overview">
          <h2 id="overview" className="text-xl font-semibold">
            1. Digital Products & Services
          </h2>
          <p className="mt-2">
           All purchases of digital research reports, subscriptions, and market content are final and noncancellable
once delivered, accessed, or made available.
          </p>
        </section>

        {/* 2. Refund Eligibility */}
        <section aria-labelledby="eligibility">
          <h2 id="eligibility" className="text-xl font-semibold">
         2. Subscription Renewals
          </h2>

         
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
             Customers may request cancellation of future subscription renewals by providing written
notice at least 24-48 hours before the next billing cycle.
            </li>
            <li>
              Cancellation requests submitted after a renewal has been processed will not be entertained.
            </li>
          </ul>

          
        </section>

        {/* 3. Refund Process */}
        <section aria-labelledby="process">
          <h2 id="process" className="text-xl font-semibold">
           3. Pre-Payment Stage
          </h2>
          <p className="mt-2">Orders may be cancelled only before payment completion. Once a transaction is successful, the
request will be governed by this policy.</p>
          
        </section>

        {/* 4. Exclusions */}
        <section aria-labelledby="exclusions">
          <h2 id="exclusions" className="text-xl font-semibold">
           4. Cancellation by Company
          </h2>
          <p className="mt-2">We reserve the right to cancel any order or subscription in cases of:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>
              Non-receipt of payment,
            </li>
            <li>Technical errors preventing delivery, or</li>
            <li>
              Breach of our Terms and Conditions.
            </li>
            
          </ul>
          <p className="mt-2">
            If payment has been received but no service has been delivered, such cases will be treated in line
with our Refund Policy.
          </p>
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
