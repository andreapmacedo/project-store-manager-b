const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * from StoreManager.products');
  return products;
};

async function getById(id) {
  const [product] = await connection.execute('SELECT * from StoreManager.products WHERE id = ?',
  [id]);

  return product;
}

module.exports = { getAll, getById };