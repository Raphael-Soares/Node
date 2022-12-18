const fs = require("fs");
const path = require("path");

// Criar uma pasta

fs.mkdir(path.join(__dirname, "./test"), (error) => {
    error ? console.log(error) : console.log("Pasta criada com sucesso");
});

// Criar um arquivo

fs.writeFile(path.join(__dirname, "./test", "test.html"), "Hello node", (error) => {
    error ? console.log(error) : console.log("Arquivo criada com sucesso");
});

// Adicionar a um arquivo

fs.appendFile(path.join(__dirname, "./test", "test.html"), ", This is a nodeJS app", (error) => {
    error ? console.log(error) : console.log("Arquivo editado com sucesso");
});

// Ler Arquivo
fs.readFile(path.join(__dirname, "./test", "test.html"), "utf8", (error, data) => {
    error ? console.log(error) : console.log(data);
});
