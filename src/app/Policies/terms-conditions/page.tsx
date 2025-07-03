"use client";

import Link from "next/link";
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        TERMS AND CONDITIONS FOR RESEARCH ANALYST SERVICES
      </h2>

      <div className="mb-4">
        <p>
          <strong>Research Analyst:</strong> Krishna Kumar Pathak
        </p>
        <p>
          <strong>SEBI Registration No.</strong> INH300009914
        </p>
        <p>
          <strong>BSE Enlistment No.:</strong> 5590
        </p>
      </div>

      <div className="space-y-4 text-md">
        <div>
          <h3 className="text-lg font-semibold">
            1. PREAMBLE AND LEGAL CAPACITY
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">1.1. Parties and Legal Framework</h4>
            <p className="mb-2">
              These Terms and Conditions ("T&C") constitute a binding agreement
              between you ("User"/ "Client") and Krishna Kumar Pathak ("Research
              Analyst"/"RA"), registered with the Securities and Exchange Board
              of India (SEBI) as per Registration No. INH300009914 and enlisted
              with BSE, governing your use and receipt of research, analysis,
              and related services offered through digital or physical channels.
              This Agreement complies with the SEBI (Research Analysts)
              Regulations, 2014 ("SEBI RA Regulations"), Securities and Exchange
              Board of India Act, 1992 ("SEBI Act"), and all applicable
              circulars, notifications, and regulatory directives.
            </p>

            <h4 className="font-semibold">1.2. Regulatory Compliance</h4>
            <p>
              By availing the services of the Research Analyst, you acknowledge
              and agree to abide by the prevailing laws, regulations, and SEBI
              guidelines as may be amended from time to time. The RA operates
              strictly in accordance with the SEBI RA Regulations, and all
              research, reports, and services provided are subject to regulatory
              scrutiny.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. DEFINITIONS</h3>
          <ul className="list-disc list-inside pl-4">
            <li>
              <strong>"Research Analyst" (RA):</strong> An individual registered
              with SEBI and permitted to provide research and related analysis,
              advice, or recommendations regarding securities or the securities
              market
            </li>
            <li>
              <strong>"Client/User":</strong> Any person (individual, body
              corporate, partnership, or association) availing research or
              advisory services from the RA
            </li>
            <li>
              <strong>"Services":</strong> Includes but is not limited to
              research reports, market analysis, securities recommendations,
              investment strategies, and related communications
            </li>
            <li>
              <strong>"SEBI":</strong> Securities and Exchange Board of India,
              the regulator for securities markets in India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            3. ELIGIBILITY AND ACCEPTANCE
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">3.1. User Eligibility</h4>
            <p className="mb-2">
              By accepting these T&C, you confirm that you are:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>At least 18 years of age</li>
              <li>
                Legally competent to enter into a binding contract under the
                Indian Contract Act, 1872
              </li>
              <li>
                Not prohibited by law from using research analyst services
              </li>
            </ul>

            <h4 className="font-semibold">3.2. Acceptance</h4>
            <p>
              Your use of the RA's services, website, applications, or receipt
              of reports implies acceptance of these T&C, SEBI regulations,
              privacy policy, and all applicable disclaimers. If you disagree
              with any clause, you must discontinue usage.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">4. SCOPE OF SERVICES</h3>
          <div className="pl-4">
            <h4 className="font-semibold">4.1. Nature of Services</h4>
            <p className="mb-2">
              The RA provides research analysis, securities recommendations,
              general market outlook, and related services strictly as per SEBI
              RA Regulations. The scope may include:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>Research reports (equity, debt, macroeconomic)</li>
              <li>Investment strategy recommendations</li>
              <li>General market commentary and outlook</li>
              <li>Educational and informational material</li>
            </ul>

            <h4 className="font-semibold">
              4.2. No Portfolio Management or Distribution
            </h4>
            <p>
              The RA does not offer portfolio management, execution, trading,
              investment, or distribution services. All services are
              research-based, non-discretionary, and do not include handling or
              management of Client funds or securities.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            5. SEBI ACT, REGULATORY POLICY, & DISCLOSURES
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">5.1. SEBI Act Compliance</h4>
            <p>
              The RA fully complies with the SEBI Act, 1992, SEBI (Research
              Analysts) Regulations, 2014, and relevant circulars. All research
              and recommendations are prepared independently, with integrity and
              transparency.
            </p>

            <h4 className="font-semibold">5.2. Regulatory Disclosures</h4>
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Registration:</strong> Krishna Kumar Pathak is
                registered as a Research Analyst with SEBI (INH300009914) and
                enlisted with BSE (5590)
              </li>
              <li>
                <strong>Conflicts of Interest:</strong> Any actual or potential
                conflicts of interest, material or otherwise, shall be disclosed
                in research reports or communications as per SEBI rules
              </li>
              <li>
                <strong>Compensation:</strong> The RA is compensated only by the
                Client for research services and does not receive compensation
                from companies covered in the research unless expressly
                disclosed
              </li>
              <li>
                <strong>Ownership of Securities:</strong> The RA shall disclose
                any actual/beneficial ownership of 1% or more in the securities
                covered, as mandated by SEBI
              </li>
            </ul>

            <h4 className="font-semibold">5.3. Risk Disclosures</h4>
            <ul className="list-disc list-inside pl-4">
              <li>
                Investment in securities markets is inherently risky. Past
                performance is not indicative of future returns
              </li>
              <li>
                Users are advised to make independent investment decisions after
                consulting with their registered financial advisor
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            6. SERVICE DELIVERY AND LIMITATIONS
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">6.1. Communication</h4>
            <p>The RA may deliver research and analysis through:</p>
            <ul className="list-disc list-inside pl-4">
              <li>
                Email, messaging apps, websites, mobile applications, or direct
                meetings
              </li>
            </ul>

            <h4 className="font-semibold">6.2. Accuracy and Timeliness</h4>
            <p>
              The RA strives for accuracy and timely delivery of research, but
              cannot guarantee or warrant uninterrupted, error-free, or
              real-time data dissemination.
            </p>

            <h4 className="font-semibold">6.3. No Guarantees</h4>
            <p>
              Research recommendations are based on publicly available
              information and best analytical practices. The RA does not
              guarantee any specific outcome, profit, or success from the use of
              research reports or recommendations.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            7. USER OBLIGATIONS AND CONDUCT
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">7.1. Responsible Use</h4>
            <p>The User must:</p>
            <ul className="list-disc list-inside pl-4">
              <li>
                Use research and analysis solely for personal, non-commercial
                purposes
              </li>
              <li>
                Not reproduce, redistribute, resell, or exploit any part of the
                research or reports without prior written consent of the RA
              </li>
              <li>
                Provide accurate and up-to-date information as required for
                service delivery
              </li>
            </ul>

            <h4 className="font-semibold">7.2. Compliance with Laws</h4>
            <p>
              Users are responsible for their own compliance with applicable
              securities laws, rules, and regulations.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            8. FEES, PAYMENT, AND TAXATION
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">8.1. Fees</h4>
            <p>
              Service fees, if applicable, will be clearly communicated prior to
              the provision of research services. All fee structures comply with
              SEBI guidelines and do not include hidden charges.
            </p>

            <h4 className="font-semibold">8.2. Payment Terms</h4>
            <p>
              Payments shall be made through approved channels. Non-payment may
              result in suspension or termination of services.
            </p>

            <h4 className="font-semibold">8.3. Taxes</h4>
            <p>
              The User is responsible for all applicable taxes (including GST)
              as per Indian law. The RA will issue valid tax invoices for all
              paid services.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            9. PRIVACY AND CONFIDENTIALITY
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">9.1. Privacy Policy</h4>
            <p>
              User information is collected, stored, and processed in accordance
              with the Privacy Policy, aligned with SEBI and IT Act
              requirements. Personal data will not be shared with third parties
              except as required by law or with user consent.
            </p>

            <h4 className="font-semibold">9.2. Confidentiality</h4>
            <p>
              All client data and personal information shall be treated as
              strictly confidential, except where disclosure is mandated by
              regulators or authorities.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            10. INTELLECTUAL PROPERTY RIGHTS
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">10.1. Ownership</h4>
            <p>
              All research reports, analysis, data, website content, and
              proprietary material are the intellectual property of the RA and
              protected under Indian copyright laws.
            </p>

            <h4 className="font-semibold">10.2. Limited License</h4>
            <p>
              Users are granted a limited, non-transferable, non-exclusive
              license to access and use the research reports solely for
              personal, non-commercial purposes.
            </p>

            <h4 className="font-semibold">10.3. Restrictions</h4>
            <p>
              Any unauthorized use, reproduction, or distribution may result in
              legal action and termination of services.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">11. LIABILITY AND INDEMNITY</h3>
          <div className="pl-4">
            <h4 className="font-semibold">11.1. Limitation of Liability</h4>
            <p>The RA shall not be liable for:</p>
            <ul className="list-disc list-inside pl-4">
              <li>
                Any direct, indirect, incidental, special, consequential, or
                punitive damages arising out of use or reliance on research
                reports
              </li>
              <li>
                Any loss resulting from investment decisions, trading, or
                financial losses incurred by Users
              </li>
              <li>
                Unforeseen circumstances, technical failures, or third-party
                errors beyond RA's reasonable control
              </li>
            </ul>

            <h4 className="font-semibold">11.2. Indemnification</h4>
            <p>
              The User agrees to indemnify and hold harmless the RA, affiliates,
              employees, and agents from any claims, losses, or liabilities
              resulting from breach of these T&C or violation of applicable
              laws.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            12. RISK WARNING AND DISCLAIMER
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">12.1. General Disclaimer</h4>
            <ul className="list-disc list-inside pl-4">
              <li>
                Investment in securities markets is subject to market risks.
                Please read all scheme and related documents carefully before
                investing
              </li>
              <li>
                The RA does not guarantee any return or capital protection
              </li>
              <li>
                All opinions, recommendations, and analysis are for
                informational and educational purposes only
              </li>
              <li>Past performance does not guarantee future results</li>
              <li>The User is solely responsible for investment decisions</li>
            </ul>

            <h4 className="font-semibold">
              12.2. SEBI Disclaimer (Recommended Wording)
            </h4>
            <p className="italic">
              "Registration granted by SEBI, and BSE enlistment, do not in any
              manner guarantee the performance of the Research Analyst or
              provide any assurance of returns to investors. The securities
              quoted, if any, are for illustration only and are not
              recommendatory. Investment in securities market is subject to
              market risks, read all related documents carefully before
              investing."
            </p>

            <h4 className="font-semibold">12.3. No Personalized Advice</h4>
            <p>
              The RA does not provide individually tailored investment advice,
              portfolio management, or distribution services. For personalized
              advice, consult a qualified, SEBI-registered financial advisor.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">13. GRIEVANCE REDRESSAL</h3>
          <div className="pl-4">
            <h4 className="font-semibold">13.1. Redressal Mechanism</h4>
            <p>
              If you have any complaints, queries, or grievances regarding
              services, you may contact:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>Name: Krishna Kumar Pathak</li>
              <li>
                Email:{" "}
                <Link
                  href={"mailto:skrishna.sk4@gmail.com"}
                  className="text-[#13B5E8]"
                >
                  skrishna.sk4@gmail.com
                </Link>
              </li>
              <li>Phone: +91 9883455700</li>
              <li>
                SEBI SCORES: You may also escalate unresolved grievances to SEBI
                through SCORES{" "}
                <Link
                  href={"https://scores.sebi.gov.in/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#13B5E8]"
                >
                  https://scores.sebi.gov.in
                </Link>
              </li>
            </ul>

            <h4 className="font-semibold">13.2. Resolution Timelines</h4>
            <p>
              The RA will endeavor to resolve all grievances within 30 days, in
              line with SEBI regulations.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">14. RIGHTS OF INVESTORS</h3>
          <div className="pl-4">
            <h4 className="font-semibold">14.1. Rights Ensured</h4>
            <ul className="list-disc list-inside pl-4">
              <li>
                <strong>Right to Privacy and Confidentiality:</strong> Your
                personal and financial data will be protected
              </li>
              <li>
                <strong>Right to Transparent Practices:</strong> Fees, charges,
                and business practices will be transparently disclosed
              </li>
              <li>
                <strong>Right to Adequate Information:</strong> You will receive
                comprehensive information on research reports, disclaimers, and
                disclosures
              </li>
              <li>
                <strong>Right to be Heard:</strong> You have the right to
                present complaints and expect prompt redressal
              </li>
              <li>
                <strong>Right to Exit:</strong> You may discontinue services at
                any time, subject to refund and cancellation policy
              </li>
              <li>
                <strong>Right to Feedback:</strong> You may provide feedback or
                suggestions on services rendered
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">15. TERMINATION OF SERVICES</h3>
          <div className="pl-4">
            <h4 className="font-semibold">15.1. Termination by User</h4>
            <p>
              Users may terminate this agreement at any time by providing
              written notice. No refunds shall be provided for services already
              delivered.
            </p>

            <h4 className="font-semibold">15.2. Termination by RA</h4>
            <p>
              The RA reserves the right to terminate services for breach of
              these T&C, misuse of services, non-payment, or regulatory reasons.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">16. AMENDMENTS AND UPDATES</h3>
          <div className="pl-4">
            <h4 className="font-semibold">16.1. Updates</h4>
            <p>
              These T&C may be updated from time to time in accordance with
              changes in laws, SEBI regulations, or business practices. Users
              will be notified of any material changes through the website or
              other communication channels.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            17. GOVERNING LAW AND JURISDICTION
          </h3>
          <div className="pl-4">
            <h4 className="font-semibold">17.1. Applicable Law</h4>
            <p>
              These T&C are governed by and construed in accordance with the
              laws of India.
            </p>

            <h4 className="font-semibold">17.2. Jurisdiction</h4>
            <p>
              Any disputes arising under or relating to these T&C shall be
              subject to the exclusive jurisdiction of the courts. e.g.,
              Durgapur, West Bengal.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">18. MISCELLANEOUS</h3>
          <div className="pl-4">
            <h4 className="font-semibold">18.1. Severability</h4>
            <p>
              If any provision of these T&C is found invalid or unenforceable,
              the remaining provisions will remain in full force and effect.
            </p>

            <h4 className="font-semibold">18.2. Entire Agreement</h4>
            <p>
              These T&C constitute the entire agreement between the User and the
              RA regarding research services and supersede any prior
              understandings or agreements.
            </p>

            <h4 className="font-semibold">18.3. Contact Information</h4>
            <p>
              For questions regarding these T&C or services, contact: Krishna
              Kumar Pathak SEBI Registered Research Analyst (INH300009914) BSE
              Enlistment No- 5590.
            </p>
          </div>
        </div>

        <div className="pt-4 text-sm italic text-blue-50">
          <h2 className="text-lg font-semibold">Disclaimer: </h2>
          These Terms and Conditions are in compliance with SEBI (Research
          Analysts) Regulations, 2014 and other applicable laws. The terms are
          subject to change as per regulatory requirements and users are advised
          to review them periodically.
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
