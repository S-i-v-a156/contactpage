const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.post('/', (req, res) => {
  console.log('Data posted');
  const { username, mailId, subject, message } = req.body;
  console.log(req.body); 
  var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    username: "229b611babd1e6",
    password: "88148aff15b263"
  }
});
let mailOpt = { 
    from: 'test mailing<smsvia85@gmail.com>',
    to: 'siva638302@gmail.com',
    subject: `Message from ${username}`,
    text: `User Name : ${username} \nMail id : ${mailId} \nSubject : ${subject} \nMessage : ${message}`
  };
  transporter.sendMail(mailOpt, function(error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + data.response);
    }
});
});
app.listen(3001) 