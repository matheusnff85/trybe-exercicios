const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('Busca um filme pelo "id" na DB', () => {
  describe('Quando o filme desejado não é encontrado', async () => {
    const res = {};
    const req = {};

    before(() => {
      req.params = { 
        id: 8696, 
      };

      res.status = sinon.stub()
        .returns(res);
      res.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getOne')
        .resolves(false);
    });

    after(() => {
      MoviesService.getOne.restore();
    });

    it('retorna o erro 404', async () => {
      await MoviesController.getOne(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
    });
    it('retorna a mensagem "filme não encontrado"', async () => {
      await MoviesController.getOne(req, res);

      expect(res.send.calledWith('Filme não encontrado.')).to.be.equal(true);
    });
    
  });

  describe('Quando a requisição encontra o filme desejado', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = { 
        id: 3, 
      };
      const filteredMovie = {
        title: 'Fullmetal Alchemist',
        directedBy: 'Tarantino',
        releaseYear: 2012,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns(filteredMovie);

      sinon.stub(MoviesService, 'getOne')
        .resolves(filteredMovie);
    });

    after(() => {
      MoviesService.getOne.restore();
    });

    it('a response retorna o codigo 200', async () => {
      await MoviesController.getOne(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('e retorna um objeto com o filme desejado', async () => {
      const result = await MoviesController.getOne(request, response);
      const { title, directedBy, releaseYear } = result;

      expect(title).to.be.equal('Fullmetal Alchemist');
      expect(directedBy).to.be.equal('Tarantino');
      expect(releaseYear).to.be.equal(2012);
    });
  });
});