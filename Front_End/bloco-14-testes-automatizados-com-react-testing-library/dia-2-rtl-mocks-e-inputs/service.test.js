let { generateNumber, upperCaseConvert, firstLetter, concatStrings, fetchDog } = require('./service');
const service = require("./service");

describe('Exercicio 1', () => {
  test('Testa a função que gera um numero de 1 a 100', () => {
    generateNumber = jest.fn().mockReturnValue(10);
    expect(generateNumber()).toBe(10);
    expect(generateNumber).toHaveBeenCalled();
    expect(generateNumber).toHaveBeenCalledTimes(1)
  })
})

describe('Exercicio 2', () => {
  test('Troca a implementação da primeira função e testa se a nova lógica é aplicada e se é executada apenas uma vez', () => {
    generateNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(generateNumber(4, 2)).toBe(2);
    expect(generateNumber).toHaveBeenCalledTimes(1);
  })
})

describe('Exercicio 3', () => {
  test('Desenvolve uma nova implementação e testa se ela funciona corretamente', () => {
    generateNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(generateNumber(5, 3, 7)).toBe(105)
    generateNumber.mockReset();
    generateNumber = jest.fn().mockImplementation((a) => a * 2);
    expect(generateNumber(5)).toBe(10)
  })
})

describe('Exercicio 4', () => {
  test('Troca a implementação das 3 funções e as testas com as novas implementações', () => {
    const upperCaseConvert = jest.spyOn(service, 'upperCaseConvert').mockImplementation(a => a.toLowerCase());
    firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);
    concatStrings = jest.fn().mockImplementation((string1, string2, string3) => `${string1} ${string2} ${string3}`);
    expect(upperCaseConvert('OLA AMIGOS')).toBe('ola amigos');
    expect(firstLetter('Naruto')).toBe('o');
    expect(concatStrings('Jujutsu kaisen', 'é uma', 'obra prima')).toBe('Jujutsu kaisen é uma obra prima');
  })
  test('Restaura a primeira função e testa se a implementação original se mantém', () => {
    service.upperCaseConvert.mockRestore();
    expect(upperCaseConvert('ola amigos')).toBe('OLA AMIGOS');
  })
})

describe('Exercicio 5', () => {
  fetchDog = jest.fn();
  afterEach(fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    fetchDog.mockResolvedValue("request sucess");

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).resolves.toBe("request sucess");
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    fetchDog.mockRejectedValue("request failed");

    expect(fetchDog).toHaveBeenCalledTimes(0);
    await expect(fetchDog()).rejects.toMatch("request failed");
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });
})