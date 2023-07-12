const nodemailer = require("nodemailer");

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PW;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: password
    }
})

export const mailOptions = {
    from: email,
    to: email
}