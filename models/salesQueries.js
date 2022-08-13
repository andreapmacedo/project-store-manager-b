function getAll() {
  return [
    'SELECT id as saleId, date, product_id as productId, quantity',
    'FROM StoreManager.sales',
    'JOIN StoreManager.sales_products ON id = sale_id',
  ].join(' ');
}

function getById() {
  return [
    'SELECT date, product_id as productId, quantity',
    'FROM StoreManager.sales',
    'JOIN StoreManager.sales_products ON id = sale_id',
    'WHERE id = ?',
  ].join(' ');
}

module.exports = { getAll, getById };