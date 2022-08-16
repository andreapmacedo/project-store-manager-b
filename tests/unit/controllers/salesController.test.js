const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const saleController = require('../../../controllers/salesController');
const saleService = require('../../../services/salesService');


describe('sale controller - getAll', () => {
  
  describe('return code and data', () => { 
    const request = {};
    const response = {};

    const result = [
      {
        saleId: 1,
        date: "2022-08-12T19:14:18.000Z",
        productId: 1,
        quantity: 5
      }
    ]
    
    before(async () => {
      // request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "getAll").resolves(result);
    });

    after(async () => {
      sinon.restore();
    });

    it('return code and data', async function () {
      
      await saleController.getAll(request, response);
      expect(response.json.calledWith(result.data)).to.be.equal(true);
      expect(response.status.calledWith(200)).to.be.equal(true);
      // expect(response.status.calledOnceWith(200)).to.be.equal(true);
      // expect(response.status.calledOnce).to.be.true;
    });
  });

  describe("sale controller - getById", () => {
    const result = {
      data: [
        {
        saleId: 1,
        date: "2022-08-12T19:14:18.000Z",
        productId: 1,
        quantity: 5
        },
      ],
      code: 200,
    };

    const response = {};
    const request = {};

    before(() => {
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "getById").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      await saleController.getById(request, response);
      expect(response.json.calledWith(result.data)).to.be.equal(true);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
  
  describe("sale controller - create", () => {
    const response = {};
    const request = {};
    
    const result = {
      data: {
        id: 5,
        itemsSold: [
          { productId: 3, quantity: 2 },
        ],
      },
      code: 201,
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "create").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      await saleController.create(request, response);
      expect(response.json.calledWith(result.data)).to.be.equal(true);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  });

  describe('sale controller - create - failure', () => {
    const result = {
      error: { message: '"productId" is required' },
      code: 400,
    };

    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "create").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      await saleController.create(request, response);
      expect(response.json.calledWith(result.error)).to.be.equal(true);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });  

    describe('sale controller - update - success', () => {
    const result = {
      data: {
        id: 5,
        itemsUpdated: [
          { productId: 3, quantity: 20 },
        ],
      },
      code: 200,
    };

    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "update").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      await saleController.update(request, response);
      expect(response.json.calledWith(result.data)).to.be.equal(true);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

    describe('sale controller - update - failure', () => {
    const response = {};
    const request = {};
    
    const result = {
      error: { message: '"productId" is required' },
      code: 400,
    };


    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "update").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      await saleController.update(request, response);
      expect(response.json.calledWith(result.error)).to.be.equal(true);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });

  describe('sale controller - exclude - success', () => {
    const response = {};
    const request = {};
    
    const result = {
      data: { message: 'Product id 3 was deleted' },
      code: 204,
    };

    before(() => {
      request.params = { id: 3}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "exclude").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      await saleController.exclude(request, response);
      expect(response.json.calledWith(result.data)).to.be.equal(true);
      expect(response.status.calledWith(204)).to.be.equal(true);
    });
  });

  describe('sale controller - exclude - failure', () => {
    const response = {};
    const request = {};
    
    const result = {
      error: { message: 'Sale not found' },
      code: 404,
    };

    before(() => {
      request.params = { id: 3}
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(saleService, "exclude").resolves(result);
    });

    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      await saleController.exclude(request, response);
      expect(response.json.calledWith(result.error)).to.be.equal(true);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });
  });


});

// describe('sales controller - get all', () => { 
//   describe('sucesso', () => {
//     afterEach(() => { 
//       sinon.restore();
//     })
//     it('retorna array', async function () {
//       const request = {};
//       const response = {};
      
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
      
//       const resultExecute = []
//       sinon.stub(saleService, 'getAll').resolves(resultExecute);
//       await saleController.getAll(request, response);
//       expect(response.status.calledOnceWith(200)).to.be.equal(true);
//       expect(response.status.calledOnce).to.be.true;
//     });
//     it('retorna array vazio', async function () {
//       const request = {};
//       const response = {};
      
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
      
//       const resultExecute = []
//       sinon.stub(saleService, 'getAll').resolves(resultExecute);
//       await saleController.getAll(request, response);
//       expect(response.json.calledOnceWith([])).to.be.equal(true);  
//     })
//   });
//   describe('sucesso', () => {
//     afterEach(() => { 
//       sinon.restore();
//     })
//     it('retorna array', async function () {
//       const request = {};
//       const response = {};
      
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
      
//       const resultExecute = []
//       sinon.stub(saleService, 'getAll').resolves(resultExecute);
//       await saleController.create(request, response);
//       expect(response.status.calledOnceWith(200)).to.be.equal(true);
//       expect(response.status.calledOnce).to.be.true;
//     });
//   });
//   describe('sucesso', () => {
//     afterEach(() => { 
//       sinon.restore();
//     })
//     it('retorna array', async function () {
//       const request = {};
//       const response = {};
      
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
      
//       const resultExecute = []
//       sinon.stub(saleService, 'getAll').resolves(resultExecute);
      
//       await saleController.exclude(request, response);

//       expect(response.status.calledOnceWith(200)).to.be.equal(true);
//       expect(response.status.calledOnce).to.be.true;
//     });
//   });
//   describe('sucesso', () => {
//     afterEach(() => { 
//       sinon.restore();
//     })
//     it('retorna array', async function () {
//       const request = {};
//       const response = {};
      
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
      
//       const resultExecute = []
//       sinon.stub(saleService, 'getAll').resolves(resultExecute);

//       await saleController.update(request, response);

//       expect(response.status.calledOnceWith(200)).to.be.equal(true);
//       expect(response.status.calledOnce).to.be.true;
//     });
//   });
// });


// describe('sale controller - getAll', () => { 
//   describe('Testa a consulta todas as vendas no DB', () => { 
  
//   });
// });

// describe('sale controller - getById', () => { 
//   describe('Testa a consulta de uma venda por ID no DB', () => { 
  
//   });
// });

// describe('sale controller - create', () => { 
//   describe('Testa a adição de uma venda no DB', () => { 
  
//   });
// });

// describe('sale controller - exclude', () => { 
//   describe('Testa a exclusão de uma venda no DB', () => { 
  
//   });
// });

// describe('sale controller - update', () => { 
//   describe('Testa a atualização de uma venda por ID', () => { 
  
//   });
// });