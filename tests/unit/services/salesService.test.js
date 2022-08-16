const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const saleModel = require('../../../models/salesModel');
const productModel = require('../../../models/productsModel');
const saleService = require('../../../services/salesService');

describe.skip('sales services getAll and getById', () => {
  describe('sale services - getById - success', () => {
    const sales = [
      {
        saleId: 1,
        date: "2022-08-12T19:14:18.000Z",
        productId: 1,
        quantity: 5
      },
    ];

    before(() => {
      sinon.stub(saleModel, "getAll").resolves(sales);
    });
    after(() => {
      sinon.restore();
    });

    it("return code and data", async () => {
      const resp = await saleService.getAll();
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.code).to.be.eq(200);
    });
    
    it('retor an object', async () => {
      const response = await saleService.getAll();
      expect(resp).to.be.a("object");
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('sale services - getById - failure', () => {
    before(() => {
      sinon.stub(saleModel, "getAll").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.getAll();
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq("Sale not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  describe('sale services - getById - success', () => {
    const sale = [
      {
        saleId: 1,
        date: "2022-08-12T19:14:18.000Z",
        productId: 1,
        quantity: 5
      },
    ];

    before(() => {
      sinon.stub(saleModel, "getById").resolves(sale);
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await saleService.getById();
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.code).to.be.eq(200);
    });
  });

  describe('sale services - getById - failure', () => {
    before(() => {
      sinon.stub(saleModel, "getById").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.getById();
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error).to.be.a("object");
      expect(resp.error.message).to.be.eq("Sale not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  describe('sale services - create - success', () => {
    const sale = [
      { productId: 1, quantity: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves(true);
      sinon.stub(saleModel, "createSale").resolves(5);
      sinon.stub(saleModel, "createSaleProduct").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await saleService.create(sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.data).to.have.all.keys("id", "itemsSold");
      expect(resp.data.id).to.be.eq(5);
      expect(resp.code).to.be.eq(201);
    });
  });

  describe('sale services - create - failure', () => {
    const sale = [
      { productId: 1, quantiy: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves();
      sinon.stub(saleModel, "createSale").resolves();
      sinon.stub(saleModel, "createSaleProduct").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('create code and message', async () => {
      const resp = await saleService.create(sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq('"quantity" is required');
      expect(resp.code).to.be.eq(400);
    });
  });

  describe('sale services - create - failure', () => {
    const sale = [
      { product: 1, quantity: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves();
      sinon.stub(saleModel, "createSale").resolves();
      sinon.stub(saleModel, "createSaleProduct").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.create(sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq('"productId" is required');
      expect(resp.code).to.be.eq(400);
    });
  });

  describe('sale services - create - failure', () => {
    const sale = [
      { productId: 1, quantity: 0 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves();
      sinon.stub(saleModel, "createSale").resolves();
      sinon.stub(saleModel, "createSaleProduct").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.create(sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq(
        '"quantity" must be greater than or equal to 1'
      );
      expect(resp.code).to.be.eq(422);
    });
  });

  describe('sale services - create - failure', () => {
    const sale = [
      { productId: 1, quantity: 1 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves(undefined);
      sinon.stub(saleModel, "createSale").resolves();
      sinon.stub(saleModel, "createSaleProduct").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.create(sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq("Product not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  describe('sale services - update - success', () => {
    const sale = [
      { productId: 1, quantity: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves(true);
      sinon.stub(saleModel, "getById").resolves(true);
      sinon.stub(saleModel, "update").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and data', async () => {
      const resp = await saleService.update({ id: 3 }, sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.data).to.have.all.keys("saleId", "itemsUpdated");
      expect(resp.data.saleId).to.be.eq(3);
      expect(resp.code).to.be.eq(200);
    });
  });

  describe('sale services - updated - failure', () => {
    const sale = [
      { productId: 1, quantity: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves(true);
      sinon.stub(saleModel, "getById").resolves(false);
      sinon.stub(saleModel, "update").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.update({ id: 99 }, sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq("Sale not found");
      expect(resp.code).to.be.eq(404);
    });
  });

  describe('sale services - create - failure', () => {
    const sale = [
      { produtId: 1, quantity: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves();
      sinon.stub(saleModel, "getById").resolves();
      sinon.stub(saleModel, "update").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it('return code and message', async () => {
      const resp = await saleService.update({ id: 2 }, sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.code).to.be.eq(400);
    });
  });

  describe('sale services - create - failure', () => {
    const sale = [
      { productId: 1, quantity: 5 },
    ];

    before(() => {
      sinon.stub(productModel, "getById").resolves(undefined);
      sinon.stub(saleModel, "getById").resolves();
      sinon.stub(saleModel, "update").resolves();
    });
    after(() => {
      sinon.restore();
    });

    it("return code and message", async () => {
      const resp = await saleService.update({ id: 2 }, sale);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.code).to.be.eq(404);
    });
  });
  
  describe('sale services - exclude - success', () => {
    before(() => {
      sinon.stub(saleModel, "getById").resolves(true);
      sinon.stub(saleModel, "exclude").resolves();
    });
    after(() => {
      sinon.restore();
    });
    it('return code and data', async () => {
      const resp = await saleService.exclude(5);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("data", "code");
      expect(resp.code).to.be.eq(204);
    });
  });

  describe('sale services - exclude - failure', () => {
    before(() => {
      sinon.stub(saleModel, "getById").resolves(false);
      sinon.stub(saleModel, "exclude").resolves();
    });
    after(() => {
      sinon.restore();
    });
    it('return code and message', async () => {
      const resp = await saleService.exclude(99);
      expect(resp).to.be.a("object");
      expect(resp).to.have.all.keys("error", "code");
      expect(resp.error.message).to.be.eq("Sale not found");
      expect(resp.code).to.be.eq(404);
    });
  });
});

