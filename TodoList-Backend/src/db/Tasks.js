const Sequelize = require("sequelize");
const database = require("./db");

const Tasks = database.define("Tasks", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
});

module.exports = Tasks;
