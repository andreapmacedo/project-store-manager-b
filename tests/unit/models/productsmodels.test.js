const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const productsModel = require('../../../models/productsModel');

describe('products model get all', () => { 
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
      const result = await productsModel.getAll();
      expect(result).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      const resultExecute = []
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await productsModel.getAll();
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
      const result = await productsModel.getAll();
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
      const [result] = await productsModel.getAll();
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
      const [result] = await productsModel.getAll();
      expect(result).to.all.keys('saleId', 'date');
    })
    // it('retorna array', async function () {
    //   const result = await productsModel.getAll();
    //   expect(result).to.be.an('array');
    //   // funciona mas não indicado
    //   // expect(result).to.be.an('array').to.be.not.empty;
    // });
    // it('retorna array vazio', async function () {
    //   const result = await productsModel.getAll();
    //   expect(result).to.be.empty;
    // })
    // it('retorna array cheio', async function () {
    //   const result = await productsModel.getAll();
    //   expect(result).to.be.not.empty;
    // })
  });

});


describe('Testa o a camada model para products', () => { 
  describe('Testa a função retorna um item de acordo com o id', () => {
    afterEach(() => {
      Sinon.restore();
    });
    // AAA - arrange, act, assert
    it('Testa se retorna os itens corretamente ', async function () {
      const resultExecute = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" },
      ];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      
      const result = await productsModel.getById();
      // expect(result).to.be.not.empty;
      expect(result).to.be.a("array");
      expect(result[0]).to.have.all.keys("id", "name");
      expect(result[0].id).to.be.eq(1);
      expect(result[0].name).to.be.eq("Martelo de Thor");
      expect(result[3]).to.be.eq(undefined);
      
    });
    it('Testa se um produto é adicionado corretamente ao banco de dados', async function () {
      const resultExecute = [
        { insertId: 4 }
      ];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      
      const result = await productsModel.create();
      expect(result).to.be.a("object");
      expect(result).to.have.all.keys("id", "name");
      expect(result.id).to.be.eq(4);
      expect(result.name).to.be.eq("Capa de Invisibildade");
    });
    it('Testa se um produto é atualizado corretamente ao banco de dados', async function () {
      const resultExecute = {
        id: 4,
        name: "Capa de Invisibildade",
      }
      Sinon.stub(connection, 'execute').resolves(resultExecute);
      
      const result = await productsModel.update();
      expect(result).to.be.a("object");
      expect(result).to.have.all.keys("id", "name");
      expect(result.id).to.be.eq(4);
      expect(result.name).to.be.eq("Capa de Invisibildade");
    });
    it('Testa se um produto é excluido do banco de dados', async function () {
      Sinon.stub(connection, 'execute').resolves();      
      const result = await productsModel.exclude();
      expect(result).to.be.eq(2);
    });
  });

    describe('Testa a função retorna um item de acordo com o id', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testa se retorna os itens corretamente ', async function () {
      const resultExecute = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" },
      ];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      
      const result = await productsModel.create();
      expect(result).to.be.not.empty;
      expect(result).to.be.eq(undefined);
      
    });
  });
    describe('Testa a função retorna um item de acordo com o id', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testa se retorna os itens corretamente ', async function () {
      const resultExecute = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" },
      ];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      
      const result = await productsModel.update();
      expect(result).to.be.not.empty;
      expect(result).to.be.eq(undefined);
      
    });
  });
    describe('Testa a função retorna um item de acordo com o id', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testa se retorna os itens corretamente ', async function () {
      const resultExecute = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" },
      ];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      
      const result = await productsModel.exclude();
      expect(result).to.be.not.empty;
      expect(result).to.be.eq(undefined);
      
    });
  });

});