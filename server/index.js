const config = require('./config');
const express = require('express');
const serverless = require('serverless-http')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const { videoToken } = require('./tokens');

// This could/should be split into development and production builds

const app = express();
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(pino);

const sendTokenResponse = (token, res) => {
    res.set('Content-Type', 'application/json');
    res.send(
        JSON.stringify({
            token: token.toJwt()
        })
    );
};

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

router.get('/video/token', (req, res) => {
    const identity = req.query.identity;
    const room = req.query.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);

});
router.post('/video/token', (req, res) => {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);

module.exports.handler = serverless(app)
