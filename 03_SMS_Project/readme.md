📱 Twilio SMS Sender using Express.js
This project is a simple Node.js and Express.js web application that allows users to send SMS messages using the Twilio API.

## 🧰 Technologies Used
- Node.js
- Express.js
- EJS
- Twilio API
- Dotenv

🚀 Features
View a form to send an SMS (/send-sms)

Send SMS to any valid phone number via Twilio

API endpoint to test root (/)

EJS templating for frontend view

🛠️ Setup Instructions
1. Clone the repo:

git clone https://github.com/your-username/twilio-sms-app.git
cd twilio-sms-app

2. Install dependencies

npm install

3. Create a .env file

PORT=3000
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number

4. Start the server

nodemon index.js

📂 Endpoints
GET /

Returns a simple JSON greeting:
{
  "message": "Hello World"
}

GET /send-sms
Renders the EJS form (views/sms_page.ejs) for sending SMS.

POST /send-sms
Handles form submission for sending an SMS via Twilio.

Body Parameters (req.body)
to (string): Recipient phone number (e.g., +1234567890)

message (string): Message text to be sent
Example Request:
{
  "to": "+1234567890",
  "message": "Hello from Twilio!"
}

Success Response (res.send)
200 OK: "SMS sent successfully"

Error Responses
400 Bad Request: "Missing required fields"

500 Internal Server Error: "Error sending SMS"