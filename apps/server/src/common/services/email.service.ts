import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Your App <iseltarek15@gmail.com>';

export async function sendVerificationEmail(to: string, url: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: 'Verify your email',
    html: `
        <div style="font-family: sans-serif;">
          <h2>Sign up to Nudge</h2>
          <p>Click the link below to continue:</p>
          <a href="${url}" style="
            display:inline-block;
            padding:10px 20px;
            background:black;
            color:white;
            border-radius:8px;
            text-decoration:none;
          ">
            Continue
          </a>
          <p>This link expires in 10 minutes.</p>
        </div>
      `,
  });
}

export async function sendMagicLinkEmail(to: string, url: string) {
  console.log(`\n🔗 Magic Link → ${url}\n`);

  const response = await resend.emails.send({
    from: FROM,
    to,
    subject: 'Your magic link',
    html: `
        <div style="font-family: sans-serif;">
          <h2>Sign in to Nudge</h2>
          <p>Click the link below to continue:</p>
          <a href="${url}" style="
            display:inline-block;
            padding:10px 20px;
            background:black;
            color:white;
            border-radius:8px;
            text-decoration:none;
          ">
            Continue
          </a>
          <p>This link expires in 10 minutes.</p>
        </div>
      `,
  });
  console.log(response);
}
