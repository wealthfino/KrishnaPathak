"use client";

import React from "react";

const RefundCancellationPolicyPage = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        REFUND & CANCELLATION POLICY
      </h2>

      <div className="mb-4">
        <p>
          <strong>Issued by:</strong> Krishna Kumar Pathak
        </p>
        <p>
          <strong>SEBI Registered Research Analyst - INH300009914</strong>
        </p>
        <p>
          <strong>BSE Enlistment No:</strong> 5590
        </p>
      </div>

      <div className="space-y-6 text-md">
        <div>
          <h3 className="text-lg font-semibold">1. No Refund Policy</h3>
          <p>
            All services provided are research-based and delivered digitally.
            Once a subscription is initiated or service access is granted,{" "}
            <strong>no cancellation or refund</strong> shall be entertained
            under any condition, including dissatisfaction or market outcomes,
            in accordance with SEBI Research Analyst Regulations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            2. Refunds Allowed Only for Valid Payment Failures
          </h3>
          <p className="mb-2">
            Refunds shall be considered{" "}
            <strong>only in the following genuine scenarios:</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>Duplicate Payments:</strong> If the user has made more
              than one successful payment for the same service
            </li>
            <li>
              <strong>Failed Transactions:</strong> Where payment is debited but
              service is not delivered and no access was granted
            </li>
          </ul>
          <p className="mt-2">
            <strong>To request a refund</strong>, the user must submit a written
            request within <strong>7 days</strong> of the transaction date,
            along with valid proof (bank statement, UTR, or payment
            confirmation). After verification, valid refunds will be processed
            within <strong>7-10 business days</strong> through the original
            payment method.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            3. Subscription Cancellation
          </h3>
          <p>
            There is <strong>no mid-term cancellation</strong> once the service
            has commenced. Non-renewal at the end of the subscription term will
            result in automatic discontinuation of service access.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            4. Legal Jurisdiction & Limitation of Liability
          </h3>
          <p className="mb-2">
            All disputes, if any, shall be subject to the exclusive jurisdiction
            of the courts located in <strong>Durgapur, West Bengal</strong>,
            India.
          </p>
          <p className="mb-2">
            Krishna Kumar Pathak and his associated brand shall not be held
            liable for any market losses, user decisions, or technical failures.
            Services are provided strictly on a research and educational basis.
          </p>
        </div>

        <div>
          <p className="text-lg font-bold italic">Disclaimer:</p>
          <p className="italic">
            Investment in securities is subject to market risks. Research
            services are not a guarantee of returns. Users must exercise
            discretion and consult a financial advisor before acting. Krishna
            Kumar Pathak (SEBI Registered Research Analyst - INH300009914) is
            not responsible for any kind of loss, overtrading, excessive
            trading, missed profits, or damages of any nature. All decisions are
            solely the responsibility of the user. Market investments are
            subject to risk.
          </p>
        </div>
      </div>
    </>
  );
};

export default RefundCancellationPolicyPage;
