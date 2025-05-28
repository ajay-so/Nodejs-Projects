require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "Hello World" });
});

app.get('/send-sms', (req, res) => {
    res.render('sms_page'); // looks in views/sms_page.ejs
});

app.post('/send-sms', async (req, res) => {
    const { to, message } = req.body;

    if (!to || !message) {
        return res.status(400).send('Missing required fields');
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    try {
        await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to
        });
        res.send('SMS sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending SMS');
    }
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})