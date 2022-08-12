const productService = require('../services/productService');

const getAll = async (req, res) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { data, code, message } = await productService.getById(id);
  
  if (!data) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

module.exports = { getAll, getById };