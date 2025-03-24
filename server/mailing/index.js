// NODEMAILER TEST
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'PROVIDER',
  auth: {
    user: 'USERNAME',
    pass: 'PASSWORD'
  }
});

const mailOptions = {
  from: 'SENDER',
  to: 'RECIPIENT',
  subject: 'DEMO SUBJECT',
  html: '<h1>WOW!</h1><p>A message.</p>'
};

const sendMail = function() {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { sendMail }; 