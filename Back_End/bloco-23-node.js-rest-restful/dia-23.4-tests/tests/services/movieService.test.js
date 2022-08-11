const sinon = require('sinon');
const { expect } = require('chai');
// const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme pelo "id" na DB', () => {
  describe('Quando o id não é informado', async () => {
    const wrongId = '';

    it('retorna um booleano', async () => {
      const response = await MoviesService.getOne(wrongId);

      expect(response).to.be.a('boolean');
    });
    it('o booleano é igual a "false"', async () => {
      const response = await MoviesService.getOne(wrongId);

      expect(response).to.be.equal(false);
    });
    
  });
  describe('Quando o id informado é correto', async () => {
    before(() => {
      sinon.stub(MoviesModel, 'getOne')
        .resolves({});
    });

    after(() => {
      MoviesModel.getOne.restore();
    });
    const correctId = 3;

    it('retorna um objeto', async () => {
      const response = await MoviesService.getOne(correctId);

      expect(response).to.be.a('object');
    });
  });
});