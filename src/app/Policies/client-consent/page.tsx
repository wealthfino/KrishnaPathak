"use client";

import Link from "next/link";
import React from "react";

const ClientConsentPage = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">
        CLIENT CONSENT AND TERMS & CONDITIONS
      </h2>

      <p className="mb-4 font-bold">
        These Research Services are provided by Mr. Krishna Kumar Pathak, a SEBI-Registered
      </p>
      <p className="mb-4 font-bold">
        Research Analyst holding Registration No. INH300009914, BSE Enlistment No- 5590
      </p>
      <p className="mb-4 font-bold">
       All services are subject to the Terms and Conditions outlined in accordance with SEBI Circular No.
SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2025/004, specifically as per Annexure-B.
      </p>
      <p className="mb-4">
        By subscribing to the research services, clients acknowledge and agree
        to the following terms and conditions:
      </p>

      <div className="space-y-4 text-md">
        <div>
          <h3 className="text-lg font-semibold">
            1. Availing the Research Services:
          </h3>
          <p>
            By accepting delivery of the research service, the client
confirms that he/she has elected to subscribe to the research service of the RA at his/her sole
discretion. RA confirms that research services shall be rendered in accordance with the
applicable provisions of the RA Regulations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            2. Obligation on Research Analyst:
          </h3>
          <p>
           RA and client shall be bound by SEBI Act and all the
applicable rules and regulations of SEBI, including the RA Regulations and relevant
notifications of Government, as may be in force, from time to time.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            3. Client Information and KYC:
          </h3>
          <p>
           The Client agrees to furnish, in full and without omission,
all information and documentation as may be required by the SEBI-registered Research
Analyst (“RA”) in its prescribed format. This includes but is not limited to Know Your
Client (“KYC”) details, identity proof, address proof, and any other particulars, along with
supporting documents, as mandated by the Research Analyst Administration and
Supervisory Body (RAASB), SEBI, or any other applicable regulatory authority, from time
to time.
The RA shall have the right to collect, verify, store, process, and upload the Client's KYC data with
the SEBI-registered KYC Registration Agency (KRA) as required under the SEBI (KYC
Registration Agency) Regulations, 2011 and any subsequent amendments.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            4. Client/User Consent Declaration to Commence Research Analyst Services
          </h3>
          <p>
          I/We, the undersigned Client/User, hereby provide my/our informed consent to commence the
research analyst services offered by Mr. Krishna Kumar Pathak (SEBI Registered Research Analyst,
Registration No. INH300009914) after fully understanding and agreeing to the following terms:
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
             I/We, as the Client/User, have carefully read, understood, and acknowledged the terms and
conditions applicable to a Research Analyst under Regulation 2(1)(u) of the SEBI (Research
Analyst) Regulations, 2014, including the prescribed fee structure.
            </li>
            <li>
             I/We confirm that I/We am/are subscribing to the research services solely for our own use,
benefit, and consumption. Any reliance placed on the research reports, recommendation reports, or
rational reports provided by the Research Analyst shall be entirely based on my/our own
independent judgment, discretion, and assessment of the contents and conclusions contained
therein.
            </li>
            <li>
              I/We, as the Client/User, further understand and acknowledge that: -{" "}
              <ul className="list-disc list-inside pl-4">
                <li>
                 Any investment decision made based on the research reports or recommendations is subject to
market risks, including potential financial loss.
                </li>
                <li>
                 The research reports or recommendations do not offer any assurance or guarantee of returns.
                </li>
                <li>
                  The Client/User shall have no legal recourse or claim for any financial losses incurred as a result
of investment decisions made based on the research reports, rational reports, or recommendation
reports issued by the Research Analyst.
                </li>
                
              </ul>
            </li>
          </ol>
 <p>
          By signing or otherwise accepting this declaration (either physically or digitally), I/We, as the
