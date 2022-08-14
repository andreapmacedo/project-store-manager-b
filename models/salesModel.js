const connection = require('./connection');
const salesQueries = require('./salesQueries');

async function getAll() {
  const [sales] = await connection.execute(salesQueries.getAll());
  return sales;
}

async function getById(id) {
  const [sale] = await connection.execute(salesQueries.getById(), [id]);
  return sale;
  // return { data: sale, code: 200 };
}

async function getByIdObjReturn(id) {
  const sale = await connection.execute(salesQueries.getById(), [id]);
  // return sale;
  return { data: sale, code: 200 };
}

// const createSale = async () => {
//   const [sale] = await connection.query(salesQueries.createSale());
//   return { id: sale.insertId };
// };
async function createSale() {
      const [sale] = await connection.query(salesQueries.createSale());
  return sale.insertId;
}

async function createSaleProduct(saleId, productId, quantity) {
  await connection.execute(salesQueries.createSaleProduct(), [saleId, productId, quantity]);
  return true;
}
// async function createSaleProduct(id, { productId, quantity }) {
//   await connection.query(salesQueries.createSaleProduct(), [id, productId, quantity]);
//   return [];
// }

async function exclude(id) {
  await connection.execute(salesQueries.excludeSaleProduct(), [id]);
  await connection.execute(salesQueries.excludeSale(), [id]);
  return id;
}

// async function update(saleId, productId, quantity) {
//   await connection.execute(salesQueries.update(), [saleId, productId, quantity]);
//   return true;
// }

async function update(saleId, productId, quantity) {
  await connection.execute(
    'UPDATE StoreManager.sales_products SET quantity = ? WHERE product_id = ? AND sale_id = ?',
    [quantity, productId, saleId],
  );
  return true;
}

module.exports = {
  getAll,
  getById,
  getByIdObjReturn,
  createSale,
  createSaleProduct,
  exclude,
  update,
};