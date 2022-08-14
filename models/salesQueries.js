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

function createSale() {
  return 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  // return 'INSERT INTO StoreManager.sales VALUES ()';
}

function createSaleProduct() {
  return 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
}

function update() {
  return 'UPDATE StoreManager.sales_products SET quantity = ? WHERE product_id = ? AND sale_id = ?';
}

function excludeSaleProduct() {
  return 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
}

function excludeSale() {
  return 'DELETE FROM StoreManager.sales WHERE id = ?';
}

module.exports = {
  getAll,
  getById,
  update,
  createSale,
  createSaleProduct,
  excludeSaleProduct,
  excludeSale,
};