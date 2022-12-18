const path = require("path");

// Basename: apenas o nome do arquivo atual

console.log(path.basename(__filename));

// Dirname: o nome do diretório atual

console.log(path.dirname(__dirname));

// Exetenção do arquivo

console.log(path.extname(__filename));

// Criar objeto path

console.log(path.parse(__filename));

// Juntar caminhos de arquivos

console.log(path.join(__dirname, "test", "test.html"));
