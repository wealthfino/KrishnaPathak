"use client";

import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">PRIVACY POLICY</h2>

      <div className="space-y-6 text-md">
        <div>
          <h3 className="text-lg font-semibold">1. Introduction</h3>
          <p>
            This Privacy & Data Protection Policy ("Policy") outlines the
            practices followed by <strong>Mr. Krishna Kumar Pathak</strong>, a{" "}
            <strong>SEBI Registered Research Analyst</strong> (Registration No.{" "}
            <strong>INH300009914</strong>), operating under the brand name{" "}
            <strong>WealthFino</strong>, with respect to the{" "}
            <strong>
              collection, use, storage, processing, and disclosure
            </strong>{" "}
            of personal and sensitive personal information.
          </p>
          <p className="mt-2">
            This Policy applies to all individuals ("User" or "You"), including
            free and paid users or clients, who access, register on, or engage
            with our{" "}
            <strong>website, mobile application, digital platform</strong>, or
            any other services—whether offered{" "}
            <strong>free of charge, by subscription, or for a fee</strong>.
          </p>
          <p className="mt-2">
            By accessing or using any of our services, and by voluntarily
            submitting your personal information,{" "}
            <strong>you provide your informed and explicit consent</strong> to
            the collection and processing of your data in accordance with the
            terms of this Policy.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">2. Scope</h3>
          <p>
            This Privacy Policy applies to all users, clients, vendors, and
            partners ("you" or "User") who access or interact with the services
            of <strong>WealthFino</strong>, operated by:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              <strong>Name</strong>: Krishna Kumar Pathak
            </li>
            <li>
              <strong>SEBI Registered Research Analyst</strong>: INH300009914
            </li>
            <li>
              <strong>Brand Name</strong>: WealthFino
            </li>
            <li>
              <strong>BSE Enlistment No.</strong>: 5590
            </li>
          </ul>
          <p className="mt-2">
            It governs the lawful collection, processing, storage, and transfer
            of Personal Data as per:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              The <strong>SEBI (Research Analyst) Regulations, 2014</strong>
            </li>
            <li>
              <strong>SEBI circulars</strong>, BSE/NSE norms
            </li>
            <li>
              The <strong>Information Technology Act, 2000</strong>
            </li>
            <li>
              The <strong>Digital Personal Data Protection Act, 2023</strong>
            </li>
          </ul>
          <p className="mt-2">
            All data handled is strictly for permitted research analyst
            activities such as:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>Client onboarding and KYC Data</li>
            <li>SEBI-compliant research reports</li>
            <li>Subscription-based research services</li>
            <li>Record maintenance and regulatory reporting</li>
          </ul>
          <p className="mt-2">
            We do <strong>not offer</strong> portfolio management or
            execution-based advice. All data processing is secure, transparent,
            and within the framework of Indian law.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">3. Applicability</h3>
          <p>This Privacy Policy applies to all individuals who:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              Visit or use the mobile application, website, or online/offline
              platforms associated with WealthFino;
            </li>
            <li>
              Subscribe to services, research reports, or any form of
              communication offered by the Research Analyst;
            </li>
            <li>
              Share personal data for verification, KYC, or engagement purposes.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">4. Information Collected</h3>
          <div>
            <h4 className="font-medium mt-2">4.1 Scope of Collection</h4>
            <p>
              In compliance with Section 43A of the Information Technology Act,
              2000 and Rule 5 of the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011 ("SPDI Rules"), and pursuant to
              Regulation 18(1)(e) of the SEBI (Research Analyst) Regulations,
              2014, Mr. Krishna Kumar Pathak (SEBI Registration No.
              INH300009914), operating under the brand name "WealthFino",
              collects only such personal information that is necessary for
              lawful purposes, regulatory obligations, and provision of research
              services.
            </p>
            <p className="mt-2">
              No unnecessary or excessive information is collected. Only such
              personal data that is relevant to identity verification,
              communication, and lawful compliance shall be processed.
            </p>
          </div>

          <div>
            <h4 className="font-medium mt-4">
              4.2 Permitted Categories of Information
            </h4>
            <p>
              The following categories of personal information may be lawfully
              collected:
            </p>

            <div className="mt-2">
              <h5 className="font-medium">a. Identity Information</h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>Full name and DOB (as per PAN)</li>
                <li>Masked Aadhaar number (Collected with user consent)</li>
                <li>PAN card number and Date of birth (KYC verification)</li>
                <li>
                  Voter ID, Passport, or equivalent document (if submitted
                  voluntarily for KYC verification)
                </li>
              </ul>
              <p className="italic mt-1">
                Purpose: For establishing identity and fulfilling SEBI-mandated
                compliance (Regulation 16 and 18 of SEBI RA Regulations)
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">b. Contact Information</h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                  Mobile number (including Aadhaar-linked mobile number for
                  OTP-based e-consent)
                </li>
                <li>Alternate mobile number (if customer provided)</li>
                <li>Email address</li>
                <li>Permanent and correspondence address</li>
              </ul>
              <p className="italic mt-1">
                Purpose: For communication, verification, grievance redressal,
                and consent confirmation; also required under SEBI Code of
                Conduct for record-keeping and reporting purposes.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">c. Demographic Information</h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>Date of Birth</li>
                <li>Gender</li>
                <li>Nationality</li>
              </ul>
              <p className="italic mt-1">
                Purpose: To ensure legal capacity to contract and suitability
                assessment for receiving financial research material, as per
                SEBI RA Code of Conduct.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">d. Statutory KYC Information</h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>PAN and DOB (mandatory as per SEBI rules)</li>
                <li>
                  KRA/CKYC Identifier (if fetched from authorised KRAs like CVL
                  KRA or CAMS KRA)
                </li>
                <li>
                  Documents submitted under SEBI's prescribed KYC framework
                </li>
              </ul>
              <p className="italic mt-1">
                Purpose: Required for onboarding and lawful delivery of any
                SEBI-compliant research and analysis under Regulation 16 of the
                SEBI RA Regulations.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">
                e. Technical & Session Data (Automatically Collected)
              </h5>
              <p>
                In accordance with the Information Technology Act, 2000, IT
                Rules, 2011, and the Digital{" "}
                <strong>Personal Data Protection Act, 2023</strong>, we
                automatically collect certain technical and session-related
                information when you access our platform, including:
              </p>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>IP address</li>
                <li>Device type and operating system</li>
                <li>Browser type and version</li>
                <li>Date and time of access</li>
                <li>Location metadata (approximate, coarse level)</li>
                <li>Session cookies and user agent string</li>
              </ul>
              <p className="italic mt-1">
                Purpose: For ensuring security, preventing fraud, maintaining
                service quality, and complying with IT Act Section 43A.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">
                f. Consent Records & Communication Metadata
              </h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                  Mobile or Email OTP timestamps, IP Address, consent
                  verification logs, digital click-wrap agreements, and any
                  other proof of lawful user consent
                </li>
                <li>
                  Email or message delivery status and basic open/read flags
                </li>
              </ul>
              <p className="italic mt-1">
                Purpose: To maintain proof of explicit user consent in
                compliance with Indian data protection and SEBI requirements.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">5. Purpose of Collection</h3>
          <p>
            Your personal information is collected and processed for lawful and
            specific purposes, including but not limited to:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              Compliance with SEBI regulations and other statutory requirements;
            </li>
            <li>
              Responding to queries, communicating investment ideas, and
              engagement;
            </li>
            <li>
              Verifying identity and maintaining accurate records for audits;
            </li>
            <li>Prevention of fraud, misuse, or unauthorized transactions.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            6. Consent & Authorization – Client Declaration
          </h3>
          <p>
            By accessing or using our services, website, platform, or mobile
            app, and by voluntarily submitting your personal details, you
            clearly and willingly agree to the following:
          </p>
          <ol className="list-decimal list-inside pl-4 mt-1 space-y-2">
            <li>
              <strong>Consent for Data Use</strong>
              <br />
              You give your{" "}
              <strong>free, specific, and informed consent</strong> to allow us
              to <strong>collect, store, use, and process</strong> your{" "}
              <strong>Personal Data and Sensitive Personal Data</strong>, in
              line with the <strong>Information Technology Act, 2000</strong>,
              and the{" "}
              <strong>Digital Personal Data Protection Act, 2023</strong>.
            </li>
            <li>
              <strong>Aadhaar-linked e-KYC Verification</strong>
              <br />
              You authorize us to{" "}
              <strong>verify your identity using OTP</strong> sent to your{" "}
              <strong>Aadhaar-linked mobile number</strong> for completing{" "}
              <strong>e-KYC</strong> or electronic consent procedures, in line
              with the <strong>Aadhaar Act, 2016</strong> and UIDAI regulations.
            </li>
            <li>
              <strong>Data Retrieval & Verification</strong>
              <br />
              You allow us to retrieve and verify your KYC details via official
              APIs or UIDAI tools. This may include:
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                  <strong>PAN No (Permanent Account Number)</strong>
                </li>
                <li>
                  <strong>Mobile number linked to Aadhaar</strong>
                </li>
                <li>
                  <strong>Name & Registered Email ID</strong>
                </li>
                <li>
                  <strong>Date of Birth (DOB)</strong>
                </li>
                <li>Other KYC details as permitted by SEBI or UIDAI</li>
              </ul>
            </li>
            <li>
              <strong>Permitted Use Only</strong>
              <br />
              You understand that your data will{" "}
              <strong>only be used for SEBI-compliant purposes</strong>, such
              as:
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>KYC verification</li>
                <li>Risk profiling</li>
                <li>Access to regulated research content or services</li>
              </ul>
            </li>
            <li>
              <strong>Regulatory Sharing</strong>
              <br />
              You permit us to lawfully share your verified data with
              SEBI-registered KRAs (KYC <strong>Registration Agencies</strong>),
              stock exchanges, or regulatory authorities, only for audit,
              compliance, or recordkeeping.
            </li>
            <li>
              <strong>Legal Validity of Consent</strong>
              <br />
              You agree that your OTP-based verification or digital acceptance
              is a legally valid form{" "}
              <strong>of consent, enforceable under:</strong>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                  <strong>Information Technology Act, 2000 (Sec. 5)</strong>
                </li>
                <li>
                  <strong>Aadhaar Act, 2016</strong>
                </li>
                <li>
                  <strong>Indian Evidence Act, 1872</strong>
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Protection Assurance</strong>
              <br />
              You confirm that you are aware this data usage is protected under
              Indian privacy laws and handled as per UIDAI's and SEBI's official
              circulars and compliance norms.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            7. Data Sharing & Disclosure
          </h3>
          <p>We may disclose your information:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              To comply with legal obligations, statutory authorities, or
              regulatory investigations;
            </li>
            <li>To SEBI, BSE, NSE, or KYC Registration Agencies (KRAs);</li>
            <li>
              To auditors, legal advisors, consultants, or technical service
              providers under confidentiality agreements;
            </li>
            <li>
              When legally required by law enforcement, court orders, or
              regulators.
            </li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, or distribute your personal data to third
            parties for commercial gain.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            8. Data Security & Protection
          </h3>
          <p>We adopt commercially reasonable security standards, including:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>SSL encryption for communication;</li>
            <li>Firewalls and access control systems;</li>
            <li>Secure data hosting environments;</li>
            <li>
              Limited access to sensitive data only by authorized personnel;
            </li>
            <li>Routine audits, monitoring, and policy updates.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">9. Data Retention</h3>
          <p>
            Your data is retained for a minimum period of 5 years or such longer
            period as required by SEBI or applicable Indian laws.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">10. Limitation of Liability</h3>
          <p>To the fullest extent permissible under law:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              <strong>Mr. Krishna Kumar Pathak</strong> shall not be liable for
              any direct, indirect, incidental, special, or consequential loss
              or damage of any kind arising from:
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>Loss, misuse, theft, or unauthorized access of data;</li>
                <li>
                  Server failure, data breach, cyber-attack, or system outage;
                </li>
                <li>Any errors, delays, or omissions in data transmission;</li>
                <li>Mobile app or website downtime, bug, update failures;</li>
                <li>
                  Any missed communication, notification failure, or transaction
                  delay;
                </li>
                <li>
                  Use of any third-party software, APIs, hosting providers, or
                  integrations.
                </li>
              </ul>
            </li>
          </ul>
          <p className="mt-2">
            You understand and agree that all services are provided on an "as
            is" and "as available" basis without warranties of any kind.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">11. Third-Party Disclaimer</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
              We may include or use third-party APIs, plug-ins, or platforms for
              analytics, communications, or payment processing.
            </li>
            <li>
              We do <strong>not control</strong> these third parties and are{" "}
              <strong>not responsible</strong> for their content, data handling,
              privacy practices, or service delivery.
            </li>
            <li>
              Any access to or use of such third-party platforms is at the
              user's own risk.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">12. Indemnification</h3>
          <p>
            You agree to indemnify, defend, and hold harmless{" "}
            <strong>Mr. Krishna Kumar Pathak</strong>, his brand{" "}
            <strong>WealthFino</strong>, affiliates, representatives, and
            employees from and against any claims, losses, damages, costs, or
            legal liabilities arising out of:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>Breach of this Privacy Policy or misuse of services;</li>
            <li>Unauthorized access or fraudulent use of data;</li>
            <li>
              Violation of any applicable law, regulation, or third-party
              rights.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">13. Grievance Officer</h3>
          <p>
            In accordance with Rule 5(9) of the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive Personal
            Data or Information) Rules, 2011:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              <strong>Grievance Officer:</strong> Mr. Krishna Kumar Pathak
            </li>
            <li>
              <strong>Mobile No.:</strong> +91 98834 55700
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <Link
                href={"mailto:wealthfino@gmail.com"}
                className="text-[#13B5E8]"
              >
                wealthfino@gmail.com
              </Link>
            </li>
            <li>
              <strong>Address:</strong> RS-39/43, 5/3C Golden Park, Sankarpur
              West, Near Rabindranath Co-operative, Durgapur, West Bengal -
              713206
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">14. Updates and Amendments</h3>
          <p>
            We reserve the right to update this Privacy Policy at any time
            without prior notice. Continued use of the services or website shall
            constitute your consent to such changes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            15. Governing Law & Jurisdiction
          </h3>
          <p>
            This Privacy Policy and any dispute arising out of or in connection
            with it shall be governed by and construed in accordance with the
            laws of India. The courts of Durgapur, West Bengal shall have
            exclusive jurisdiction in relation to any matter arising under this
            Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
