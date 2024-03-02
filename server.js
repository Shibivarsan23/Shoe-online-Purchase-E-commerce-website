const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const accountSid = '9876543221';
const authToken = '09876543321';
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (body) => {
    let msgOptions = {
        from: '*********',
        to: '+919876544',
        body
    }
    try {
        const message = await client.messages.create(msgOptions);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

app.post('/call-node-function', (req, res) => {
    sendSMS(req.body.pass);
    res.json({
        message: 'Password received successfully!'
    });
});

// sendSMS('string msg');

app.listen(3000, () => {
    console.log("Server started");
});