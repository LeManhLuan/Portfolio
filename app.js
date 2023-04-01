const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyparser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendGirdTransporter = require('nodemailer-sendgrid-transport');

require('dotenv').config();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const transporter = nodemailer.createTransport(
    sendGirdTransporter({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)

app.post('/sendmail', (req, res) => {
    const { name, email, jobtype, message } = req.body;
    if(!name) {
        return res.status(400).json({error: "Please add your name!"});
    }
    if(!email) {
        return res.status(400).json({error: "Please add your email!"});
    }
    if(!jobtype) {
        return res.status(400).json({error: "Please add jobtype!"});
    }
    if(!message) {
        return res.status(400).json({error: "Please add your message!"});
    }
    // console.log(">>>>",process.env.API_SENDGRID);
    transporter.sendMail({
        to: "lemanhluan733@gmail.com",
        from: "lemanhluan733@gmail.com",
        subject: "job Offers",
        html: `
        <h5>Details Information: </h5>
        <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>E-mail: ${email}</p></li>
            <li><p>Job Type: ${jobtype}</p></li>
            <li><p>Message: ${message}</p></li>
        </ul>
        `,
    });
    res.json({success: "Your email has been sent!"})
})

app.listen(PORT, (req, res) => {
    console.log("Server Connected");
});