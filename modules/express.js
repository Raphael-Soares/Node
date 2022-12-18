const express = require("express");
const app = express();
const port = 5050;

app.get("/home", (req, res) => {
    res.contentType("text/html");
    res.status(200).send("Hello Express World");
});

app.get("/users", (req, res) => {
    const users = [
        {name: "Raphael", id: "12jk"},
        {name: "Soares", id: "89sa"},
    ];
    res.contentType("application/json");
    res.status(200).send(JSON.stringify(users));
});

app.listen(port, () => console.log("Rodando com express na porta: " + port));
