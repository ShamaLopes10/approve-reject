const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  username: 'your_username',  // Replace with your DB username
  password: 'your_password',  // Replace with your DB password
  database: 'university_db',  // Replace with your DB name
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;

