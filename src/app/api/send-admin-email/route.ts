import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Tell Vercel to use Node.js runtime (needed for nodemailer)
export const runtime = "nodejs";

// Allow CORS from multiple origins (e.g., localhost for dev + your Hostinger site)
const allowedOrigins = [
  "http://localhost:3000", // dev
  "https://yourfrontend.com", // prod (Hostinger or Vercel domain)
  process.env.ALLOWED_ORIGIN || "", // fallback from env
];

// Helper: set CORS headers
function withCORS(res: NextResponse, origin: string | null) {
  res.headers.set("Access-Control-Allow-Origin", origin || "*");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}

// Handle preflight requests
export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  const isAllowed = origin && allowedOrigins.includes(origin);
  return withCORS(new NextResponse(null, { status: 204 }), isAllowed ? origin : null);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone } = body;

    // Configure transporter (Gmail SMTP example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"WealthFino" <${process.env.EMAIL_FROM}>`,
      to: `${process.env.ADMIN_EMAIL}`,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); background-color: #eff6ff;">
          <div style="background: linear-gradient(to right, #1f2b5e, #13B5E8, #7ac678); padding: 20px; color: white; text-align: center;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px; background-color: #eff6ff;">
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1f2b5e;">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1f2b5e;">${phone}</a></p>
          </div>
          <div style="background-color: #eaeaea; padding: 15px; text-align: center; font-size: 12px; color: #555;">
            You received this message via your website WealthFino. Please do not reply to this email.
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    const origin = req.headers.get("origin");
    const isAllowed = origin && allowedOrigins.includes(origin);

    return withCORS(NextResponse.json({ success: true, info }), isAllowed ? origin : null);
  } catch (error) {
    console.error("Email sending error:", error);

    const origin = req.headers.get("origin");
    const isAllowed = origin && allowedOrigins.includes(origin);

    return withCORS(
      NextResponse.json({ error: "Failed to send email" }, { status: 500 }),
      isAllowed ? origin : null
    );
  }
}
