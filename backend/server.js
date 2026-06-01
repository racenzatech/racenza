import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'racenza.tech@gmail.com',
      cc: 'info@macenza.com',
      subject: `[Racenza Website] New Inquiry: ${projectType}`,
      text: `
You have a new contact request from the Racenza website.

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Required: ${projectType}

Message:
${message}
      `,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #111 0%, #222 100%); padding: 25px; text-align: center; border-bottom: 3px solid #D4AF37;">
            <h2 style="margin: 0; font-size: 22px; color: #ffffff; letter-spacing: 1px;">New Racenza Inquiry</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 140px; color: #666; font-size: 14px; font-weight: bold; text-transform: uppercase;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222; font-size: 16px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px; font-weight: bold; text-transform: uppercase;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #D4AF37; text-decoration: none; font-weight: 500;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 14px; font-weight: bold; text-transform: uppercase;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222; font-size: 16px;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-size: 14px; font-weight: bold; text-transform: uppercase;">Service</td>
                <td style="padding: 10px 0; color: #222; font-size: 16px; font-weight: 500;">${projectType}</td>
              </tr>
            </table>
            
            <div style="background-color: #fafafa; padding: 25px; border-radius: 8px; border-left: 4px solid #D4AF37;">
              <h4 style="margin-top: 0; margin-bottom: 15px; color: #555; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;">Message / Project Brief</h4>
              <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f9f9f9; color: #999; text-align: center; padding: 20px; font-size: 12px; border-top: 1px solid #eaeaea;">
            This email was securely submitted via the <strong>Racenza Contact Form</strong>.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
