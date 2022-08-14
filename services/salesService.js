const salesModel = require('../models/salesModel');
const { exists } = require('./validations/validation');
const validation = require('./validations/validation');

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

  const invalidProduct = await validation.validateProducts(sales);
  if (invalidProduct) return invalidProduct;

  const saleId = await salesModel.createSale();
  await Promise.all(sales.map((sale) =>
  salesModel.createSaleProduct(saleId, sale.productId, sale.quantity)));
  // const { saleId } = await salesModel.createSale();
  // Promise.all(
    // sales.map(async (itemSold) => {
    //   await salesModel.createSaleProduct(saleId, itemSold);
    // }),
  // );
  // return { id, sales };
  return { data: { id: saleId, itemsSold: sales }, code: 201 };
}; 

async function exclude(id) {
  const product = await salesModel.getById(id);
  
  if (exists(product)) return { error: { message: 'Sale not found' }, code: 404 };
  
  const saleDelete = await salesModel.exclude(id);
  return { data: saleDelete, code: 204 };
}

module.exports = { getAll, getById, create, exclude };
