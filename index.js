const express = require('express');
const server = express();
const fs = require('fs');
const port = 8080;
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

//Controllers
const createProduct = (req, res) => {
    const product = req.body;
    console.log(product);
    products.push(product);
    res.json(product);
}
const getAllProducts = (req, res, next) => {
    res.json(products);
}
const getProduct = (req, res) => {
    const prodId = +req.params.id;
    const product = products.find(p => p.id === prodId);
    res.json(product);
}

const replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id });
    res.status(201).json();
}

const updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(201).json();
}
const deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]; //For sending the product deleted as response to show on the client side about the deleted product
    products.splice(productIndex, 1);
    res.status(200).json(product);
}
server.use(express.json());

server
    .get('/products', getAllProducts)
    .get('/products/:id', getProduct)
    .post('/products', createProduct)
    .put("/products/:id", replaceProduct)
    .patch("/products/:id", updateProduct)
    .delete("/products/:id", deleteProduct);


server.listen(port, () => {
    console.log(`Listening to port ${port}`);
}) 