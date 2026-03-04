import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not specified"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0;padding:0;background-color:#f5f6fa;font-family:'Open Sans',Arial,sans-serif;color:#1a2744;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f6fa;padding:32px 0;">
          <tr><td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
              <!-- Header -->
              <tr>
                <td style="background-color:#1a3a5c;padding:32px 40px;text-align:center;">
                  <h1 style="margin:0;color:#ffffff;font-family:'Montserrat',Arial,sans-serif;font-size:24px;font-weight:700;letter-spacing:1px;">SILABELE TRADING ENTERPRISE</h1>
                  <p style="margin:4px 0 0;color:#e8772e;font-size:13px;font-weight:600;letter-spacing:2px;">BUILDING EXCELLENCE. DELIVERING TRUST.</p>
                </td>
              </tr>
              <!-- Body -->
              <tr>
                <td style="padding:40px;">
                  <h2 style="margin:0 0 16px;color:#1a3a5c;font-family:'Montserrat',Arial,sans-serif;font-size:20px;">Thank You, ${name}!</h2>
                  <p style="margin:0 0 16px;line-height:1.7;color:#3a4a5c;">We have received your inquiry and a member of our team will get back to you within <strong>24 business hours</strong>.</p>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f6fa;border-radius:6px;margin:24px 0;">
                    <tr><td style="padding:20px 24px;">
                      <p style="margin:0 0 8px;font-size:13px;color:#7a8a9c;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Your Submission Summary</p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#3a4a5c;">
                        <tr><td style="padding:6px 0;font-weight:600;width:120px;">Service:</td><td style="padding:6px 0;">${service || "General Inquiry"}</td></tr>
                        <tr><td style="padding:6px 0;font-weight:600;">Message:</td><td style="padding:6px 0;">${message}</td></tr>
                      </table>
                    </td></tr>
                  </table>

                  <p style="margin:24px 0 0;line-height:1.7;color:#3a4a5c;">If your matter is urgent, please don't hesitate to call us directly.</p>
                </td>
              </tr>
              <!-- Signature -->
              <tr>
                <td style="padding:0 40px 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-top:2px solid #e8772e;padding-top:24px;">
                    <tr>
                      <td>
                        <p style="margin:0;font-family:'Montserrat',Arial,sans-serif;font-weight:700;color:#1a3a5c;font-size:15px;">Silabele Trading Enterprise</p>
                        <p style="margin:4px 0 0;font-size:13px;color:#7a8a9c;">Civil Engineering &bull; Plant Hire &bull; Road Freight &bull; Consulting</p>
                        <table cellpadding="0" cellspacing="0" style="margin-top:12px;font-size:13px;color:#3a4a5c;">
                          <tr><td style="padding:2px 8px 2px 0;">📞</td><td>0861-555-058</td></tr>
                          <tr><td style="padding:2px 8px 2px 0;">✉️</td><td>info@silabele.com</td></tr>
                          <tr><td style="padding:2px 8px 2px 0;">🌐</td><td>www.silabele.com</td></tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Footer -->
              <tr>
                <td style="background-color:#1a3a5c;padding:20px 40px;text-align:center;">
                  <p style="margin:0;font-size:12px;color:#8a9ab0;">© ${new Date().getFullYear()} Silabele Trading Enterprise (Pty) Ltd. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Silabele Website <noreply@resend.silabele.com>",
        to: ["info@silabele.com"],
        subject: `New Inquiry: ${service || "General"} — ${name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email to the sender
    const confirmRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Silabele Trading Enterprise <noreply@resend.silabele.com>",
        to: [email],
        subject: `We've received your inquiry — Silabele Trading Enterprise`,
        html: confirmationHtml,
        reply_to: "info@silabele.com",
      }),
    });

    if (!confirmRes.ok) {
      console.error("Confirmation email error:", await confirmRes.json());
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
