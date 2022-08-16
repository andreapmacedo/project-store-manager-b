const salesModel = require('../models/salesModel');
const { exists } = require('../routes/validations/validation');
const validation = require('../routes/validations/validation');

const getAll = async () => salesModel.getAll();

// const getAll = async () => {
//   return salesModel.getAll();
// };

const getById = async (id) => {
  const sale = await salesModel.getById(id);

  if (!sale.length) {
    return { code: 404, message: 'Sale not found' };
  }

  return { code: 200, data: sale };
};

const create = async (sales) => {
  const invalidSale = validation.validateSale(sales);
  if (invalidSale) return invalidSale;

  const invalidaProduct = await validation.validateProducts3(sales);
  if (!invalidaProduct) return { error: { message: 'Product not found' }, code: 404 };

  const saleId = await salesModel.createSale();
  await Promise.all(sales.map((sale) =>
  salesModel.createSaleProduct(saleId, sale.productId, sale.quantity)));

  return { data: { id: saleId, itemsSold: sales }, code: 201 };
}; 

async function exclude(id) {
  const product = await salesModel.getById(id);
  
  if (exists(product)) return { error: { message: 'Sale not found' }, code: 404 };
  
  const saleDelete = await salesModel.exclude(id);
  return { data: saleDelete, code: 204 };
}

async function update({ id }, sales) {
  const invalidSale = validation.validateSale(sales);
  if (invalidSale) return invalidSale;

  const invalidaProduct = await validation.validateProducts3(sales);
  if (!invalidaProduct) return { error: { message: 'Product not found' }, code: 404 };

  const saleById = await salesModel.getById(id);
  if (!saleById.length) {
    return { error: { message: 'Sale not found' }, code: 404 };
  }

  await Promise.all(sales.map((sale) =>
    salesModel.update(id, sale.productId, sale.quantity)));
  return { data: { saleId: id, itemsUpdated: sales }, code: 200 };
}

module.exports = { getAll, getById, create, exclude, update };
