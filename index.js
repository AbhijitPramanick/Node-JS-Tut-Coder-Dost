const express = require('express');
const server = express();
const fs = require('fs');
const port = 8080;
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

server.use(express.json());

server.get('/products', (req, res, next) => {
    res.json(products);
});

//Read GET /products/:id
server.get('/products/:id', (req, res) => {
    const prodId = +req.params.id;
    const product = products.find(p => p.id === prodId);
    res.json(product);
});

//Create POST /products
server.post('/products', (req, res) => {
    const product = req.body;
    console.log(product);
    products.push(product);
    res.json(product);
});

//Update PUT /products/:id
server.put("/products/:id", (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json();
})

//Update PATCH /products/:id    
server.patch("/products/:id", (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json();
})

// Delete DELETE /products/:id
server.delete("/products/:id", (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]; //For sending the product deleted as response to show on the client side about the deleted product
    products.splice(productIndex, 1);
    res.status(200).json(product);
})


server.listen(port, () => {
    console.log(`Listening to port ${port}`);
})