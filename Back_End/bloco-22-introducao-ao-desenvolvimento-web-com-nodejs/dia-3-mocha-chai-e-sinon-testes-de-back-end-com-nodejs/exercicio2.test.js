const { expect } = require('chai');
const sinon = require('sinon');
const escreveArquivo = require('./exercicio2');
const fs = require('fs');

describe('Executa a função de escrever arquivos', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });
  describe('Verifica se a resposta', () => {
    it('É uma string', () => {
      const result = escreveArquivo('titulo_incrivel', 'o conteudo mais ainda');
      expect(typeof result).to.be.a('string');
    });
    it('É igual a ok', () => {
      const result = escreveArquivo('titulo_incrivel', 'o conteudo mais ainda');
      expect(result).to.be.equal('ok');
    });
  });
});
