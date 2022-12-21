const express = require("express");
const {randomUUID} = require("crypto");
const app = express();
const port = 5000;
app.use(express.json());

const products = [
    {
        id: "2408f658-650f-4fc8-bc19-66ae6daf8cd1",
        name: "pen",
        price: "19,99",
    },
    {
        id: "6c437ac6-fbdc-4aff-9a2f-82c97726eb0f",
        name: "book",
        price: "29,99",
    },
];

app.post("/products", (req, res) => {
    const {name, price} = req.body;

    const product = {id: randomUUID(), name, price};
    products.push(product);

    return res.json(products);
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.put("/products/:name", (req, res) => {
    const productIndex = products.findIndex((product) => product.name === req.params.name);
    products[productIndex] = {
        ...products[productIndex],
        name: req.body.name,
        price: req.body.price,
    };

    res.json(products);
});

app.get("/products/:name/", (req, res) => {
    res.json(products.filter((product) => (product.name === req.body.name ? product.name : null)));
});

app.delete("/products/:name", (req, res) => {
    const productIndex = products.findIndex((product) => product.name === req.params.name);

    products.splice(productIndex, 1);

    res.json(products);
});

app.listen(port, () => console.log("Ouvindo a porta 5000"));
