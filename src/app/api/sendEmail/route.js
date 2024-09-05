import { MailSlurp } from "mailslurp-client";

const mailslurp = new MailSlurp({ apiKey: process.env.MAILSLURP_API_KEY });

export async function POST(request) {
  const { email, contact, message } = await request.json();

  try {
    const inboxId = process.env.MAILSLURP_INBOX_ID;
    if (!inboxId) {
      throw new Error("MailSlurp inbox ID is not set in environment variables");
    }

    const sendEmailOptions = {
      to: [email],
      subject: `New Contact Request from ${contact}`,
      body: `Empowering your home and business with reliable solar solutions and electrical expertise. Trust us to handle everything from installation to safety checks — ensuring your peace of mind.`,
      isHTML: false,
    };

    const sendResponse = await mailslurp.sendEmail(inboxId, sendEmailOptions);

    console.log("Email sent:", sendResponse);
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
