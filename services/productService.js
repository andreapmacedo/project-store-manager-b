const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

// const getAll = async () => {
//   return productModel.getAll();
// };

const getById = async (id) => {
  const product = await productModel.getById(id);

  if (!product.length) {
    return { code: 404, message: 'Product not found' };
  }

  return { code: 200, data: product[0] };
};

async function create({ name }) {
  if (!name) return { error: { message: '"name" is required' }, code: 400 };
  if (name.length < 5) {
    return {
      error: { message: '"name" length must be at least 5 characters long' },
      code: 422,
    };
  }
  const product = await productModel.create({ name });
  return { data: product, code: 201 };
}

module.exports = { getAll, getById, create };
