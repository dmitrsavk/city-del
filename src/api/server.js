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

const getMailOptions = (data) => {
    let subject;
    let html;

    if (data.type == 'public') {
        subject = 'Сотрудничество по бизнесу';
        html = getHTMLForPublic(data);
    } else {
        subject = 'Заявка на доставку';
        html = getHTMLForPrivate(data);
    }

    mailOptions = {
        from: 'support@citydeliver.ru',
        to: 'dmitrsavk@citydeliver.ru',
        subject: subject,
        text: '',
        html: html
    };

    return mailOptions;
}

const getHTMLForPrivate = (data) => {
    let addresses = '';

    data.addresses.forEach((address, index) => {
        addresses += `
            <b>Адрес №${index + 1}:</b><br/>
            <b>Адрес: </b>${address.address}<br/>
            <b>Телефон: </b>${address.phone}<br/>
            <b>Дата: </b>${address.date}<br/>
            <b>Примечание: </b>${address.note}<br/><br/>
        `;
    });

    return `
        <b>Номер заказа: </b>${data.orderNumber}<br/><br/>
        ${addresses}
        <b>Дополнительная информация:</b><br />
                email: ${data.email}<br/>
                Описание: ${data.information}<br/>
    `;
}

const getHTMLForPublic = (data) => {
    return `
        <b>Сотрудничество по бизнесу</b><br/>
        <b>Email: </b></br>${data.email}<br/>
        <b>Информация: </b>${data.information}<br/>
    `;
}

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

    let mailOptions = getMailOptions(req.body);

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
