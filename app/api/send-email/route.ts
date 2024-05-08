import { EmailTemplate } from '@/app/_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:any) {
  const body = await req.json();
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [body.email],
      subject: "Orders From Raid Tech",
      react: EmailTemplate({ body }),
    } ); // Cast the options to CreateEmailOptions

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
