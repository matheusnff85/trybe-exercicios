const { expect } = require('chai');
const analyzeNumber = require('./exercicio1');

describe('Testa a função que analisa um número', () => {
  describe('O paramêtro passado não é um número', () => {
    it('Passando uma string como paramềtro o resultado é null', () => {
      const result = analyzeNumber('teste');
      expect(result).to.be.equal('o valor deve ser um número');
    });
  });
  describe('O paramêtro passado é um número', () => {
    it('O número passado é positivo', () => {
      const result = analyzeNumber(25);
      expect(result).to.be.equal('positivo');
    });
    it('O número passado é negativo', () => {
      const result = analyzeNumber(-19);
      expect(result).to.be.equal('negativo');
    });
    it('O número passado é neutro', () => {
      const result = analyzeNumber(0);
      expect(result).to.be.equal('neutro');
    });
  });
});