const Sequelize = require("sequelize");

const database = require("./db.js");

const Produtos = database.define("Produtos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Produtos;
