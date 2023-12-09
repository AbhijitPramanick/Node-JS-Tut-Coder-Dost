const http = require('http');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const index = fs.readFileSync('index.html', 'utf-8');
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/product')) {
        res.setHeader('Content-Type', 'text/html');
        const products = data.products;
        const id = req.url.split('/')[2];
        const product = products.find(p => p.id === +id);
        console.log(product)
        const modifiedIndex = index
            .replace('**title**', product.title)
            .replace('**url**', product.thumbnail)
            .replace('**price**', product.price)
            .replace('**rating**', product.rating);
        res.end(modifiedIndex);
    }
})
server.listen(8080);