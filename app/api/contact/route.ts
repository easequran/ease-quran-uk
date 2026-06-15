import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const TO = process.env.CONTACT_EMAIL!;

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 16px;background:#f8f9fc;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;border-bottom:1px solid #e5e7eb;width:160px">${label}</td>
      <td style="padding:12px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb">${value}</td>
    </tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, childAge, course, message } = body as Record<string, string>;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submitted = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
      dateStyle: "full",
      timeStyle: "short",
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Helvetica Neue',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="background:#122259;border-radius:12px 12px 0 0;padding:28px 32px">
            <p style="margin:0;font-size:11px;font-weight:700;color:#F5A623;letter-spacing:0.1em;text-transform:uppercase">Ease Quran UK</p>
            <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff">New Free Trial Booking</h1>
          </td>
        </tr>

        <!-- Alert banner -->
        <tr>
          <td style="background:#F5A623;padding:10px 32px">
            <p style="margin:0;font-size:13px;font-weight:600;color:#ffffff">Action required: Please contact this student within 2 hours.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:32px">
            <p style="margin:0 0 20px;font-size:14px;color:#374151;line-height:1.6">
              A new free trial booking has been submitted through the Ease Quran UK website. The student details are below.
            </p>

            <!-- Details table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
              ${row("Full Name", name)}
              ${row("Email", `<a href="mailto:${email}" style="color:#122259;text-decoration:none;font-weight:600">${email}</a>`)}
              ${row("Phone / WhatsApp", `<a href="https://wa.me/${phone.replace(/\D/g,"")}" style="color:#122259;text-decoration:none;font-weight:600">${phone}</a>`)}
              ${row("Child's Age", childAge || "Not provided")}
              ${row("Preferred Course", course || "Not specified")}
              ${row("Message", message || "None")}
              ${row("Submitted", submitted)}
            </table>

            <!-- Quick reply buttons -->
            <table cellpadding="0" cellspacing="0" style="margin-top:24px">
              <tr>
                <td style="padding-right:12px">
                  <a href="mailto:${email}" style="display:inline-block;background:#122259;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px">Reply by Email</a>
                </td>
                <td>
                  <a href="https://wa.me/${phone.replace(/\D/g,"")}" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 20px;border-radius:8px">Open WhatsApp</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fc;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:16px 32px">
            <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6">
              This notification was sent automatically from the contact form at easequran.co.uk. Do not reply to this email directly — use the buttons above to contact the student.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Ease Quran UK" <${process.env.GMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `New Booking: ${name} — Free Trial Request`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
