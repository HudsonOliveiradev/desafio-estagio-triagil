const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
dialect: 'sqlite',
storage: 'timedb.sqlite',
logging: false,
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.times = require('./timeModel.js')(sequelize, Sequelize);

module.exports = db;