Client/User, expressly provide consent to initiate the research analyst services and confirm that this
consent has been given voluntarily and with a full understanding of the associated risks and
responsibilities.
          </p>
        </div>

        {/* <div>
          <p className="font-bold">
            Declaration from Krishna Kumar Pathak (“Research Analyst”):
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>
              We are duly registered with SEBI as Research Analyst under
              Registration No. INH300009914 from 22nd June 2022; BSE Enlistment
              No. 5590 and compliant with the SEBI (Research Analyst)
              Regulations, 2014
            </li>
            <li>
              Currently we have valid SEBI registration and have the required
              qualifications to render services contemplated under RA
              regulations
            </li>
            <li>
              We have no material adverse disciplinary history or any conflicts
              of interest that compromise the integrity of its recommendations
            </li>
            <li>
              The maximum fee charged by the Research Analyst shall not exceed
              ₹1.51 lakhs per annum per family of clients
            </li>
            <li>
              The recommendations provided by us do not provide any assurance of
              returns
            </li>
          </ul>
        </div> */}

        <div>
          <h3 className="text-lg font-semibold">
           5. Consent & Authorization – Client Declaration
          </h3>
          <p>
            By accessing or using our services, website, platform, or mobile app, and by voluntarily
submitting your personal details, you clearly and willingly agree to the following:
          </p>
<ol className="list-decimal list-inside pl-4">
  <li>
    Consent for Data Use-
You give your free, specific, and informed consent to allow us to collect, store, use, and
process your Personal Data and Sensitive Personal Data, in line with the Information
Technology Act, 2000, and the Digital Personal Data Protection Act, 2023.
  </li>
  <li>
    Aadhaar-linked Mobile no e-KYC Verification-
You authorize us to verify your identity using OTP sent to your Aadhaar-linked mobile
number for completing e-KYC or electronic consent procedures, in line with
the Aadhaar Act, 2016 and UIDAI regulations.
  </li>
  <li>
    Data Retrieval & Verification-
By accessing or using our services, you hereby provide your voluntary, explicit, and
informed consent to Mr. Krishna Kumar Pathak, a SEBI-Registered Research Analyst
(Registration No. INH300009914), to initiate, retrieve, verify, and process your Know
Your Customer (KYC) details through authorized third-party Application Programming
Interfaces (APIs) or the Unique Identification Authority of India (UIDAI), as applicable
and permissible under Indian laws and SEBI regulations.
Such KYC verification may include, but is not limited to, fetching and validating the
following information:<br/>
- PAN No (Permanent Account Number)<br/>
- Masked Aadhaar Number (last four digits only)<br/>
- Mobile number linked to Aadhaar<br/>
- Name & Registered Email ID<br/>
- Date of Birth (DOB)<br/>
- Other KYC details as permitted by SEBI or UIDAI
  </li>
</ol>

        </div>
         <div>
          <p className="font-bold">
            Declaration from Krishna Kumar Pathak (“Research Analyst”):
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>
              We are duly registered with SEBI as Research Analyst under Registration No.
INH300009914 from 22nd June 2022; BSE Enlistment No. 5590 and compliant with the
SEBI (Research Analyst) Regulations, 2014.
            </li>
            <li>
             Currently we have valid SEBI registration and have the required qualifications to render
services contemplated under RA regulations.
            </li>
            <li>
             We have no material adverse disciplinary history or any conflicts of interest that
compromise the integrity of its recommendations.
            </li>
            <li>
              The maximum fee charged by the Research Analyst shall not exceed ₹1.51 lakhs per
annum per family of clients.
            </li>
            <li>
             The recommendations provided by us do not provide any assurance of returns.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">6. Consideration and mode of payment:</h3>
          <p>
           The client shall duly pay to RA, the agreed fees for
the services that RA renders to the client and statutory charges, as applicable. Such fees and
statutory charges shall be payable through the specified manner and modes communicated
by the Research Analyst (including but not limited to payment gateways or processors like
Cashfree, Razorpay, UPI, NEFT, IMPS, Centralised Fee Collection Mechanism for RA,
Cheque, etc.). We may collect 12 months advance payment based on mutual agreement.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">7. Risk Factors::</h3>
          <p>
            Investments in securities markets are inherently risky and subject to market
