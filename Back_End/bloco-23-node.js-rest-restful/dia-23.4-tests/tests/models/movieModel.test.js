const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');


describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme pelo "id" na DB', () => {
  describe('Quando o filme desejado não é encontrado', async () => {
    const wrongId = 8465;

    it('retorna um objeto vazio', async () => {
      const response = await MoviesModel.getOne(wrongId);

      expect(response).to.be.a('object');
      expect(Object.keys(response)).to.have.length(0);
    });    
  });
  describe('Quando a requisição encontra o filme desejado', async () => {
    const correctId = 3;

    it('retorna um objeto com os detalhes do filme', async () => {
      const response = await MoviesModel.getOne(correctId);

      expect(response).to.have.a.property('title');
      expect(response).to.have.a.property('directedBy');
      expect(response).to.have.a.property('releaseYear');
    });
  });
});
