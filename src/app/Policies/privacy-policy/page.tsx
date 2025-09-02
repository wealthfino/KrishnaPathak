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
           This Privacy Policy explains how 
           <strong>WealthFino</strong>, operated by 
           <strong> Krishna Kumar Pathak</strong> (SEBI Registered Research Analyst, 
           <strong>Reg. No. INH300009914, BSE Enlistment No. 5590</strong>), collects,
processes, stores, and protects your information. <br />
By accessing our website, mobile app, or services, you agree to the practices outlined in this Policy. <br />
We comply with:
<ul className="list-disc pl-6 space-y-1 mt-2">
  <li> The SEBI (Research Analyst) Regulations, 2014 and circulars issued thereunder</li>
  <li> BSE/NSE guidelines applicable to Research Analysts</li>
  <li> The Information Technology Act, 2000 and SPDI Rules, 2011</li>
  <li> The Digital Personal Data Protection Act, 2023</li>
  <li> RBI guidelines and PCI-DSS standards for payment data security</li>
</ul>
  
          </p>
</div>
<div>
          <p className="mt-3">
         <h3 className="text-lg font-semibold"> 2. Scope
          </h3>
           
This Policy applies to all users, clients, vendors, and partners (“User”) interacting with WealthFino
services. <br />

It governs the lawful collection, processing, storage, and transfer of personal data strictly for
permitted Research Analyst activities, including: <br />
<ul className="list-disc pl-6 space-y-1 mt-2">
<li> Client onboarding and SEBI-compliant KYC verification</li>
<li> Distribution of SEBI-compliant research reports</li>
<li> Subscription-based research services</li>
<li>Record-keeping, disclosures, and regulatory reporting</li>
</ul>

We do not provide portfolio management or execution-based advisory.
          </p>
         
        </div>


        <div>
          <h3 className="text-lg font-semibold">3. Applicability</h3>
          <p>This Privacy Policy applies to all individuals who:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
             Visit or use WealthFino’s website, mobile app, or online/offline platforms
            </li>
            <li>
              Subscribe to research services, reports, or communications
            </li>
            <li>
             Share personal data for KYC or engagement purposes
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">4. Information Collected</h3>
          <div>
            <h4 className="font-medium mt-2">4.1 Principle of Collection</h4>
            <p>
              We collect only data that is relevant, necessary, and lawful as per SEBI RA Regulations, IT Act,
SPDI Rules, and DPDP Act. No excessive or unrelated data is collected
            </p>
            
          </div>

          <div>
            <h4 className="font-medium mt-4">
              4.2 Categories of Information
            </h4>
         

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
                 Mobile numbers (including Aadhaar-linked for OTP e-consent)
                </li>
               
                <li>Email address</li>
                <li>Permanent and correspondence address</li>
              </ul>
              <p className="italic mt-1">
               Purpose: Communication, verification, grievance redressal, SEBI record-keeping.
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
               Purpose: Legal capacity to contract; suitability checks per SEBI Code of Conduct.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">d. Statutory KYC Information</h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>PAN & DOB (mandatory)</li>
                <li>
                  KRA/CKYC Identifier (if retrieved via SEBI-registered KRAs)
                </li>
                <li>
                  KYC documents under SEBI framework
                </li>
              </ul>
              <p className="italic mt-1">
                Purpose: Onboarding, compliance, lawful delivery of research services.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">
               e. Technical & Session Data (auto-collected)
              </h5>
              
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>IP address</li>
                <li>Device type and operating system</li>
                <li>Browser type and version</li>
                <li>Date and time of access</li>
                <li>Location metadata (approximate, coarse level)</li>
                <li>Session cookies and user agent string</li>
              </ul>
              <p className="italic mt-1">
               IT Act Sec. 43A compliance; fraud prevention; security.
              </p>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">
              f. Consent Records & Communication Metadata
              </h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                 OTP timestamps
                </li>
                <li>
                IP logs
                </li>
                <li>
                  digital consent receipts
                </li>
               
                <li> email delivery status</li>
              </ul>
              <p className="italic mt-1">
                Purpose: Proof of explicit user consent under DPDP Act & SEBI rules.
              </p>
            </div>
            <div className="mt-4">
              <h5 className="font-medium">
              g. Payment Data
              </h5>
              <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
                <li>
                Transaction ID, payment method, billing info (processed via PCI-DSS–compliant payment
gateways)
                </li>
                <li>
              We do not store card numbers, CVV, UPI PINs
                </li>
               
              </ul>
              <p className="italic mt-1">
               Purpose: Subscription billing & statutory reporting.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">5. Purpose of Processing</h3>
          <p>
           We process your data for:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              SEBI compliance, audit, and record-keeping
            </li>
            <li>
              KYC verification and risk profiling
            </li>
            <li>
               Delivering research reports and services
            </li>
            <li> Fraud prevention and platform security</li>
            <li>
              Regulatory/statutory reporting (SEBI, BSE, NSE, RBI)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            6. Consent & Authorization 
          </h3>
          <p>
           By using our services, you agree to:
          <ol className="list-decimal list-inside pl-4 mt-1 space-y-2">
            <li>
              <strong>Lawful Use Consent:</strong>
              <br />
             Free, informed consent for collection, storage, and processing under
