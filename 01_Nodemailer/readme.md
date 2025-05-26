# 📧 Node.js Email Sender with Nodemailer

This is a simple Node.js application using **Express**, **Nodemailer**, and **EJS** to send emails via a Gmail account.

---

## 🚀 Features

- Send emails via Gmail using a simple form
- Server-side validation
- `.env` for secure environment configuration
- EJS templating engine

---

✉️ API Endpoints
GET /
Renders the email form (views/index.ejs)

POST /send-email
Sends an email using the submitted form data.

✅ Request Body
{
  "to": "receiver@example.com",
  "subject": "Hello",
  "text": "This is a test email"
}

✅ Success Response:
Email sent successfully

❌ Error Response
400 Bad Request – if any fields are missing

500 Internal Server Error – if email fails to send
