import "dotenv/config";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
  to: [
    "plaguemoon@gmail.com",
    "zubr7333@gmail.com",
    "Yulia.gosteva85@gmail.com",
    "guardsofword@gmail.com",
  ],
  from: "vmudrij0508@gmail.com",
  subject: "iPhone Sale Tonight",
  html: `<h1 style="color: red">Click on link a get a 90% discount on brand new iPhone 15 Pro Max</h1>`,
  text: `Click on link a get a 90% discount on brand new iPhone 15 Pro Max`,
};

sgMail.send(message).then(console.log).catch(console.error);
