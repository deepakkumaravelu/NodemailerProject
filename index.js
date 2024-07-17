const express = require('express')
const app = express()
const port = 3000
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})
console.log(process.env.MAIL_USERNAME);
let transporter = nodemailer.createTransport({
      service: 'gmail',  
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });
    let mailOptions = {
      from:'deepak1122003kumar@gmail.com',
      to: '717821E151@kce.ac.in',
      subject: 'Nodemailer Project',
      text: 'https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/'
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });