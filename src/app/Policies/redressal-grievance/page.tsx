"use client";

import React from "react";
import Link from "next/link";

const RedressalOfGrievancePage = () => {
  return (
    <div className="text-white space-y-4 text-base">
      <h2 className="text-2xl font-semibold">
        REDRESSAL OF GRIEVANCE / ESCALATION MATRIX
      </h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">
          Grievance Redressal Process
        </h3>
        <p>
          We value your trust and are committed to resolving all concerns in a
          fair and timely manner. If you have any grievance or feedback
          regarding our services, you may follow the steps below:
        </p>
      </section>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">
            Step 1: Contact Your Assigned Representative
          </h4>
          <p>
            If you are dissatisfied with any service, please first contact the
            Research Analyst department representative or consultant assigned to
            you. You may discuss your concerns directly with them. We will
            strive to resolve your issue within 7 to 10 working days on a
            best-effort basis.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Step 2: Reach Out via Call or Email</h4>
          <p>
            You may also contact your assigned representative by calling{" "}
            <strong>+91 98834 55700</strong> or by emailing us at{" "}
            <Link
              href="mailto:skrishna.sk4@gmail.com"
              className="text-[#13B5E8]"
            >
              skrishna.sk4@gmail.com
            </Link>
            .
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Step 3: Submit a Formal Complaint</h4>
          <p>
            If the issue remains unresolved, you may send your complaint in
            writing or by email to:{" "}
            <Link
              href="mailto:skrishna.sk4@gmail.com"
              className="text-[#13B5E8]"
            >
              skrishna.sk4@gmail.com
            </Link>
            .
            <br />
            We aim to respond and resolve all complaints within 7 to 10 working
            days. Once your concern is received, we will evaluate the issue and
            respond with a clear resolution.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Step 4: Escalate to the Compliance Officer
          </h4>
          <p>
            If you are not satisfied with the response or resolution provided,
            you may escalate the matter to:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>
              <strong>Mr. Krishna Pathak (Compliance Officer)</strong>
            </li>
            <li>
              Email:{" "}
              <Link
                href="mailto:wealthfino@gmail.com"
                className="text-[#13B5E8]"
              >
                wealthfino@gmail.com
              </Link>
            </li>
            <li>Phone: +91 98834 55700</li>
            <li>
              Mr. Pathak will review your concern and get in touch with you at
              the earliest.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">
            Step 5: Approach SEBI SCORES Platform
          </h4>
          <p>
            If your complaint remains unresolved for more than one month, you
            may escalate it to the regulator, the Securities and Exchange Board
            of India (SEBI) through the SCORES platform:
            <br />
            <Link
              href="https://scores.sebi.gov.in"
              className="text-[#13B5E8]"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://scores.sebi.gov.in
            </Link>
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Step 6: SEBI-Supported ODR Platform</h4>
          <p>
            If the issue remains unresolved even on SCORES, you can initiate
            dispute resolution through SEBI's Online Dispute Resolution (ODR)
            portal: <br />
            <Link
              href="https://smartodr.in/login"
              className="text-[#13B5E8]"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://smartodr.in/login
            </Link>
          </p>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-2">
          Grievance Redressal Contact Details
        </h3>
        <p className="mb-4">
          For any complaints, queries, or feedback regarding our services,
          please use the following contact information. We are committed to
          resolving all concerns ethically and promptly.
        </p>
        <div className="overflow-x-auto scroll-hidden">
          <table className="min-w-full table-auto border-collapse border border-blue-50">
            <thead className="bg-blue-200 text-[#18181b]">
              <tr>
                <th className="border border-[#18181b] p-2">Designation</th>
                <th className="border border-[#18181b] p-2">Contact Person</th>
                <th className="border border-[#18181b] p-2">Address</th>
                <th className="border border-[#18181b] p-2">Contact No.</th>
                <th className="border border-[#18181b] p-2">Email ID</th>
                <th className="border border-[#18181b] p-2">Working Hours</th>
              </tr>
            </thead>
            <tbody className="text-black bg-white">
              {[
                {
                  designation: "Customer Care",
                  person: "Krishna Pathak",
                  address:
                    "RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar Co-operative, Durgapur, West Bengal – 713206",
                  contact: "+91 98834 55700",
                  email: "wealthfino@gmail.com",
                  hours: "10:00 AM - 6:00 PM",
                },
                {
                  designation: "Head - Customer Care",
                  person: "Krishna Pathak",
                  address:
                    "RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar Co-operative, Durgapur, West Bengal – 713206",
                  contact: "+91 98834 55700",
                  email: "skrishna.sk4@gmail.com",
                  hours: "10:00 AM - 6:00 PM",
                },
                {
                  designation: "Compliance Officer",
                  person: "Krishna Pathak",
                  address:
                    "RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar Co-operative, Durgapur, West Bengal – 713206",
                  contact: "+91 98834 55700",
                  email: "wealthfino@gmail.com",
                  hours: "10:00 AM - 6:00 PM",
                },
                {
                  designation: "Chief Executive Officer (CEO)",
                  person: "Krishna Pathak",
                  address:
                    "RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar Co-operative, Durgapur, West Bengal – 713206",
                  contact: "+91 98834 55700",
                  email: "skrishna.sk4@gmail.com",
                  hours: "10:00 AM - 6:00 PM",
                },
                {
                  designation: "Principal Officer",
                  person: "Krishna Pathak",
                  address:
                    "RS-39/43, 5/3C Golden Park, Sankarpur West, Near Rabindranagar Co-operative, Durgapur, West Bengal – 713206",
                  contact: "+91 98834 55700",
                  email: "skrishna.sk4@gmail.com",
                  hours: "10:00 AM - 6:00 PM",
                },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="border border-black p-2">{row.designation}</td>
                  <td className="border border-black p-2">{row.person}</td>
                  <td className="border border-black p-2">{row.address}</td>
                  <td className="border border-black p-2">{row.contact}</td>
                  <td className="border border-black p-2">
                    <Link
                      href={`mailto:${row.email}`}
                      className="text-blue-600 underline"
                    >
                      {row.email}
                    </Link>
                  </td>
                  <td className="border border-black p-2">{row.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default RedressalOfGrievancePage;
