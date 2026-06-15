import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,   // e.g. contacteasequran@gmail.com
    pass: process.env.GMAIL_APP_PASSWORD, // 16-char app password from Google
  },
});

const TO = process.env.CONTACT_EMAIL!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, childAge, course, message } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Ease Quran UK Website" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `New Free Trial Booking — ${name}`,
      html: `
        <h2 style="color:#122259">New Free Trial Booking</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#f9f9f9">Name</td><td style="padding:8px 12px;border:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#f9f9f9">Email</td><td style="padding:8px 12px;border:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#f9f9f9">Phone/WhatsApp</td><td style="padding:8px 12px;border:1px solid #eee">${phone}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#f9f9f9">Child's Age</td><td style="padding:8px 12px;border:1px solid #eee">${childAge || "—"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#f9f9f9">Preferred Course</td><td style="padding:8px 12px;border:1px solid #eee">${course || "—"}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;background:#f9f9f9">Message</td><td style="padding:8px 12px;border:1px solid #eee">${message || "—"}</td></tr>
        </table>
        <p style="color:#999;font-size:12px;margin-top:16px">Sent from easequran.co.uk contact form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
