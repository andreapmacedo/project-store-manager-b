const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const saleModel = require('../../../models/salesModel');

describe('get all', () => { 
  describe('sucesso', () => {
    before(() => {
      const resultExecute = []
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      // Sinon.stub(connection, 'execute').resolves([]);
    });
    after(() => { 
      connection.execute.restore();
    })
    it('retorna array', async function () {
      const result = await saleModel.getAll();
      expect(result).to.be.an('array');
      // funciona mas não indicado
      // expect(result).to.be.an('array').to.be.not.empty;
    });
    it('retorna array vazio', async function () {
      const result = await saleModel.getAll();
      expect(result).to.be.empty;
    })
  });

});



describe('GET ALL', () => { 
  describe('Caso OK', () => {

  });

});
describe('GET ALL', () => { 
  describe('Caso OK', () => {

  });

});
describe('GET ALL', () => { 
  describe('Caso OK', () => {

  });

});