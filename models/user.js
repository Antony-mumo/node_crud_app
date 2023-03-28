const Sequelize = require("sequelize");
const db = require("../utils/database");

const user = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;
