const productsModel = require('../models/productsModel');

const getAll = async () => productsModel.getAll();

// const getAll = async () => {
//   return productsModel.getAll();
// };

const getById = async (id) => {
  const product = await productsModel.getById(id);

  if (!product.length) {
    return { code: 404, message: 'Product not found' };
  }

  return { code: 200, data: product[0] };
};

async function create({ name }) {
  if (!name) return { error: { message: '"name" is required' }, code: 400 };
  if (name.length < 5) {
    return { code: 422, error: { message: '"name" length must be at least 5 characters long' } };
  }
  const product = await productsModel.create({ name });
  return { data: product, code: 201 };
}

module.exports = { getAll, getById, create };
