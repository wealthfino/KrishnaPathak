"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

const InvestorCharterPage = () => {
  return (
    <div className="space-y-8 text-white text-base">
      <div>
        <h2 className="text-3xl text-center font-bold border-b-2 border-white pb-2">
          ANNEXURE - A
        </h2>
      </div>

      {/* Section A */}
      <div className="bg-green-200 p-4 rounded-md border border-black text-black">
        <h3 className="text-xl font-semibold mb-2">
          Vision and Mission Statements for investors.
        </h3>
        <div className="border border-black p-4 space-y-2">
          <p className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <span>
              <strong>Vision</strong> - Invest with knowledge & safety.
            </span>
          </p>
          <p className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <span>
              <strong>Mission</strong> - Every investor should be able to invest
              in right investment products based on their needs, manage and
              monitor them to meet their goals, access reports and enjoy
              financial wellness.
            </span>
          </p>
        </div>
      </div>

      {/* Section B */}
      <div className="bg-blue-200 p-4 rounded-md border border-black text-black">
        <h3 className="text-xl font-semibold mb-2">
          Details of business transacted by the Research Analyst with respect to
          the investors.
        </h3>
        <div className="border border-black p-4 space-y-2">
          {[
            "To publish research report based on the research activities of the RA",
            "To provide an independent unbiased view on securities.",
            "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
            "To provide research recommendation, based on analysis of publicly available information and known observations.",
            "To conduct audit annually",
            "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
            "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.",
          ].map((item, index) => (
            <p key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
              <span className="break-words break-all">{item}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Section C */}
      <div className="bg-yellow-200 p-4 rounded-md border border-black text-black">
        <h3 className="text-xl font-semibold mb-2">
          Details of services provided to investors (No Indicative Timelines).
        </h3>
        <div className="border border-black p-4 space-y-2">
          {/* Main Point 1 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              <span>Onboarding of clients</span>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>Sharing of terms and conditions of research services</li>
                <li>Completing KYC of fee paying clients</li>
              </ul>
            </div>
          </div>

          {/* Main Point 2 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              <span>Disclosure to clients:</span>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                  To disclose, information that is material for the client to
                  make an informed decision, including details of its business
                  activity, disciplinary history, the terms and conditions of
                  research services, details of associates, risks and conflicts
                  of interest, if any
                </li>
                <li>
                  To disclose the extent of use of Artificial Intelligence tools
                  in providing research services
                </li>
                <li>
                  To disclose, while distributing a third party research report,
                  any material conflict of interest of such third party research
                  provider or provide web address that directs a recipient to
                  the relevant disclosures
                </li>
                <li>
                  To disclose any conflict of interest of the activities of
                  providing research services with other activities of the
                  research analyst.
                </li>
              </ul>
            </div>
          </div>

          {/* Main Point 3 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              To distribute research reports and recommendations to the clients
              without discrimination.
            </div>
          </div>

          {/* Main Point 4 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              To maintain confidentiality w.r.t publication of the research
              report until made available in the public domain.
            </div>
          </div>

          {/* Main Point 5 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              To respect data privacy rights of clients and take measures to
              protect unauthorized use of their confidential information.
            </div>
          </div>

          {/* Main Point 6 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              To disclose the timelines for the services provided by the
              research analyst to clients and ensure adherence to the said
              timelines.
            </div>
          </div>

          {/* Main Point 7 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              To provide clear guidance and adequate caution notice to clients
              when providing recommendations for dealing in complex and
              high-risk financial products/services.
            </div>
          </div>

          {/* Main Point 8 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>To treat all clients with honesty and integrity.</div>
          </div>

          {/* Main Point 9 */}
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              To ensure confidentiality of information shared by clients unless
              such information is required to be provided in furtherance of
              discharging legal obligations or a client has provided specific
              consent to share such information.
            </div>
          </div>
        </div>
      </div>

      {/* Section D */}
      <div className="bg-green-200 p-4 rounded-md border border-black text-black">
        <h3 className="text-xl font-semibold mb-2">
          Details of grievance redressal mechanism and how to access it.
        </h3>
        <div className="border border-black p-4 space-y-2">
          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div className="break-words break-all">
              <p>
                Investor can lodge complaint/grievance against Research Analyst
                in the following ways:
              </p>
              <p className="mt-2">
                <strong>
                  Mode of filing the complaint with research analyst:
                </strong>{" "}
                <br />
                In case of any grievance / complaint, an investor may approach
                the concerned Research Analyst who shall strive to redress the
                grievance immediately, but not later than 21 days of the receipt
                of the grievance.
              </p>
              <p className="mt-2">
                <strong>
                  Mode of filing the complaint on SCORES or with Research
                  Analyst Administration and Supervisory Body (RAASB):
                </strong>{" "}
                <br />
                i. SCORES 2.0 (a web based centralized grievance redressal
                system of SEBI for facilitating effective grievance redressal in
                time-bound manner) <br />(
                <Link
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#13B5E8]"
                >
                  https://scores.sebi.gov.in
                </Link>
                )
              </p>
              <p className="mt-2">
                <strong>Two level review</strong> for complaint/grievance
                against Research Analyst:
              </p>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>First review done by designated body (RAASB)</li>
                <li>Second review done by SEBI</li>
              </ul>
              <p className="mt-2">ii. Email to designated email ID of RAASB</p>
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              If the Investor is not satisfied with the resolution provided by
              the Market Participants, then the Investor has the option to file
              the complaint/ grievance on SMARTODR platform for its resolution
              through online conciliation or arbitration.
            </div>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
            <div>
              With regard to physical complaints, investors may send their
              complaints to: <br />
              <span>
                Office of Investor Assistance and Education, Securities and
                Exchange Board of India, SEBI Bhavan. Plot No. C4-A, 'G' Block,
                Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section E */}
      <div className="bg-blue-200 p-4 rounded-md border border-black text-black">
        <h3 className="text-xl font-semibold mb-2">Rights of investors.</h3>
        <div className="border border-black p-4 space-y-2">
          {[
            "Right to Privacy and Confidentiality",
            "Right to Transparent Practices",
            "Right to fair and Equitable Treatment",
            "Right to Adequate Information",
            "Right to Initial and Continuing Disclosure",
            "Right to receive information about all the statutory and regulatory disclosures",
            "Right to Fair & True Advertisement",
            "Right to Awareness about Service Parameters and Turnaround Times",
            "Right to be informed of the timelines for each service",
            "Right to be Heard and Satisfactory Grievance Redressal",
            "Right to have timely redressal",
            "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst",
            "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services",
            "Additional Rights to vulnerable consumers",
            "Right to get access to services in a suitable manner even if differently abled",
            "Right to provide feedback on the financial products and services used",
            "Right against coercive, unfair, and one-sided clauses in financial agreements",
          ].map((item, index) => (
            <p key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
              <span className="break-words break-all">{item}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Section F - Do's and Don'ts */}
      <div className="bg-yellow-200 p-4 rounded-md border border-black text-black">
        <h3 className="text-xl font-semibold mb-6">
          Expectations of the Investors (Responsibilities of Investors)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Do's */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-center">Do's</h4>
            <div className="border border-black p-4 space-y-2">
              {[
                "Always deal with SEBI registered Research Analyst.",
                "Ensure that the Research Analyst has a valid registration certificate. Check for SEBI registration number.",
                "Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link: (https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14)",
                "Always pay attention towards disclosures made in the research reports before investing.",
                "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)",
                "Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.",
                "Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.",
                "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.",
                "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.",
                "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.",
                "Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.",
                "Inform SEBI about Research Analyst offering assured or guaranteed returns.",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-700 mr-2 mt-1 shrink-0" />
                  <span className="break-words break-all">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts */}
          <div>
            <h4 className="text-lg font-bold mb-2 text-center">Don'ts</h4>
            <div className="border border-black p-4 space-y-2">
              {[
                "Do not provide funds for investment to the Research Analyst.",
                "Don't fall prey to luring advertisements or market rumours.",
                "Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.",
                "Do not share login credentials and password of your trading and demat accounts with the Research Analyst.",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-600 mr-2 mt-1 shrink-0" />
                  <span className="break-words break-all">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCharterPage;
