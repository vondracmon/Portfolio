import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Configure Nodemailer transporter with Gmail
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false, 
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	},
	connectionTimeout: 10000,
	greetingTimeout: 10000,
	socketTimeout: 10000
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✓ Email service ready');
  }
});

// Send email endpoint
app.post('/send-email', async (req, res) => {
  const { emailTo, message } = req.body;

  // Validation
  if (!emailTo || !message) {
    return res.status(400).json({ 
      ok: false, 
      error: 'Email and message are required' 
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailTo)) {
    return res.status(400).json({ 
      ok: false, 
      error: 'Invalid email address' 
    });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your email (loyolajohnmark010@gmail.com)
      replyTo: emailTo, // User's email as reply-to
      subject: `Portfolio Contact from ${emailTo}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>From:</strong> ${emailTo}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ 
      ok: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('❌ Email send error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Failed to send email' 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
