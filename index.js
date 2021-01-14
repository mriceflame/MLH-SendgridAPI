const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.API_KEY)

const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'MLH - Local Hack Day 4',
  text: 'Fun to Hack with MLH',
  html: '<strong>Learn and Fun with MLH daily hacks/strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
//testing
