const express = require('express');
require('dotenv').config();
// const rescue = require('./rescue');
const productController = require('./controllers/productController');

const app = express();

// const routes = require('./routes');
// app.use('/products', routes);

app.use(express.json());
app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
app.post('/products', productController.create);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

module.exports = app;