const http = require("http");
const port = 5050;

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<h1>HOME PAGE</h1>");
    }

    if (req.url === "/users") {
        const users = [
            {name: "Raphael", id: "12jk"},
            {name: "Soares", id: "89sa"},
        ];
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
