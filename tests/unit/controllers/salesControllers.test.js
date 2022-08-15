const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const saleService = require('../../../services/salesService');
const saleController = require('../../../controllers/salesController');

describe('sales controller - get all', () => { 
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
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);
      await saleController.getAll(request, response);
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
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);
      await saleController.getAll(request, response);
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
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);
      await saleController.create(request, response);
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
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);
      
      await saleController.exclude(request, response);

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
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);

      await saleController.update(request, response);

      expect(response.status.calledOnceWith(200)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
      // console.log(response.json.args);
    });
  });
});
