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
  await connection.execute(salesQueries.update(), [saleId, productId, quantity]);
  return true;
}

async function exclude(id) {
  await connection.execute(salesQueries.excludeSalesProducts(), [id]);
  await connection.execute(salesQueries.excludeSales(), [id]);
  return id;
}

module.exports = { getAll, getById, update, exclude };