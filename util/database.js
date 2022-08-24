const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root' , '043431', {
   dialect: 'mysql', 
   host: 'localhost'
});

module.exports = sequelize;