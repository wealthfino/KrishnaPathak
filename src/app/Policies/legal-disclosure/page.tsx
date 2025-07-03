"use client";

import Link from "next/link";
import React from "react";

const LegalRiskDisclosurePage = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">LEGAL & RISK DISCLOSURE</h2>

      <div className="mb-4">
        <p>
          <strong>Issued by Krishna Kumar Pathak</strong>
        </p>
        <p>SEBI Registered Research Analyst - INH300009914</p>
        <p>BSE Enlistment- 5590</p>
        <p>
          Founder & CEO -{" "}
          <Link
            href="https://www.krishnapathak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#13B5E8]"
          >
            www.krishnapathak.com
          </Link>
        </p>
      </div>

      <div className="space-y-6 text-md">
        <div>
          <h3 className="text-lg font-semibold">1. General Disclaimer</h3>
          <p className="mb-2">
            <strong>
              Krishna Kumar Pathak, a SEBI Registered Research Analyst
              (Registration No. INH300009914), and the brand WealthFino
            </strong>
            , operate this platform as a research and information service only.
          </p>
          <p className="mb-2">
            All content provided under <strong>WealthFino</strong> — including
            research reports, recommendation, charts, market opinions, or
            analysis — is intended solely for{" "}
            <strong>general informational and educational purposes</strong>.
          </p>
          <p className="mb-2">
            As permitted under the SEBI (Research Analysts) Regulations, 2014,{" "}
            <strong>
              Krishna Kumar Pathak may provide Buy, Sell, or Hold
              recommendations
            </strong>{" "}
            based on publicly available data and independent analysis.
          </p>
          <p className="mb-2">
            However, such views are{" "}
            <strong>not personalised investment advice</strong>, portfolio
            management, or an invitation to trade or invest. Users must evaluate
            the suitability of the content and are advised to consult a
            qualified investment advisor before making any financial decision.
          </p>
          <p>
            The platform is not registered to provide portfolio management,
            advisory, broking, or fund management services.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            2. Full Non-Liability Declaration
          </h3>
          <p className="mb-2">
            By accessing this platform or its content,{" "}
            <strong>
              you agree, accept, and acknowledge that Krishna Pathak and
              WealthFino are not responsible or liable for anything whatsoever
            </strong>
            . This includes, but is not limited to:
          </p>

          <div className="pl-4 space-y-4">
            <div>
              <h4 className="font-semibold">
                A. Technical & System Failures — Disclaimer of Liability
              </h4>
              <p className="mb-2">
                Krishna Kumar Pathak and the brand <strong>WealthFino</strong>{" "}
                expressly <strong>disclaim all responsibility</strong> —
                financial, legal, or otherwise—for any loss, cost, or
                inconvenience arising from <strong>any</strong> of the following
                events or conditions below:
              </p>

              <ol className="list-decimal list-inside pl-4 space-y-2">
                <li>
                  <strong>Platform</strong>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      Mobile-app or web-portal crashes, freezes, or forced
                      shutdowns
                    </li>
                    <li>
                      Complete or partial website/server downtime, scheduled or
                      unscheduled maintenance
                    </li>
                    <li>
                      Cloud-hosting outages, power failures, or data-centre
                      disruptions
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Network & Data Transmission</strong>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      Internet disconnection, latency, bandwidth throttling, or
                      packet loss
                    </li>
                    <li>
                      Delayed or corrupted data feeds, chart refresh lags, or
                      API time-outs
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Authentication & Access</strong>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      One-Time Password (OTP) or two-factor authentication
                      failures
                    </li>
                    <li>
                      Login errors, account-lockouts, or credential-mismatch
                      issues
                    </li>
                    <li>
                      System-level bugs, glitches, or device / browser
                      incompatibility
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Notification & Messaging</strong>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      Non-delivery, duplication, or delay of SMS, e-mail,
                      Telegram, WhatsApp, or push notifications
                    </li>
                    <li>
                      Spam-filter blocks, routing errors, or telecom gateway
                      outages
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Security & Force-Majeure Events</strong>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      Distributed-Denial-of-Service (DDoS) attacks, malware,
                      ransomware, or any third-party hacking incident
                    </li>
                    <li>
                      Natural calamities, strikes, government orders, or other
                      force-majeure circumstances affecting system performance
                    </li>
                  </ul>
                </li>
              </ol>
              <p className="mt-2">
                <strong>
                  All access to, or reliance on, the platform is strictly at the
                  user's own risk.
                </strong>{" "}
                Krishna Kumar Pathak and WealthFino shall not be liable for any
                direct, indirect, incidental, consequential, punitive, or
                exemplary damages resulting from the technical or system
                failures listed above.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">B. Content & Data Errors</h4>
              <ul className="list-disc list-inside pl-4">
                <li>Typographical mistakes</li>
                <li>Charting delays or wrong prices</li>
                <li>Misinterpretation of research or analysis</li>
                <li>API or third-party data inaccuracies</li>
                <li>Outdated or wrongly displayed information</li>
                <li>Graphical or formatting inconsistencies</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">
                C. Market Risks & Trading Loss Disclaimer
              </h4>
              <ol className="list-decimal list-inside pl-4 space-y-2">
                <li>
                  <strong>No Profit Guarantee:</strong> Krishna Kumar Pathak and
                  WealthFino make no assurance of returns, profits, or capital
                  protection based on any analysis, report, or opinion provided.
                </li>
                <li>
                  <strong>Market Volatility Risk:</strong> Investments in
                  equity, F&O, or IPOs are subject to market fluctuations, price
                  gaps, trading halts, and liquidity risks. Sudden losses may
                  occur.
                </li>
                <li>
                  <strong>Capital Loss Warning:</strong> Users may suffer{" "}
                  <strong>partial or total loss of invested capital</strong>.
                  All decisions are made solely at the user's own risk.
                </li>
                <li>
                  <strong>No Liability for Decisions:</strong> Emotional or
                  speculative trading based on platform content is entirely the
                  user's responsibility. We disclaim any financial liability.
                </li>
                <li>
                  <strong>SEBI Data Disclosure:</strong> As per SEBI's Jan 2023
                  study,{" "}
                  <strong>
                    9 out of 10 retail traders in equity F&O incur losses
                  </strong>
                  , with average net loss of ₹50,000 plus 28% in transaction
                  costs.
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold">D. Third-Party Services</h4>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Links to stock screeners, APIs, broker platforms, financial
                  tools
                </li>
                <li>
                  Content fetched via NSE/BSE, Screener, or data providers
                </li>
                <li>Any plugin, redirect, or affiliate service</li>
              </ul>
              <p className="mt-2">
                We{" "}
                <strong>
                  neither own nor control such third-party platforms
                </strong>
                , and we do not guarantee their safety, reliability, or uptime.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            3. We Make NO Guarantee or Promise
          </h3>
          <ul className="list-disc list-inside pl-4">
            <li>No guarantee of return on investment</li>
            <li>No assurance of correct or updated market data</li>
            <li>No assurance of service continuity</li>
            <li>No guarantee of notifications, reminders, emails, or alerts</li>
            <li>No assurance of accuracy in AI tools or API-based data</li>
            <li>No assurance of platform access at all times</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            4. Total Legal Protection for Errors & Failures
          </h3>
          <p className="mb-2">
            You agree not to hold Krishna Pathak or WealthFino responsible for:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Network failure</li>
            <li>OTP/SMS/Email failure</li>
            <li>Website/App crash</li>
            <li>Any loss — direct, indirect, or consequential</li>
            <li>Use or misuse of any report or tool</li>
            <li>Decision-making based on our platform</li>
            <li>Third-party fraud, scam, or data breach</li>
            <li>Missed opportunity or profit loss</li>
          </ul>
          <p className="mt-2 font-semibold">
            Whatever happens — loss, mistake, delay, error, server problem, app
            problem, anything — we are NOT responsible.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            5. Governing Law & Jurisdiction
          </h3>
          <ul className="list-disc list-inside pl-4">
            <li>This disclaimer is governed by the laws of India</li>
            <li>
              Jurisdiction: Courts of <strong>Durgapur, West Bengal</strong>
            </li>
            <li>
              Disputes, if any, shall be resolved under Indian Arbitration laws
            </li>
            <li>By continuing, you agree to this legal disclaimer in full</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Fraud Protection, Payment Disclaimer & Liability Waiver
          </h3>
          <p className="mb-2">
            <strong>
              Issued by Krishna Kumar Pathak – SEBI Registered Research Analyst
              (INH300009914)
            </strong>
            <br />
            Official Email:{" "}
            <Link
              href="mailto:info@krishnapathak.com"
              className="text-[#13B5E8]"
            >
              info@krishnapathak.com
            </Link>{" "}
            |{" "}
            <Link href="mailto:wealthfino@gmail.com" className="text-[#13B5E8]">
              wealthfino@gmail.com
            </Link>
            <br />
            Authorised Platforms: Mobile App – "WealthFino" | Website –{" "}
            <Link
              href="https://www.krishnapathak.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#13B5E8]"
            >
              www.krishnapathak.com
            </Link>
          </p>

          <div className="pl-4 space-y-4">
            <div>
              <h4 className="font-semibold">
                1. Official Payment Channels Only
              </h4>
              <p className="mb-2">
                All payments to Krishna Kumar Pathak or the brand WealthFino
                must be made{" "}
                <strong>only through the following authorised methods:</strong>
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Via the official <strong>mobile app:</strong>{" "}
                  <strong>WealthFino</strong> (available on Play Store/App
                  Store)
                </li>
                <li>
                  Through our <strong>official websites:</strong>{" "}
                  <Link
                    href="https://www.krishnapathak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#13B5E8]"
                  >
                    www.krishnapathak.com
                  </Link>
                </li>
                <li>
                  By using <strong>payment links or UPI/Bank details</strong>{" "}
                  provided directly from our official email IDs:
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      <Link
                        href="mailto:info@krishnapathak.com"
                        className="text-[#13B5E8]"
                      >
                        info@krishnapathak.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="mailto:wealthfino@gmail.com"
                        className="text-[#13B5E8]"
                      >
                        wealthfino@gmail.com
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">
                2. Right to Verify Before Payment
              </h4>
              <p className="mb-2">
                Before making any payment, the User has the full right and
                option to:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Call and confirm the payment details</li>
                <li>Email to confirm via our official IDs</li>
                <li>
                  Check the mobile app or website for authentic instructions
                </li>
              </ul>
              <p className="mt-2">
                If the User chooses not to verify and proceeds on their own, the
                responsibility lies solely with the <strong>User.</strong>
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                3. No Liability for Fraudulent or Unauthorized Payments
              </h4>
              <div className="pl-4 space-y-4">
                <div>
                  <h5 className="font-semibold">
                    a. Unauthorized Use of Name or Brand:
                  </h5>
                  <p>
                    Krishna Kumar Pathak (SEBI Registered Research Analyst)
                    and/or the brand WealthFino shall not, under any
                    circumstances, be held liable or responsible for any
                    monetary loss, damage, or grievance suffered by any
                    individual or entity due to the fraudulent use or
                    impersonation of Krishna Kumar Pathak's name, image,
                    designation, employee identity, or the WealthFino brand —
                    through WhatsApp, Telegram, mobile calls, emails, social
                    media platforms, websites, or any other mode of
                    communication not officially authorized by Krishna Kumar
                    Pathak or WealthFino.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold">
                    b. Unauthorized Transactions:
                  </h5>
                  <p>
                    If any person voluntarily transfers funds, makes UPI
                    payments, bank transfers, deposits, or provides financial
                    credentials or OTPs to any third party (including
                    individuals posing as representatives of Krishna Kumar
                    Pathak or WealthFino) based on false promises, greed,
                    urgency, high-return claims, or misleading investment
                    schemes, then such payments shall be considered null, void,
                    and made{" "}
                    <strong>
                      entirely at the individual's own risk and discretion.
                    </strong>
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold">
                    c. No Legal Right to Claim or Complaint:
                  </h5>
                  <p>
                    No user or individual shall have the right to file any
                    police FIR, cybercrime complaint, legal notice, consumer
                    forum case, or any judicial or quasi-judicial action against
                    Krishna Kumar Pathak and/or WealthFino for such unauthorized
                    payments or interactions. Any such claims shall not be
                    entertained, acknowledged, or responded to.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold">
                    d. Official Communication and Payment Channels:
                  </h5>
                  <p>
                    All legitimate communication from Krishna Kumar Pathak or
                    WealthFino shall be through the{" "}
                    <strong>
                      official website ({" "}
                      <Link
                        href="https://www.krishnapathak.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#13B5E8]"
                      >
                        www.krishnapathak.com
                      </Link>{" "}
                      /{" "}
                      <Link
                        href="https://www.krishnapathak.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#13B5E8]"
                      >
                        www.wealthfino.com
                      </Link>{" "}
                      ), verified emails, and listed helpline numbers only.
                    </strong>{" "}
                    Users are strongly advised to verify authenticity before
                    making any payments or sharing confidential information.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold">e. Disclaimer of Liability:</h5>
                  <p>
                    Krishna Kumar Pathak and WealthFino expressly disclaim all
                    liability, in contract, tort, or otherwise, for any direct,
                    indirect, incidental, special, or consequential loss,
                    damage, or fraud arising out of or in connection with such
                    unauthorized interactions, communications, or payments made
                    by users outside official channels.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold">f. User Responsibility:</h5>
                  <p>
                    By interacting with or using any services related to Krishna
                    Kumar Pathak or WealthFino, users accept full responsibility
                    to verify the legitimacy of communication, protect their
                    personal and financial data, and acknowledge that no
                    liability shall arise against Krishna Kumar Pathak or
                    WealthFino for any third-party frauds or impersonation acts.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold">f. Exclusion of Liability:</h5>
                  <p>
                    In accordance with applicable Indian laws including but not
                    limited to the Information Technology Act, 2000, Indian
                    Penal Code, 1860, and relevant Consumer Protection statutes,
                    Krishna Kumar Pathak and/or WealthFino shall not be held
                    liable, accountable, or responsible in any manner—civil,
                    criminal, or otherwise—for any loss, damage, or injury
                    (monetary or otherwise) suffered by any individual,
                    investor, user, or customer due to:
                  </p>
                  <ul className="list-disc list-inside pl-4">
                    <li>
                      Voluntary payments made to unauthorized persons or
                      unverified accounts;
                    </li>
                    <li>
                      Falling prey to fraud, misrepresentation, false promises
                      of profit, or time-sensitive urgency tactics;
                    </li>
                    <li>
                      Misuse of name, designation, logo, brand, or likeness of
                      Krishna Kumar Pathak or WealthFino on digital or physical
                      platforms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">4. User Assumes Full Liability</h4>
              <p className="mb-2">The User agrees that:</p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Any loss, fraud, scam, miscommunication, or payment to
                  unauthorised parties is the User's sole responsibility
                </li>
                <li>
                  Krishna Kumar Pathak and WealthFino are fully protected from
                  any legal, civil, criminal, or financial liability related to
                  such transactions
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">5. Legal Standing & Protection</h4>
              <p className="mb-2">This clause is enforceable under:</p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Regulation 18 of SEBI (Research Analysts) Regulations, 2014
                </li>
                <li>
                  Sections 43A & 79 of the Information Technology Act, 2000
                </li>
                <li>
                  Section 73 of the Indian Contract Act, 1872 (liability
                  limitation)
                </li>
                <li>General cyber fraud protection laws of India</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Final Declaration</h3>
          <p className="mb-2 italic">
            "We do not take responsibility for any outcome—regardless of the
            cause, condition, or consequence."
          </p>
          <p className="mb-2">
            Krishna Kumar Pathak (SEBI Registered Research Analyst –
            INH300009914) and the brand <em>WealthFino</em> shall not be held
            liable for any loss, error, financial damage, technical failure, or
            decisions made based on any content shared through our platforms.
          </p>
          <p className="mb-2">
            All investments in the securities market are subject to market
            risks. Users are advised to exercise their own judgment and
            discretion before making any financial decisions.
          </p>
          <h4 className="text-lg font-bold">Important Payment Notice:</h4>
          <p>
            Payments should only be made through the official WealthFino mobile
            application or website. Do <strong>not</strong> transfer funds to
            any unknown individual, unauthorized link, or third-party claiming
            to represent WealthFino.
          </p>
          <p className="mt-2">
            If you become a victim of any scam, fraud, impersonation, or false
            promise made outside our official channels, you alone will be held
            responsible.{" "}
            <em>
              Krishna Kumar Pathak and WealthFino are not liable in any manner
              whatsoever.
            </em>
          </p>
          <p className="mt-2">
            "हम किसी भी चीज़ की जिम्मेदारी नहीं लेते — चाहे कोई भी कारण हो, कोई
            भी परिस्थिति हो, हमें कोई जिम्मेदारी नहीं है।"
          </p>
        </div>
      </div>
    </>
  );
};

export default LegalRiskDisclosurePage;
