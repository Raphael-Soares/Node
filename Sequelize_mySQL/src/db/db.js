const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistema", "root", "gamemode", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
