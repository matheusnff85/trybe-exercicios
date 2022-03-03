const fatorial = (number) => (number > 1) ? calculaFatorial(number) : `1`;

const calculaFatorial = (number) => {
  let total = 1;
  for (let index = number; index >= 1; index -= 1) {
    total *= index
  }
  return total
};

console.log(fatorial(10));

const factoial = number => number > 1 ? number * factoial(number - 1) : 1;
console.log(factoial(5));

// -----------------------------------------------------------------------------

const splitPhrase = (phrase) => biggestWord(phrase.split(' '));
const biggestWord = (array) => {
  let inicial = 'a';
  for (let index of array){
    if (index.length > inicial.length) {
      inicial = index;
    }
  } 
  return inicial
}

console.log(splitPhrase('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'aconteceu'

//-----------------------------------------------------------------------------------

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));