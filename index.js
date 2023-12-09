const express = require('express');
const server = express();

//Middlewares
////////////////////////////

// inbulit middleware - express.json(), express.static(), express.urlencoded()

server.use(express.json()); //Previously with node known as bodyParser

////////////////////////////
//Middleware - authentication
const auth = (req, res, next) => {
    console.log(`Request body => ${req.body}`);
    if (req.body.password === "123") {
        next();
    }
    else {
        res.sendStatus(401);
    }
}
////////////////////////////
//API / Endpoint - Route
server.get('/', auth, (req, res) => {
    res.json({ type: 'GET' });
})
server.post('/', auth, (req, res) => {
    res.json({ type: 'POST' });
})
server.put('/', auth, (req, res) => {
    res.json({ type: 'PUT' });
})
server.patch('/', auth, (req, res) => {
    res.json({ type: 'PATCH' });
})
server.delete('/', auth, (req, res) => {
    res.json({ type: 'DELETE' });
})


server.listen(8080, () => {
    console.log(`Listening to port 8080`);
})