dynamics. Registration granted by SEBI, and certification from NISM in no way guarantee
the performance of the intermediary or provide any assurance of returns to clients. Mr.
Krishna Kumar Pathak (SEBI Reg. No. INH300009914) shall not be responsible for any
profit or loss incurred by the client. In the event of any financial loss, no compensation,
reimbursement, or additional amount shall be payable under any circumstances.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            8. Conflict of Interest:
          </h3>
          <p>
            The Research Analyst adheres to SEBI's guidelines on the disclosure
and mitigation of actual or potential conflicts of interest. Full disclosures are provided in
each research recommendation and research report.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            9. Termination of service and refund of fees:
          </h3>
          <p>
           The Research Analyst reserves the right to
suspend or terminate the provision of research services to clients in the event of suspension
or cancellation of its registration with SEBI. In case the certificate of registration of the
Research Analyst is suspended for a period exceeding sixty (60) days or is cancelled, the
Research Analyst shall refund the subscription fees to the client on a pro-rata basis for the
period from the effective date of such suspension or cancellation to the end of the
subscription period.
          </p>
         
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            10. Grievance redressal and dispute resolution::
          </h3>
          <p>
           For any support-related grievances, including
issues related to non-receipt of reports or deficiencies in service, clients must email their
concerns to wealthfino@gmail.com. If unresolved, grievances must be escalated to the
designated grievance officer. All grievances will be addressed within 7-10 business days or
as per latest SEBI RA Regulations.
          </p>
           <p>
            For grievances and dispute resolution, please contact:
            <br />
            <strong>Krishna Kumar Pathak:</strong>{" "}
            <Link
              href={"mailto:Skrishna.sk4@gmail.com"}
              className="text-[#13B5E8]"
            >
              Skrishna.sk4@gmail.com
            </Link>
          </p>
          <br />
          <p>
            For more details regarding grievance-related matters, please refer
            to the grievance redressal section of our website:{" "}
            <Link
              href={"https://krishnapathak.com/redressal-of-grievance/ttps"}
              className="text-[#13B5E8] break-words"
            >
              https://krishnapathak.com/redressal-of-grievance/ttps
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">11.Use of Research Reports:</h3>
          <p>
           All research reports and related information are confidential
and intended solely for the subscriber. Unauthorized distribution, reproduction, or use of
these materials is strictly prohibited. Clients must independently assess all
recommendations, and the Research Analyst assumes no responsibility for any losses
incurred.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">12.Use of Research Reports:</h3>
          <p>
           Clients shall be requested to go through Do’s and Don’ts while
dealing with RA as specified in SEBI master circular no. SEBI/HO/MIRSD-POD- 1/P/CIR/
2024/49 dated May 21, 2024 or as may be specified by SEBI from time to time.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            13. MOST IMPORTANT TERMS AND CONDITIONS (MITC) AS PER
ANNEXURE- A
          </h3>
          <p>
           [Forming part of the Terms and Conditions for providing research services]
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
              These terms and conditions, and consent thereon are for the research services provided by
the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell
transaction) on behalf of, the client. Thus, the clients are advised not to permit RA to
execute any trade on their behalf.
            </li>
            <li>
             The fee charged by RA to the client will be subject to the maximum of amount prescribed
by SEBI/ Research Analyst Administration and Supervisory Body (RAASB) from time to
time (applicable only for Individual and HUF Clients).
              <h4>Note:</h4>
              <ul className="list-disc list-inside pl-4">
                <li>
                 The current fee limit is Rs 1,51,000/- per annum per family of client for all research
services of the RA.
                </li>
                <li>The fee limit does not include statutory charges.</li>
                <li>
                 The fee limits do not apply to a non-individual client / accredited investor.
                </li>
              </ul>
            </li>
            <li>
             RA may charge fees in advance if agreed by the client. Such advance shall not exceed the
period stipulated by SEBI; presently it is one quarter. In case of pre-mature termination of
the RA services by either the client or the RA, the client shall be entitled to seek a refund of
proportionate fees only for the unexpired period.
            </li>
            <li>
              Fees to RA may be paid by the client through any of the specified modes like cheque,
