"use client";

import React from "react";

const ConflictOfInterestPolicyPage = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        INTERNAL POLICY ON CONFLICT OF INTEREST
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
          <h3 className="text-lg font-semibold">1. Objective</h3>
          <p>
            This Internal Policy on Conflict of Interest ("Policy") is
            formulated in compliance with <strong>Regulation 15(1)</strong> of
            the <strong>SEBI (Research Analyst) Regulations, 2014</strong> and
            sets out principles and mechanisms adopted by Krishna Kumar Pathak
            ("Research Analyst" or "Analyst") to{" "}
            <strong>
              identify, avoid, disclose, and manage any conflict of interest
            </strong>{" "}
            arising during the course of research activity.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. Definitions</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              <strong>Conflict of Interest:</strong> Any circumstance that may
              give rise to a personal or professional interest conflicting with
              the interest of Clients or impacting the Analyst's objectivity.
            </li>
            <li>
              <strong>Client:</strong> A person or entity who receives research
              services from the Analyst.
            </li>
            <li>
              <strong>Immediate Relative:</strong> As defined under SEBI
              (Prohibition of Insider Trading) Regulations, 2015.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">3. Guiding Principles</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              Ensure <strong>honesty, integrity, and independence</strong> in
              research and recommendation activities
            </li>
            <li>
              Maintain a <strong>clear separation</strong> between research and
              commercial interests
            </li>
            <li>
              Always act in the <strong>best interest of clients</strong>,
              subject to regulatory frameworks
            </li>
            <li>
              <strong>Disclose material interests or conflicts</strong> before
              or at the time of recommendation
            </li>
            <li>
              Uphold the <strong>fiduciary duties</strong> imposed under SEBI RA
              Regulations
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            4. Identification of Conflict Scenarios
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-blue-50">
              <thead className="bg-blue-200 text-[#18181b] ">
                <tr>
                  <th className="border border-[#18181b] p-2">Scenario</th>
                  <th className="border border-[#18181b] p-2">Policy Action</th>
                </tr>
              </thead>
              <tbody className="text-black bg-white text-center">
                <tr>
                  <td className="border border-[#18181b] p-2">
                    Analyst holds shares in recommended stock
                  </td>
                  <td className="border border-[#18181b] p-2">
                    Mandatory disclosure in report
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#18181b] p-2">
                    Immediate relative holds financial interest
                  </td>
                  <td className="border border-[#18181b] p-2">
                    Disclosure as per SEBI RA norms
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#18181b] p-2">
                    Analyst has received any consideration from issuer company
                  </td>
                  <td className="border border-[#18181b] p-2">
                    Prohibited unless fully disclosed and compliant
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#18181b] p-2">
                    Analyst performs services for company under coverage
                  </td>
                  <td className="border border-[#18181b] p-2">
                    Only permitted if legally disclosed and separated
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#18181b] p-2">
                    Dual role in advisory or distribution business
                  </td>
                  <td className="border border-[#18181b] p-2">
                    Not applicable; segregation maintained as per SEBI
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            5. Policy Measures to Manage Conflict
          </h3>
          <div className="space-y-4 pl-4">
            <div>
              <h4 className="font-medium">1. Disclosure in Reports</h4>
              <p>
                Every research report shall include disclosures required under{" "}
                <strong>Regulation 19(1)(e)</strong>, stating:
              </p>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>Analyst's or relatives' ownership in the stock</li>
                <li>
                  Whether the Analyst has served or received any benefit from
                  the issuer
                </li>
                <li>
                  Whether the subject company has been a client in the past 12
                  months
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">2. Firewalls and Role Separation</h4>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  The research function is <strong>fully independent</strong>{" "}
                  from any commercial or distribution activity
                </li>
                <li>
                  No incentive, compensation, or consideration is accepted from
                  companies for coverage
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">
                3. No Influence from Market Participants
              </h4>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  Analysts shall not be influenced by promoters, brokers, or
                  third parties in any research assignment
                </li>
                <li>
                  No participation in IPO allocation decisions or fund raising
                  by covered companies
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">4. Restricted List Maintenance</h4>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  A restricted list is maintained and updated regularly for
                  companies where conflict may exist
                </li>
                <li>
                  No reports or commentary shall be issued on such companies
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium">5. Regular Monitoring</h4>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  Internal audits and compliance checks are conducted to ensure
                  conflict management
                </li>
                <li>
                  Every research call, note, or post is verified for compliance
                  and disclosure
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">6. Training & Awareness</h4>
          <p>The Analyst and team undergo periodic training on:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>SEBI RA Regulations</li>
            <li>Conflict identification and avoidance</li>
            <li>Research ethics and compliance standards</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">7. Disclosure to Clients</h3>
          <p>Clients are informed of:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>Analyst registration details (INH300009914)</li>
            <li>Potential conflicts, if any, in every communication</li>
            <li>
              Their right to seek clarification or lodge complaints regarding
              conflict
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            8. Non-Compliance & Disciplinary Action
          </h3>
          <p>
            Any breach of this Policy shall be treated as a{" "}
            <strong>serious violation</strong>. Disciplinary action may include:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>Reporting to SEBI/BSE if required</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">9. Record keeping</h3>
          <p>
            All disclosures, research notes, logs of recommendations, and
            conflict declarations are preserved for a minimum of{" "}
            <strong>5 years</strong> as mandated by{" "}
            <strong>Regulation 25 of SEBI RA Regulations</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">10. Review & Updates</h3>
          <p>
            This policy shall be reviewed <strong>annually</strong> or as
            required by changes in law or business practice, and updated
            accordingly.
          </p>
        </div>

        <div className="italic">
          <p className="text-lg font-bold">Disclaimer:</p>
          <p>
            "Investment in securities market are subject to market risks. Read
            all the related documents carefully before investing." We are not
            responsible for your Profit and Loss. Past performance is no
            guarantee of future results.
          </p>
          <p className="mt-2">
            Registration granted by SEBI, membership of BASL (in case of IAs)
            and certification from NISM in no way guarantee performance of the
            intermediary or provide any assurance of returns to investors. The
            investor is requested to take into consideration all the risk
            factors before actually trading in derivative contracts.
          </p>
        </div>
      </div>
    </>
  );
};

export default ConflictOfInterestPolicyPage;
