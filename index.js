const express = require('express');
const server = express();

//Another built-in middlware 
//express.static() - serves static assests such as HTML files, images and so on. 
server.use(express.static('public'));

server.get('/', (req, res, next) => {
    res.send('<h1>Hello</h1>')
});
server.listen(8080);