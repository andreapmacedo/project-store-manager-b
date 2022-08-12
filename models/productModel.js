const connection = require('./connection');

const getAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM products');
  return rows;
};

module.exports = { getAll };