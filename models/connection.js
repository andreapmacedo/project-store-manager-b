const mysql = require('mysql2/promise');

require('dotenv').config(); // carrega as variáveis de ambiente

const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
  } = process.env;

// Usando o pool de conexões para evitar sobrecarga de conexões 
const connection = mysql.createPool({
  host: MYSQL_HOST || 'localhost',
  port: MYSQL_PORT || 3306, // Na porta, podemos utilizar tanto string quanto número
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
  database: MYSQL_DATABASE || 'processos',
  // multipleStatements: true, // permite que sejam executados múltiplos comandos SQL
});

// const connection = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   port: 3306,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
// });

module.exports = connection;