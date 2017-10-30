const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;

const router = express.Router();
const app = express();
app.use(bodyParser.json());

const sendMail = (req, res) => {
    console.log(req.body);
    res.send('lol');
}

app.post('/', sendMail);


app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});