IT Act & DPDP Act.
              <strong>free, specific, and informed consent</strong> to allow us
              
            </li>
            <li>
              <strong>Aadhaar-linked e-KYC </strong>
              <br />
             Authorization for OTP-based verification in line with UIDAI &
Aadhaar Act, 2016.
            </li>
            <li>
              <strong>Regulatory Sharing:</strong>
              <br />
             Permission to share verified data with SEBI, Exchanges, KRAs, or
regulators for compliance.
              
            </li>
            <li>
              <strong>Legal Validity:</strong>
              <br />
             You agree that OTP/digital acceptance is valid consent under IT Act,
Aadhaar Act, and Indian Evidence Act.
              
            </li>
          </ol>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            7. Data Sharing & Disclosure
          </h3>
          <p>We may share your information with:</p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
              SEBI, BSE, NSE, KRAs, RBI (regulatory compliance)
            </li>
            <li>Auditors, consultants, service providers under confidentiality agreements</li>
            <li>
              Law enforcement or courts, when legally mandated
We never sell or commercially exploit your data
            </li>
            
          </ul>
         
        </div>

        <div>
          <h3 className="text-lg font-semibold">
           8. Payment Data Compliance
          </h3>
          
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>All payments are routed via PCI-DSS–compliant payment gateways</li>
            <li>We comply with RBI data localization rules – a copy of all payment data remains stored in
India.</li>
            <li>Limited offshore processing (fraud detection, chargebacks) occurs only with safeguards and
retention in India.</li>
           
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">9. Data Security</h3>
          <p>
           We adopt reasonable security practices including:
          </p>
          <ul>
            <li>
              SSL/TLS encryption, firewalls, intrusion detection
            </li>
            <li>
              Secure hosting with restricted access
            </li>
            <li>
              Regular audits and vulnerability testing
            </li>
            <li>
              Employee confidentiality obligations
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">10. Data Breach & Notification</h3>
          <p>In case of a breach:</p>
          <ul>
            <li>Immediate steps will be taken to contain risks</li>
            <li>Users will be notified within a reasonable timeframe</li>
            <li>Authorities (including the Data Protection Board of India) will be informed if required</li>
            <li>Corrective actions (audits, patches, monitoring) will be implemented</li>
          </ul>
         
        </div>

        <div>
          <h3 className="text-lg font-semibold">11. Data Retention</h3>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>
             Personal/KYC data: Minimum 5 years, or longer as mandated by SEBI, Exchanges, or
Indian law.
            </li>
            <li>
             Payment records: Retained per RBI and Income Tax laws.
            </li>
            <li>
              Once expired, data is securely deleted, anonymized, or archived.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">12. Children’s Data</h3>
          <p>
           Our services are intended for individuals 18 years and above. We do not knowingly collect or
process children’s data.
          </p>
          
        </div>

        <div>
          <h3 className="text-lg font-semibold">13. Limitation of Liability</h3>
          <p>
           We are not liable for losses due to:
          </p>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            <li>
            Unauthorized access, breaches, cyber-attacks, outages
            </li>
            <li>
              Errors or delays in third-party APIs, hosting, or payment gateways
            </li>
            <li>
            Use of services provided on “as is” basis
            </li>
           
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">14. Third-Party Disclaimer</h3>
          <p>
          Our platform may integrate third-party APIs/tools (analytics, hosting, payments). We are not
responsible for their independent privacy practices. Use of such services is at user’s discretion
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
           15. Indemnification
          </h3>
          <p>
          You agree to indemnify and hold harmless Krishna Kumar Pathak / WealthFino against claims or
damages arising from misuse of data, breach of this Policy, or violation of laws.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
          16. Cross-Border Data Transfer
          </h3>
          <p>
          Except for limited regulated purposes (fraud checks, dispute resolution), personal data is not
transferred outside India. Where required, transfers are done under DPDP safeguards and RBI
mandates.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
        17. Grievance Officer
          </h3>
          <p>
         In compliance with Rule 5(9) of the IT Rules, 2011:
          </p>
          <ul>
            <li>
              <strong>Name:</strong>Mr. Krishna Kumar Pathak
            </li>
            <li>
              <strong>Mobile::</strong>+91 98834 55700
            </li>
            <li>
              <strong>Email:</strong>wealthfino@gmail.com
            </li>
            <li>
              <strong>Address::</strong>RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranath Co-operative,
Durgapur, West Bengal – 713206
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
        18. Updates & Amendments
          </h3>
          <p>
         We may update this Policy from time to time. Updated versions will be posted with a revised “Last
Updated” date. Significant changes will be notified via website/app or email.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
          19. Governing Law & Jurisdiction
          </h3>
          <p>
        This Policy is governed by the laws of India. Courts at Durgapur, West Bengal shall have
exclusive jurisdiction for disputes.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
