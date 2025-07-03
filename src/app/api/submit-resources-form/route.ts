import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabaseClient";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { first_name, last_name, phone, email } = data;

  // Save to Supabase
  const { error } = await supabase.from("resources").insert([{ first_name, last_name, phone, email }]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const downloadUrl = process.env.RESOURCES_URL!;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `WealthFino <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Your Stock Market Study Kit is Here! 📦",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #ffffff; padding: 40px 20px; color: #1f2b5e;">
        <div style="max-width: 600px; margin: 0 auto; text-align: left;">
          <p style="font-size: 18px; margin: 0 0 16px;">Hi ${first_name} 👋,</p>

          <p style="font-size: 18px; margin: 0 0 16px;">
            Thank you for requesting our <strong>"Stock Market Study Kit"</strong>!
          </p>

          <div style="text-align: center; margin: 24px 0;">
            <a href="${downloadUrl}" 
              style="display: inline-block; background-color: #7ac678; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 16px;">
              Download Study Kit
            </a>
          </div>

          <p style="font-size: 16px; margin: 0 0 16px;">
            This free bundle includes curated eBooks, trading strategies, and insights to kickstart and boost your trading journey.
          </p>

          <p style="font-size: 14px; margin: 0 0 24px;">
            Happy learning and trading,<br /><strong>Team WealthFino</strong>
          </p>

          <p style="font-size: 13px; color: #888; text-align: center; margin: 0;">
            &copy; 2025 WealthFino. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Form submitted and email sent." }, { status: 200 });
  } catch (e) {
    console.error("Email sending error:", e);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
