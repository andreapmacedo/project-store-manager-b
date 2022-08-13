const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { data, code, message } = await productsService.getById(id);
  
  if (!data) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

async function create(req, res) {
  const { data, code, error } = await productsService.create(req.body);
  // const { data, code, error: { message } } = await productsService.create(req.body);

  if (error) {
    return res.status(code).json(error);
  }

  // if (!data) {
  //   return res.status(code).json({ message });
  // }

  return res.status(code).json(data);
}

module.exports = { getAll, getById, create };