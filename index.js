const express = require('express');
const server = express();

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

//Middlewares

//Logger-middleware
server.use((req, res, next) => {
    console.log(req.url, req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next();
})

////////////////////////////
//API / Endpoint - Route
server.get('/', (req, res) => {
    res.json({ type: 'GET' });
})
server.post('/', (req, res) => {
    res.json({ type: 'POST' });
})
server.put('/', (req, res) => {
    res.json({ type: 'PUT' });
})
server.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
})
server.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
})
////////////////////////////
server.get("/demo", (req, res) => {
    // res.send('<h1>Hello</h1>');

    // path must be absolute or specify root to res.sendFile
    // res.sendFile('E:\\Documents\\Campusing bootcamp\\NodeJS_coderDost\\index.html');

    // res.json(data);

    // res.sendStatus(404);

    // res.status(201).send('<h1>Hello</h1>');
})

server.listen(8080, () => {
    console.log(`Listening to port 8080`);
})