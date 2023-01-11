import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  const form = JSON.parse(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  try {
    const message = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.CONTACT_EMAIL,
      subject: `Contact form - ${form.name}`,
      html: `
        <div>name: ${form.name}</div>
        <div>email: ${form.email}</div>
        <div>message: ${form.message}</div>
      `,
    };

    await sgMail.send(message);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
}