online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make
payments through a Centralized Fee Collection Mechanism (CeFCoM) managed by BSE
Limited (i.e. currently recognized RAASB).
            </li>
            <li>
              The RA is required to abide by the applicable regulations/ circulars/ directions specified
by SEBI and RAASB from time to time in relation to the disclosure and mitigation of any
actual or potential conflict of interest. The RA will endeavour to promptly inform the client
of any conflict of interest that may affect the services being rendered to the client.
            </li>
            <li>
              Any assured/guaranteed/fixed returns schemes or any other schemes of a similar nature
are prohibited by law. No scheme of this nature shall be offered to the client by the RA.
            </li>
            <li>
             The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use
of the RA’s research services. All opinions, projections, and estimates of the RA are based
on the analysis of available data under certain assumptions as of the date of preparation/
publication of the research report, rational report or recommendation report.
            </li>
            <li>
              Any investment made based on recommendations in research reports, rational reports or
recommendation reports are subject to market risks, and recommendations do not provide
any assurance of returns. There is no recourse to claim any losses incurred on the
investments made based on the recommendations in the research report. Any reliance placed
on the Research Report, Rational Report or Recommendation Report provided by the RA
shall be as per the client’s own judgement and assessment of the conclusions contained in
the research report.
            </li>
            <li>
              The SEBI registration, Enlistment with RAASB, and NISM certification do not guarantee
