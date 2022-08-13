const salesModel = require('../models/salesModel');

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

module.exports = { getAll, getById };
