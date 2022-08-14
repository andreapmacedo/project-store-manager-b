const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const saleModel = require('../../../models/salesModel');

describe('get all', () => { 
  describe('sucesso', () => {
    // before(() => {
    //   const resultExecute = []
    //   const resultExecuteFull = [
    //  {
    //       "id": 1,
    //       "name": "Martelo de Thor",
    //     },
    //     {
    //       "id": 2,
    //       "name": "Traje de encolhimento",
    //     }
    //   ]
    //   Sinon.stub(connection, 'execute').resolves([resultExecute, resultExecuteFull]);
    //   // Sinon.stub(connection, 'query').resolves([resultExecute]);
    //   // Sinon.stub(connection, 'execute').resolves([]);
    // });
    // after(() => { 
    //   // connection.execute.restore();
    //   // remover todos os dubles
    //   Sinon.restore();
    // })
    afterEach(() => { 
      Sinon.restore();
    })
    // AAA - arrange, act, assert
    it('retorna array', async function () {
      const resultExecute = []
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleModel.getAll();
      expect(result).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      const resultExecute = []
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleModel.getAll();
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
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleModel.getAll();
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
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const [result] = await saleModel.getAll();
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
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const [result] = await saleModel.getAll();
      expect(result).to.all.keys('saleId', 'date');
    })
    // it('retorna array', async function () {
    //   const result = await saleModel.getAll();
    //   expect(result).to.be.an('array');
    //   // funciona mas não indicado
    //   // expect(result).to.be.an('array').to.be.not.empty;
    // });
    // it('retorna array vazio', async function () {
    //   const result = await saleModel.getAll();
    //   expect(result).to.be.empty;
    // })
    // it('retorna array cheio', async function () {
    //   const result = await saleModel.getAll();
    //   expect(result).to.be.not.empty;
    // })
  });

});



describe('GET ALL', () => { 
  describe('Caso OK', () => {

  });

});
