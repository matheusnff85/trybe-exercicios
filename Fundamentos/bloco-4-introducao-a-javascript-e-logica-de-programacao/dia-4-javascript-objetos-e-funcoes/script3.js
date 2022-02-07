// ------------------------------Primeiro--------------------------------------

let palavra = 'ovo';

function verificaPalindrome(palavra) {
  let invertida = palavra.split("").reverse().join("");
  if (palavra === invertida) {
    return true
  }
    return false
}

console.log(verificaPalindrome(palavra));

// ------------------------------Segundo--------------------------------------

let numeros = [2, 3, 6, 7, 10, 1];

function maiorNumero(numeros) {
  let maior = 0;
  for (let index in numeros) {
    for (let index2 in numeros) {
      if (numeros[index] > numeros[index2]) { 
        maior = index
      }
    }
  }
  return maior
} 

console.log(maiorNumero(numeros));

// --------------------------------Terceiro------------------------------------

let numeros = [2, 4, 6, 7, 10, 0, -3];

function maiorNumero(numeros) {
  let maior = 0;
  for (let index in numeros) {
    for (let index2 in numeros) {
      if (numeros[index] < numeros[index2]) { 
        maior = index
        maior2 = numeros[index]
      }
    }
  }
  return maior
} 

console.log(maiorNumero(numeros));

// ---------------------------------Quarto-----------------------------------

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome = '';

function maisLetras(nomes, maiorNome) {
  for (let index in nomes) {
    if (nomes[index].length > maiorNome.length) {
    maiorNome = nomes[index]
    }
  }
  return maiorNome
}

console.log(maisLetras(nomes, maiorNome));




// ---------------------------------Quinto-----------------------------------

let numeros = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(numeros) {
  let vezezRepetido = 0;
  let vezesNumero = 0;
  let indexDoNumero = 0;
  for (let index in numeros) {
    let verificador = numeros[index];
    for (let index2 in numeros) {
      if (verificador === numeros[index2]) {
        vezesNumero += 1
      }
    }
    if (vezesNumero > vezezRepetido) {
      vezezRepetido = vezesNumero;
      indexDoNumero = index;
    }
    vezesNumero = 0;
  } 
  return numeros[indexDoNumero]
}

console.log(maisRepetido(numeros));

// -----------------------------------Sextou---------------------------------

let numero = 5;

function somador(numero) {
  let resultado = 0;
  for (let index = 1; index <= numero; index += 1) {
    resultado += index
  }
  return resultado
}

console.log(somador(numero));

// -----------------------------------Setimo---------------------------------