const express = require('express');
require('dotenv').config();
// const rescue = require('./rescue');
const productController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();

// const routes = require('./routes');
// app.use('/products', routes);

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
app.post('/products', productController.create);
app.put('/products/:id', productController.update);
app.delete('/products/:id', productController.exclude);

app.get('/sales', salesController.getAll);
app.get('/sales/:id', salesController.getById);
app.post('/sales', salesController.create);
app.put('/sales/:id', salesController.update);
app.delete('/sales/:id', salesController.exclude);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

module.exports = app;