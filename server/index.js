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
   const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'tatum.doyle0@ethereal.email',
        pass: 'GX5sDXXgM6jSWjCqNG'
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
