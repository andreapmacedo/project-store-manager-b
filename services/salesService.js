const salesModel = require('../models/salesModel');
const { exists } = require('./validations/validation');

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

async function exclude(id) {
  const product = await salesModel.getById(id);
  
  if (exists(product)) return { error: { message: 'Sale not found' }, code: 404 };
  
  const saleDelete = await salesModel.exclude(id);
  return { data: saleDelete, code: 204 };
}

module.exports = { getAll, getById, exclude };
