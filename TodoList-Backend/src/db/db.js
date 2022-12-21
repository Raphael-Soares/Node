const Sequelize = require("sequelize");
const sequelize = new Sequelize("todolist", "root", "gamemode", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
