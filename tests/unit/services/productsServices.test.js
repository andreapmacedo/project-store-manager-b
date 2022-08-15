const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const productModel = require('../../../models/productsModel');
const productService = require('../../../services/productsService');

describe('product services get all', () => { 
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      const resultExecute = []
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.be.empty;
    })
    it('retorna array não esteja vazio', async function () {
     const resultExecute = [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
        }
      ]
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.be.not.empty;
    })
    it('retorna array que contenha objetos', async function () {
     const resultExecute = [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
        }
      ]
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.be.an('object');
    })
    it('retorna array que contenha objetos com chaves saleId e date', async function () {
     const resultExecute = [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
        }
      ]
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.all.keys('saleId', 'date');
    })
    it('retorna array que contenha objetos com chaves saleId e date', async function () {

      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getById();
      expect(result).to.all.keys('saleId', 'date');
    })
  });
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.create({ name: 'teste' });
      expect(result).to.be.an('array');
    });
  });
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.update({ id: 1, name: 'teste' });
      expect(result).to.be.an('array');
    });
  });
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.exclude(999);
      expect(result).to.be.an('array');
    });
  });


});
