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
    // it('retorna array não esteja vazio', async function () {
    //  const resultExecute = [
    //     {
    //       "saleId": 1,
    //       "date": "2021-09-09T04:54:54.000Z",
    //     },
    //     {
    //       "saleId": 1,
    //       "date": "2021-09-09T04:54:29.000Z",
    //     }
    //   ]
    //   Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
    //   const result = await saleService.getAll();
    //   expect(result).to.be.not.empty;
    // })
    // it('retorna array que contenha objetos', async function () {
    //  const resultExecute = [
    //     {
    //       "saleId": 1,
    //       "date": "2021-09-09T04:54:54.000Z",
    //     },
    //     {
    //       "saleId": 1,
    //       "date": "2021-09-09T04:54:29.000Z",
    //     }
    //   ]
    //   Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
    //   const result = await saleService.getAll();
    //   expect(result).to.be.an('object');
    // })
    // it('retorna array que contenha objetos com chaves saleId e date', async function () {
    //  const resultExecute = [
    //     {
    //       "saleId": 1,
    //       "date": "2021-09-09T04:54:54.000Z",
    //     },
    //     {
    //       "saleId": 1,
    //       "date": "2021-09-09T04:54:29.000Z",
    //     }
    //   ]
    //   Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
    //   const result = await saleService.getAll();
    //   expect(result).to.all.keys('saleId', 'date');
    // })
  });
});
