const productModel = require('../../models/productsModel');

function exists(value) {
  return (!value.length);
}

function validateSale(sales) {
  if (sales.find((sale) => sale.productId === undefined)) {
    return { error: { message: '"productId" is required' }, code: 400 };
  }
  if (sales.find((sale) => sale.quantity === undefined)) {
    return { error: { message: '"quantity" is required' }, code: 400 };
  }
  if (sales.find((sale) => sale.quantity < 1)) {
  return { error: { message: '"quantity" must be greater than or equal to 1' }, code: 422 };
  }
}

async function validateProducts3(sales) {
  let response = true;
  const productValidation = await productModel.getAll();
  sales.forEach((element) => {  
    const product = productValidation.some(({ id }) => Number(id) === Number(element.productId));
    if (!product) {
      response = false;
      // return { error: { message: 'Product not found' }, code: 404 };
    }
  });
  return response;
}

module.exports = {
  exists,
  validateSale,
  validateProducts3,
};