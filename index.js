const express = require('express');
const server = express();

//Another built-in middlware
//third party middlewares

const morgan = require('morgan');

// server.use(morgan('dev'));
// server.use(morgan('default'));
server.use(morgan('tiny'));

//Logger middleware
// server.get('/', (req, res, next) => {
//     console.log(`request url : ${req.url},\nRequest Hostname : ${req.hostname},\nRequest IP : ${req.ip},\nDate : ${new Date()},\nRequest.method : ${req.method},\nOther details : ${req.get('User-Agent')}`);
//     res.send('Hello');
//     next();
// })

server.listen(8080, () => {
    console.log(`Listening to port 8080`);
})