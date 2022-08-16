const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const productModel = require('../../../models/productsModel');
const productService = require('../../../services/productsService');

describe('product services get all', () => { 
  // describe('sucesso', () => {
  //   afterEach(() => { 
  //     sinon.restore();
  //   })
  //   // AAA - arrange, act, assert
  //   it('retorna array', async function () {
  //     const resultExecute = []
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.getAll();
  //     expect(result).to.be.an('array');
  //   });
  //   it('retorna array vazio', async function () {
  //     const resultExecute = []
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.getAll();
  //     expect(result).to.be.empty;
  //   })
  //   it('retorna array não esteja vazio', async function () {
  //    const resultExecute = [
  //       {
  //         "saleId": 1,
  //         "date": "2021-09-09T04:54:54.000Z",
  //       },
  //       {
  //         "saleId": 1,
  //         "date": "2021-09-09T04:54:29.000Z",
  //       }
  //     ]
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.getAll();
  //     expect(result).to.be.not.empty;
  //   })
  //   it('retorna array que contenha objetos', async function () {
  //    const resultExecute = [
  //       {
  //         "saleId": 1,
  //         "date": "2021-09-09T04:54:54.000Z",
  //       },
  //       {
  //         "saleId": 1,
  //         "date": "2021-09-09T04:54:29.000Z",
  //       }
  //     ]
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.getAll();
  //     expect(result).to.be.an('object');
  //   })
  //   it('retorna array que contenha objetos com chaves saleId e date', async function () {
  //    const resultExecute = [
  //       {
  //         "saleId": 1,
  //         "date": "2021-09-09T04:54:54.000Z",
  //       },
  //       {
  //         "saleId": 1,
  //         "date": "2021-09-09T04:54:29.000Z",
  //       }
  //     ]
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.getAll();
  //     expect(result).to.all.keys('saleId', 'date');
  //   })
  //   it('retorna array que contenha objetos com chaves saleId e date', async function () {

  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.getById();
  //     expect(result).to.all.keys('saleId', 'date');
  //   })
  // });
  // describe('sucesso', () => {
  //   afterEach(() => { 
  //     sinon.restore();
  //   })
  //   // AAA - arrange, act, assert
  //   it('retorna array', async function () {
  //     const resultExecute = []
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.create({ name: 'teste' });
  //     expect(result).to.be.an('array');
  //   });
  // });
  // describe('sucesso', () => {
  //   afterEach(() => { 
  //     sinon.restore();
  //   })
  //   // AAA - arrange, act, assert
  //   it('retorna array', async function () {
  //     const resultExecute = []
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.update({ id: 1, name: 'teste' });
  //     expect(result).to.be.an('array');
  //   });
  // });
  // describe('sucesso', () => {
  //   afterEach(() => { 
  //     sinon.restore();
  //   })
  //   // AAA - arrange, act, assert
  //   it('retorna array', async function () {
  //     const resultExecute = []
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //     const result = await productService.exclude(999);
  //     expect(result).to.be.an('array');
  //   });
  // });

describe('product services - getAll - success', () => {
    const result = [
      {
        id: 1,
        name: "Martelo de Thor"
      },
    ];

    before(() => {
      sinon.stub(productModel, "getAll").resolves(result);
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await productService.getAll();
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.code).to.be.eq(200);
    });
  });

  describe('product services - getAll - faulure', () => {
    before(() => {
      sinon.stub(productModel, "getAll").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and failure', async () => {
      const resp = await productService.getAll();
      expect(resp.error).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq("Products not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  describe('product services - getById - success', () => {
    const result = { id: 1, name: "Martelo de Thor" };
    before(() => {
      sinon.stub(productModel, "getById").resolves(result);
    });
    after(() => {
      sinon.restore();
    });

    it("return code and message", async () => {
      const resp = await productService.getById();
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.code).to.be.eq(200);
    });
  });

  describe('product services - getById - failure', () => {
    before(() => {
      sinon.stub(productModel, "getById").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.getById();
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq("Product not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  // describe("getByName sucesso", () => {
  //   const product = [{ id: 1, name: "Martelo de Thor" }];
  //   before(() => {
  //     sinon.stub(productModel, "getByName").resolves(product);
  //   });
  //   after(() => {
  //     // productModel.getByName.restore();
  //     sinon.restore();
  //   });

  //   it("retorna o produto correto", async () => {
  //     const resp = await productService.getByName();
  //     expect(resp).to.be.a("object");
  //     expect(resp).to.have.all.keys("data", "code");
  //     expect(resp.data[0]).to.have.all.keys("id", "name");
  //     expect(resp.data[0].id).to.be.eq(1);
  //     expect(resp.data[0].name).to.be.eq("Martelo de Thor");
  //     expect(resp.code).to.be.eq(200);
  //   });
  // });

  // describe("getByName falha", () => {
  //   before(() => {
  //     sinon.stub(productModel, "getByName").resolves();
  //   });
  //   after(() => {
  //     // productModel.getByName.restore();
  //     sinon.restore();
  //   });

  //   it("No erro retorna 404 e Product not found", async () => {
  //     const resp = await productService.getByName();
  //     expect(resp).to.have.all.keys("error", "code");
  //     expect(resp.error).to.be.a("object");
  //     expect(resp.error.message).to.be.eq("Product not found");
  //     expect(resp.code).to.be.eq(404);
  //   });
  // });

  describe('product services - create - success', () => {
    const resultService = { name: "Capa Invisibilidade" };
    const resultModel = { id: 4, name: "Capa Invisibilidade" };

    before(() => {
      sinon.stub(productModel, "create").resolves(resultModel);
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await productService.create(resultService);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.data).to.have.all.keys("id", "name");
      expect(resp.code).to.be.eq(201);
    });
  });

  describe('product services - update - failure', () => {
    before(() => {
      sinon.stub(productModel, "create").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.create({});
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq('"name" is required');
      expect(resp.code).to.be.eq(400);
    });
  });

  describe('return code and message', () => {
    before(() => {
      sinon.stub(productModel, "create").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.create({ name: "aaaa" });
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq(
        '"name" length must be at least 5 characters long'
      );
      expect(resp.code).to.be.eq(422);
    });
  });

  describe('product services - exclude - success', () => {
    const result = { id: 1, name: "Martelo dos Simpsons" };

    before(() => {
      sinon.stub(productModel, "getById").resolves(result);
      sinon.stub(productModel, "update").resolves(result);
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await productService.update(result);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.data).to.have.all.keys("id", "name");
      expect(resp.data.id).to.be.eq(1);
      expect(resp.data.name).to.be.eq("Martelo dos Simpsons");
      expect(resp.code).to.be.eq(200);
    });
  });

  describe("return code and message", () => {
    const result = { id: 99, name: "Capa Mágica" };

    before(() => {
      sinon.stub(productModel, "getById").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.update(result);
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq("Product not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  describe('return code and message', () => {
    before(() => {
      sinon.stub(productModel, "update").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.update({});
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq('"name" is required');
      expect(resp.code).to.be.eq(400);
    });
  });

  describe('return code and message', () => {
    before(() => {
      sinon.stub(productModel, "update").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.update({ name: "aaaa" });
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq(
        '"name" length must be at least 5 characters long'
      );
      expect(resp.code).to.be.eq(422);
    });
  });

  describe('product services - exclude - success', () => {
    const result = { id: 1, name: "Martelo do Thor" };

    before(() => {
      sinon.stub(productModel, "getById").resolves(result);
      sinon.stub(productModel, "exclude").resolves(result);
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await productService.exclude(1);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.data.message).to.be.eq("Product id 1 was deleted");
      expect(resp.code).to.be.eq(204);
    });
  });

  describe('return code and message', () => {
    before(() => {
      sinon.stub(productModel, "getById").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await productService.exclude();
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq("Product not found");
      expect(resp.code).to.be.eq(404);
    });
  });
});

