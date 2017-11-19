const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const PORT = 3001;

const router = express.Router();
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://citydeliver.ru');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const sendMail = (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 587,
        secure: false,
        auth: {
            user: 'support@citydeliver.ru',
            pass: 'citydeliver18137citydeliver'
        }
    });

    let mailOptions = {
        from: 'support@citydeliver.ru',
        to: 'support@citydeliver.ru',
        subject: 'Заявка',
        text: '',
        html: `
            <b>Номер заказа:</b> ${req.body.orderNumber}<br/>
            <b>Откуда:</b><br />
                Адрес: ${req.body.from.address}<br />
                Телефон: ${req.body.from.phone}<br />
                Дата: ${req.body.from.date}<br /><br />
            <b>Куда:</b><br />
                Адрес: ${req.body.to.address}<br />
                Телефон: ${req.body.to.phone}<br />
                Дата: ${req.body.to.date}<br /><br />
            Дополнительная информация:<br />
                email: ${req.body.email}<br/>
                Описание: ${req.body.info}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    res.send(req.body);
}

app.post('/', sendMail);


app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
