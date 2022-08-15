const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const saleModel = require('../../../models/salesModel');
const saleService = require('../../../services/salesService');

describe('sales services getAll and getById', () => {
  
  describe('testa o getAll', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
      const result = await saleService.getAll();
      expect(result).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      const resultExecute = []
      Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
      const result = await saleService.getAll();
      expect(result).to.be.empty;
    })
  });

  describe('SALES SERVICE testa getById', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    it('quando não existe um produto com o ID informado', async () => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleService.getById(999);
      expect(result).to.equal(null);
    });

    it('quando existe um produto com o ID informado', async () => {
      const resultExecute = [
        {
          "date": "2022-08-12T19:14:18.000Z",
          "productId": 3,
          "quantity": 15
        }
      ]

      sinon.stub(SalesModel, 'getById').resolves(resultExecute);
      const result = await saleService.getById(1);
      expect(result).not.to.be.empty;
      expect(result).to.equal(resultExecute);
    })
  });
  describe('SALES SERVICE testa Create', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    it('quando não existe um produto com o ID informado', async () => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleService.create({});
      expect(result).to.equal(null);
    });
  });
  describe('SALES SERVICE testa Create', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    it('quando não existe um produto com o ID informado', async () => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleService.exclude(999);
      expect(result).to.equal(null);
    });
  });
  describe('SALES SERVICE testa Create', () => {
    afterEach(() => { 
      Sinon.restore();
    })
    it('quando não existe um produto com o ID informado', async () => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleService.update({ id: 999 }, []);
      expect(result).to.equal(null);
    });
  });
});

