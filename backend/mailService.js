const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
const dotenv = require('dotenv')
dotenv.config({ path: './configs/.env' })
const cors = require("cors")
const { body, validationResult } = require('express-validator')


app.use(express.json());
app.use(cors({
    credentials: true,
    origin: [
        'http://ecoclub.samgtu.local',
        'http://localhost:3000',
        'http://10.10.0.10:3000',
    ]
}));
const port = 5001
app.listen(port, () => {
    console.log(`Server is running on port: ${port} ${process.env.MAILER_HOST}`)
})

let transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    secure: true,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
    }
})

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
})


app.post('/register',
    body('mailerState.email').isEmail(),
    body('mailerState.fullname').isLength({ min: 2 }),
    body('mailerState.work').isLength({ min: 2 }),
    body('mailerState.name').isLength({max: 0}),

    function (req, res) {
        const errors = validationResult(req);
        console.log(errors);
        if (errors.isEmpty()) {
            let mailOptions = {
                from: process.env.MAILER_USER,
                to: process.env.MAILER_USER,
                subject: `Заявка на вступление в Экоклуб СамГТУ от ${req.body.mailerState.date}`,
                text: '',
                html: `
                <div bgcolor="#dffcde" style="width: 600px;">
                <hr style="color: #40a353; margin:10px;"></hr> 
                    <p style="color: #777777; margin: 2px; font: 14px Helvetica, sans-serif;"><i>Здравствуйте!</i></p>
                    <p style="color: #777777; margin: 2px; font: 14px Helvetica, sans-serif;"><i>Прошу принять меня в экоклуб СамГТУ «Жизнь»</i></p>
                    <hr style="color: #40a353; margin:10px;"></hr> 
                    
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Анкета:</i></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Имя: ${req.body.mailerState.fullname}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>${req.body.mailerState.sername ? `Фамилия: ${req.body.mailerState.sername}` : ''}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Адрес электронной почты: ${req.body.mailerState.email}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>${req.body.mailerState.phone ? `Телефон: ${req.body.mailerState.phone}` : ''}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Место работы / учебы: ${req.body.mailerState.work}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>${req.body.mailerState.message ? `Комментарий: ${req.body.mailerState.message}` : ''}</i></p>
              
                </div>
            `
            }
            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    res.json({
                        status: "error",
                    })
                    console.log("Error " + err);
                } else {
                    res.json({
                        status: "success",
                    })
                    console.log("Email sent successfully");
                }
            })
        }
    })

app.post('/initiatives',
    body('initiativesState.email').isEmail(),
    body('initiativesState.fullname').isLength({ min: 2 }),
    body('initiativesState.initiatives').isLength({ min: 6 }),
    body('initiativesState.message').isLength({ min: 6 }),
    body('initiativesState.name').isLength({max: 0}),

    function (req, res) {
        const errors = validationResult(req)
        console.log(errors)
        if (errors.isEmpty()) {
            let mailOptions = {
                from: process.env.MAILER_USER,
                to: process.env.MAILER_USER,
                subject: `Заявка на регистрацию инициативы от ${req.body.initiativesState.date}`,
                text: '',
                html: `
                <div bgcolor="#dffcde" style="width: 600px;">
                <hr style="color: #40a353; margin:10px;"></hr> 
                    <p style="color: #777777; margin: 2px; font: 14px Helvetica, sans-serif;"><i>Здравствуйте!</i></p>
                    <p style="color: #777777; margin: 2px; font: 14px Helvetica, sans-serif;"><i>Прошу рассмотреть инициативу</i></p>
                    <hr style="color: #40a353; margin:10px;"></hr> 
                    
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Имя: ${req.body.initiativesState.fullname}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>${req.body.initiativesState.sername ? `Фамилия: ${req.body.initiativesState.sername}` : ''}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Адрес электронной почты: ${req.body.initiativesState.email}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>${req.body.initiativesState.phone ? `Телефон: ${req.body.initiativesState.phone}` : ''}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>Название инициативы: ${req.body.initiativesState.initiatives}</i></center></p>
                    <p style="color: #777777; margin: 2px; align: left; font: 14px Helvetica, sans-serif;"><i>${req.body.initiativesState.message ? `Описание инициативы: ${req.body.initiativesState.message}` : ''}</i></p>
              
                </div>
            `
            }
            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    res.json({
                        status: "error",
                    })
                    console.log("Error " + err)
                }
                else {
                    res.json({
                        status: "success",
                    })
                    console.log("Email sent successfully");
                }
            })
        }
    })

