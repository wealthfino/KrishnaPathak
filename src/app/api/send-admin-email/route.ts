import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, phone } = body;

  // Configure transporter (example uses Gmail SMTP)
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
          <p style="margin-bottom: 10px;"><strong>First Name:</strong> ${firstName}</p>
          <p style="margin-bottom: 10px;"><strong>Last Name:</strong> ${lastName}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1f2b5e; text-decoration: none;">${email}</a></p>
          <p style="margin-bottom: 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1f2b5e; text-decoration: none;">${phone}</a></p>
        </div>
        <div style="background-color: #eaeaea; padding: 15px; text-align: center; font-size: 12px; color: #555;">
          You received this message via your website WealthFino. Check your database for more details. Please do not reply to this email.
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
