import "dotenv/config";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

const message = {
  to: "vmudrij0508@gmail.com",
  from: "vmudrij0508@gmail.com",
  subject: "iPhone Sale Tonight",
  html: `<h1 style="color: red">Click on link a get a 90% discount on brand new iPhone 15 Pro Max</h1>`,
  text: `Click on link a get a 90% discount on brand new iPhone 15 Pro Max`,
};

transport.sendMail(message).then(console.log).catch(console.error);
