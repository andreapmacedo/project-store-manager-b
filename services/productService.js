const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

// const getAll = async () => {
//   return productModel.getAll();
// };

const getById = async (id) => {
  const product = await productModel.getById(id);

  // if (!product) {
    if (!product.length) {
    return { code: 404, message: 'Product not found' };
  }

  return { code: 200, data: product[0] };
};
// const getById = async (id) => {
//   const product = await productModel.getById(id);

//   if (!product.length) {
//     return { code: 404, message: 'Product not found' };
//   }

//   return { code: 200, data: product[0] };
// };

module.exports = { getAll, getById };
