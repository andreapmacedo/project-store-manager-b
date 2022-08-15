const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const productService = require('../../../services/productsService');
const productController = require('../../../controllers/productsController');

describe('product controller - get all', () => { 
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const request = {};
      const response = {};
      
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      
      const resultExecute = []
      Sinon.stub(productService, 'getAll').resolves(resultExecute);
      await productController.getAll(request, response);
      expect(response.status.calledOnceWith(200)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
      // console.log(response.json.args);
    });
    it('retorna array vazio', async function () {
      const request = {};
      const response = {};
      
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      
      const resultExecute = []
      Sinon.stub(productService, 'getAll').resolves(resultExecute);
      await productController.getAll(request, response);
      expect(response.json.calledOnceWith([])).to.be.equal(true);  
    })
  });
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const request = {};
      const response = {};
      
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      
      const resultExecute = []
      Sinon.stub(productService, 'getAll').resolves(resultExecute);
      await productController.create(request, response);
      expect(response.status.calledOnceWith(200)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
      // console.log(response.json.args);
    });
  });
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const request = {};
      const response = {};
      
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      
      const resultExecute = []
      Sinon.stub(productService, 'getAll').resolves(resultExecute);
      await productController.update(request, response);
      expect(response.status.calledOnceWith(200)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
      // console.log(response.json.args);
    });
  });
  describe('sucesso', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const request = {};
      const response = {};
      
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      
      const resultExecute = []
      Sinon.stub(productService, 'getAll').resolves(resultExecute);
      await productController.exclude(request, response);
      expect(response.status.calledOnceWith(200)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
      // console.log(response.json.args);
    });
  });
});
