const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;

const router = express.Router();
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:80'];
    const origin = req.headers.origin;

    if (~allowedOrigins.indexOf(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const sendMail = (req, res) => {
    console.log(req.body);
    res.send(req.body);
}

app.post('/', sendMail);


app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
