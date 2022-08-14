const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  const data = await salesService.getAll();
  res.status(200).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { data, code, message } = await salesService.getById(id);
  
  if (!data) {
    return res.status(code).json({ message });
  }

  return res.status(code).json(data);
};

async function create(req, res) {
  // const data = await salesService.create(
  //   req.body,
    // [
    //   {
    //     productId: 1,
    //     quantity: 1,
    //   },
    //   {
    //     productId: 2,
    //     quantity: 5,
    //   },
    // ],
  // );
  const { data, error, code } = await salesService.create(req.body);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

async function exclude(req, res) {
  const { data, error, code } = await salesService.exclude(req.params.id);
  if (error) return res.status(code).json(error);
  return res.status(code).json(data);
}

module.exports = { getAll, getById, create, exclude };
