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

async function update(saleId, productId, quantity) {
  await connection.execute(salesQueries.update(), [quantity, productId, saleId]);
  return true;
}

module.exports = { getAll, getById, update };