the performance of the RA or assure any returns to the client.
            </li>
            <li>
              For any grievances,
              <ul className="list-disc list-inside pl-4">
                <li>
                  Step 1: the client should first contact the RA using the
                  details on its website or the following contact details:{" "}
                  <Link
                    href={"mailto:wealthfino@gmail.com"}
                    className="text-[#13B5E8]"
                  >
                    wealthfino@gmail.com
                  </Link>{" "}
                  (+91 98834 55700). If unresolved, grievances must be escalated
                  to the designated grievance officer. All grievances will be
                  addressed within 7 (seven) business days or as per latest SEBI
                  RA Regulations. For grievances and dispute resolution, please
                  contact- <strong>Krishna Kumar Pathak: </strong>
                  <Link
                    href={"mailto:Skrishna.sk4@gmail.com"}
                    className="text-[#13B5E8]"
                  >
                    Skrishna.sk4@gmail.com
                  </Link>{" "}
                  (+91 98834 55700).
                </li>
                <li>
                  Step 2: If the resolution is unsatisfactory, the client can
                  also lodge grievances through SEBI's SCORES platform at{" "}
                  <Link
                    href={"https://scores.sebi.gov.in/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#13B5E8]"
                  >
                    scores.sebi.gov.in
                  </Link>
                  .
                </li>
                <li>
                  Step 3: The client may also consider the Online Dispute
                  Resolution (ODR) through the Smart ODR portal at{" "}
                  <Link
                    href={"https://smartodr.in"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#13B5E8]"
                  >
                    https://smartodr.in
                  </Link>
                  .
                </li>
              </ul>
            </li>
            <li>
              Clients are required to keep contact details, including email id
              and mobile number/s updated with the RA at all times.
            </li>
            <li>
              The RA shall never ask for the client's login credentials and OTPs
              for the client's Trading Account Demat Account and Bank Account.
              Never share such information with anyone including RA.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            14. Other Terms & Conditions:
          </h3>
          <ol className="list-decimal list-inside pl-4">
            <li>
            Investments in the securities market are subject to market risks. Read all the related
documents carefully before investing.
            </li>
            <li>
            Registration granted by SEBI, membership of a SEBI-recognized supervisory body (if
any) and certification from NISM in no way guarantee the performance of the intermediary
or provide any assurance of returns to investors.
            </li>
            <li>
            The securities quoted (if any) are for illustration only and are not recommendatory. The
returns displayed (if any) are for informational purposes only and should not be considered
advertisements or promotions influencing your subscription decisions.
            </li>
            <li>
              Recommendations provided may not always result in profits. Investing in equity and
related instruments involves uncertainties, including company-specific and market-related
risks. We do not assure guaranteed returns as the value of assets may fluctuate based on
market forces like de-listing of securities or market closures etc.
            </li>
            <li>
              Past performance does not ensure future performance. Not with standing all the efforts to
do the best research, clients should understand that investing in equities involves a risk of
loss of both income and principal. Please ensure that you fully understand the risks involved
in investing in equities.
            </li>
            <li>
             The Client acknowledges and agrees that communications related to services provided by
Mr. Krishna Kumar Pathak (SEBI Registered Research Analyst, Registration No.
INH300009914) may be transmitted through various electronic channels including, but not
limited to, websites, mobile applications, email, SMS, WhatsApp, or other third-party
messaging platforms.
<br/>
<br/>
<p>
           While all reasonable care is taken to ensure the timely and secure transmission of such
communications, the Client understands that electronic communication is inherently subject to
risks.
          </p>
<p>
          Accordingly, Mr. Krishna Kumar Pathak shall not be held liable under any circumstances for:
              <ol className="list-decimal list-inside pl-4">
                <li>
                  Non-receipt, delay, loss, or corruption of any information or data shared electronically
                </li>
                <li>
                 Any losses, direct or indirect, arising out of such communication failures or delays
                </li>
                <li>
                 Errors caused by third-party service providers used for transmission of messages, alerts, or
updates
                </li>
              </ol>

          </p>
<br/>
            </li>
            <li>
              I, the Client/User, hereby declare that the information provided by me, including my
PAN, date of birth, address, mobile number, and email ID, is true and correct to the best of
my knowledge. By submitting this information, I acknowledge and consent to the terms and
conditions set by Mr. Krishna Kumar Pathak (SEBI Registered Research Analyst –
INH300009914) and authorize the use of my data for verification and regulatory compliance
as per applicable laws.
            </li>
            <li>
              This communication is issued through the official mobile application and/or authorized
communication channels of WealthFino, the brand name of Mr. Krishna Kumar Pathak, a
SEBI Registered Research Analyst (Registration No. INH300009914).
            </li>
            <li>
              The views, opinions, and investment recommendations provided herein are solely based on my
independent research, technical and/or fundamental analysis, and best professional judgment. These
views are intended for informational purposes only and shall not be construed as investment advice
or a guarantee of any returns.
<br/>
<br/>
I, Krishna Kumar Pathak, expressly disclaim any liability for any direct, indirect, incidental, or
consequential loss or damage incurred by any person acting on such information. Investors are
solely responsible for their investment decisions and are advised to consult a SEBI-registered
investment adviser before acting upon any such recommendation.<br/>
            </li>
            <li>
              <b>Risk Disclosure on Derivatives (Futures & Options)
                </b>
As per SEBI’s study titled “Analysis of Profit and Loss of Individual Traders Dealing in Equity
F&O Segment” (Dated 25 January 2023): • 9 out of 10 individual traders in equity F&O
segment incur net losses • Average net trading loss is close to ₹50,000 • Loss-makers pay an
additional 28% as transaction cost • Profit-makers incur 15%–50% of their profits in transaction
costs Derivatives trading carries high risk and is not suitable for all investors
            </li>
          </ol>
          
          

        </div>
        <div>

          <h2>
           <b>
             USER AGREEMENT
             
            </b>
          </h2>
          <p>
            <br />This User Agreement (“Agreement”) is a binding contract between Krishna Kumar Pathak,
a SEBI-registered Research Analyst (Registration No. INH300009914) operating under the
brand WealthFino (hereinafter “Research Analyst,” “WealthFino,” “we,” “us,” or “our”) and
you, the person who accesses or subscribes to any research report, commentary, website,
mobile application, or other service offered by us (collectively, the “Services”).
<br/>
Electronic Consent & Legal Validity — Disclaimer
By proceeding, I (the User/Client) hereby:
 <ol className="list-decimal list-inside pl-4">
  <li>
    Provide binding electronic consent through any online action—clicking “Accept,”
ticking a box, Digital Signature, typing my name/OTP, or Aadhaar e-sign—which
shall serve as my valid signature.
  </li>
  <li>
    Acknowledge legal recognition of such e-actions under the Information Technology
Act 2000, Indian Evidence Act 1872 §65B, and relevant SEBI circulars; they carry
the same force as a handwritten signature and are admissible as primary evidence.
  </li>
  <li>
    Authorize WealthFino / Mr. Krishna Kumar Pathak (SEBI RA INH300009914) to
capture and store the IP address, timestamp, and device details for every material
electronic interaction (e.g., T&C acceptance, OTP verification, KYC submission, or
purchase of research services) to meet statutory and SEBI compliance requirements.
  </li>
  <li>
    Accept that all records so captured are final and conclusive for any judicial,
regulatory, or administrative purpose.
  </li>
 </ol>

          </p>
        </div>
        <div>
          <h2>
            <b>
              DISCLAIMER:
            </b>
          </h2>
          <p>
            The research reports, analysis, views, commentary, model portfolios, and other content shared by
Krishna Kumar Pathak under the brand WealthFino may include Buy, Sell, or Hold
recommendations on securities, which are issued in accordance with the SEBI (Research Analyst)
Regulations, 2014. These recommendations are based on publicly available information,
independent research, and personal analysis of the Research Analyst. The views expressed are
general in nature and are intended solely for educational and informational purposes. They do not
constitute personal investment advice, portfolio management, or an offer to buy or sell any security.
Users are strongly advised to exercise independent judgment and consult their own financial advisor
before making any investment decisions.
<br /><br />
Krishna Kumar Pathak and WealthFino shall not be liable for any direct, indirect, incidental,
special, or consequential losses or damages—including but not limited to trading losses, data
inaccuracies, missed opportunities, technology failures, or reputational harm—arising from:
          </p>
          <ol className="list-decimal list-inside pl-4">
            <li>
              Reliance on any research report, opinion, or recommendation;
            </li>
            <li>Client-supplied KYC errors, omissions, or outdated information;</li>
            <li>Technical disruptions including third-party API failures, data loss, or connectivity issues;</li>
            <li>
              Misuse, forwarding, or misinterpretation of any content shared.
            </li>
          </ol>
          <p>
            The sole responsibility for all investment decisions lies with the user. No legal claim, complaint, or
liability shall arise against Krishna Kumar Pathak or WealthFino in connection with the use of any
research or content provided. By using the research, services, website, or mobile application, the
user acknowledges, understands, and fully accepts this disclaimer, and further agrees to indemnify
and hold harmless Krishna Kumar Pathak and WealthFino from any resulting liability or claim.
          </p>
        </div>

        <div>
          <p>
            RA shall collect, store, upload and check KYC records of the clients
            with KYC Registration Agency (KRA) as specified by SEBI from time to
            time.
          </p>
          <p className="font-bold">
            I as a client/user here by accept all the terms and conditions and
            provide my consent to initiate the services and fetch my KYC
            details.
          </p>
          <br />
          <ul className="list-none list-inside pl-4">
            <li>Krishna Kumar Pathak (SEBI Registered Research Analyst)</li>
            <li>SEBI Registration No. INH300009914</li>
            <li>
              Email:{" "}
              <Link
                href={"mailto:wealthfino@gmail.com"}
                className="text-[#13B5E8]"
              >
                wealthfino@gmail.com
              </Link>
            </li>
            <li>
              Website:{" "}
              <Link
                href={"https://krishnapathak.com/"}
                className="text-[#13B5E8]"
              >
                https://krishnapathak.com
              </Link>
            </li>
            <li>
              Client agrees to KYC compliance and terms by using the services
            </li>
          </ul>
        </div>

        <div>
          <div>
            Dear Members,
            <br />
            Please be advised that it is mandatory to thoroughly review the
            following documents:
            <ul className="list-disc list-inside pl-4">
              <li>Terms and Conditions</li>
              <li>SEBI Guidelines</li>
              <li>Research Disclaimers</li>
              <li>Client Consent and Terms & Condition</li>
              <li>Investor Charter</li>
              <li>Grievance Redressal</li>
            </ul>
            <br />
            For detailed information, kindly visit:{" "}
            <Link
              href={"https://krishnapathak.com/"}
              className="text-[#13B5E8]"
            >
              www.krishnapathak.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientConsentPage;