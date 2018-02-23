const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json({type: '*/*'}))

router(app);

const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);