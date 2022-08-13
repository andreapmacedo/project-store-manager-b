const connection = require('./connection');
const salesQueries = require('./salesQueries');

async function getAll() {
  const [sales] = await connection.execute(salesQueries.getAll());
  return sales;
}

async function getById(id) {
  const [sale] = await connection.execute(salesQueries.getById(), [id]);
  return sale;
}

module.exports = { getAll, getById };