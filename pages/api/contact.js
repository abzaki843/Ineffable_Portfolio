export default function (req, res) {
  require('dotenv').config()
  const PASSWORD = process.env.password
  let nodemailer = require('nodemailer')

  console.log(PASSWORD)
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'jibran8432@gmail.com',
      pass: '5551788ab',
    },
    secure: true,
  })
  console.log(req.body)
  const mailData = {
    from: 'jibran8432@gmail.com',
    to: 'info@ineffabledevs.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200)
}
