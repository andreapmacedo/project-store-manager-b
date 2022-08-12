const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

// const getAll = async () => {
//   return productModel.getAll();
// };

module.exports = { getAll };
