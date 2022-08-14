// const { expect } = require("chai");
// const sinon = require("sinon");

// const productController = require("../../../controllers/productController");
// const productService = require("../../../services/productService");

// describe("productController.js", () => {
//   describe("getAll sucesso", () => {
//     const result = {
//       data: [
//         { id: 1, name: "Martelo de Thor" },
//         { id: 2, name: "Traje de encolhimento" },
//         { id: 3, name: "Escudo do Capitão América" },
//       ],
//       code: 200,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "getAll").resolves(result);
//     });

//     after(() => {
//       productService.getAll.restore();
//     });

//     it("retorna status 200 e json com os produtos", async () => {
//       await productController.getAll(req, res);
//       expect(res.status.calledWith(200)).to.be.equal(true);
//       expect(res.json.calledWith(result.data)).to.be.equal(true);
//     });
//   });

//   describe("getAll falha", () => {
//     const result = {
//       error: { message: "Product not found" },
//       code: 404,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "getAll").resolves(result);
//     });

//     after(() => {
//       productService.getAll.restore();
//     });

//     it("retorna status 404 e json com o erro", async () => {
//       await productController.getAll(req, res);
//       expect(res.status.calledWith(404)).to.be.equal(true);
//       expect(res.json.calledWith(result.error)).to.be.equal(true);
//     });
//   });

//   ////////////////
//   describe("getById sucesso", () => {
//     const result = {
//       data: { id: 1, name: "Martelo de Thor" },
//       code: 200,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       req.params = { id: 1 };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "getById").resolves(result);
//     });

//     after(() => {
//       productService.getById.restore();
//     });

//     it("retorna status 200 e json com o produto", async () => {
//       await productController.getById(req, res);
//       expect(res.status.calledWith(200)).to.be.equal(true);
//       expect(res.json.calledWith(result.data)).to.be.equal(true);
//     });
//   });

//   describe("getById falha", () => {
//     const result = {
//       error: { message: "Product not found" },
//       code: 404,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       req.params = { id: 1 };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "getById").resolves(result);
//     });

//     after(() => {
//       productService.getById.restore();
//     });

//     it("retorna status 404 e json com o erro", async () => {
//       await productController.getById(req, res);
//       expect(res.status.calledWith(404)).to.be.equal(true);
//       expect(res.json.calledWith(result.error)).to.be.equal(true);
//     });
//   });

//   ////////////////
//   describe("getByName sucesso", () => {
//     const result = {
//       data: [{ id: 1, name: "Martelo de Thor" }],
//       code: 200,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       req.query = { q: "Mart" };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "getByName").resolves(result);
//     });

//     after(() => {
//       productService.getByName.restore();
//     });

//     it("retorna status 200 e json com os produtos", async () => {
//       await productController.getByName(req, res);
//       expect(res.status.calledWith(200)).to.be.equal(true);
//       expect(res.json.calledWith(result.data)).to.be.equal(true);
//     });
//   });

//   describe("getByName falha", () => {
//     const result = {
//       error: { message: "Product not found" },
//       code: 404,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       req.query = { q: "Mart" };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "getByName").resolves(result);
//     });

//     after(() => {
//       productService.getByName.restore();
//     });

//     it("retorna status 404 e json com o erro", async () => {
//       await productController.getByName(req, res);
//       expect(res.status.calledWith(404)).to.be.equal(true);
//       expect(res.json.calledWith(result.error)).to.be.equal(true);
//     });
//   });

//   ///////////////
//   describe("create sucesso", () => {
//     const result = {
//       data: { id: 4, name: "Capa Invisibilidade" },
//       code: 201,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "create").resolves(result);
//     });

//     after(() => {
//       productService.create.restore();
//     });

//     it("retorna status 201 e json com novo produto", async () => {
//       await productController.create(req, res);
//       expect(res.status.calledWith(201)).to.be.equal(true);
//       expect(res.json.calledWith(result.data)).to.be.equal(true);
//     });
//   });

//   describe("create falha", () => {
//     const result = {
//       error: { message: '"name" is required' },
//       code: 400,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "create").resolves(result);
//     });

//     after(() => {
//       productService.create.restore();
//     });

//     it("retorna status 400 e json com o erro", async () => {
//       await productController.create(req, res);
//       expect(res.status.calledWith(400)).to.be.equal(true);
//       expect(res.json.calledWith(result.error)).to.be.equal(true);
//     });
//   });

//   ////////////////
//   describe("update sucesso", () => {
//     const result = {
//       data: { id: 1, name: "Martelo do Simpsons" },
//       code: 200,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "update").resolves(result);
//     });

//     after(() => {
//       productService.update.restore();
//     });

//     it("retorna status 200 e json com produto editado", async () => {
//       await productController.update(req, res);
//       expect(res.status.calledWith(200)).to.be.equal(true);
//       expect(res.json.calledWith(result.data)).to.be.equal(true);
//     });
//   });

//   describe("update falha", () => {
//     const result = {
//       error: { message: "Product not found" },
//       code: 404,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "update").resolves(result);
//     });

//     after(() => {
//       productService.update.restore();
//     });

//     it("retorna status 4004 e json com o erro", async () => {
//       await productController.update(req, res);
//       expect(res.status.calledWith(404)).to.be.equal(true);
//       expect(res.json.calledWith(result.error)).to.be.equal(true);
//     });
//   });

//   ////////////////
//   describe("exclude sucesso", () => {
//     const result = {
//       data: { message: "Product id 2 was deleted" },
//       code: 204,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       req.params = { id: 2 };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "exclude").resolves(result);
//     });

//     after(() => {
//       productService.exclude.restore();
//     });

//     it("retorna status 204 e mensagem de confirmação", async () => {
//       await productController.exclude(req, res);
//       expect(res.status.calledWith(204)).to.be.equal(true);
//       expect(res.json.calledWith(result.data)).to.be.equal(true);
//     });
//   });

//   describe("exclude falha", () => {
//     const result = {
//       error: { message: "Product not found" },
//       code: 404,
//     };

//     const res = {};
//     const req = {};

//     before(() => {
//       req.params = { id: 2 };
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon.stub(productService, "exclude").resolves(result);
//     });

//     after(() => {
//       productService.exclude.restore();
//     });

//     it("retorna status 404 e json com o erro", async () => {
//       await productController.exclude(req, res);
//       expect(res.status.calledWith(404)).to.be.equal(true);
//       expect(res.json.calledWith(result.error)).to.be.equal(true);
//     });
//   });
// });