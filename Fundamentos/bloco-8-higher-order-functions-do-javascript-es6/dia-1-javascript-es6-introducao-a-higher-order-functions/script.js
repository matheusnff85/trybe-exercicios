const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const makeEmployer = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`};
};

console.log(newEmployees(makeEmployer));

// ---------------------------------------------------------------------------------------------------

const checkResult = (playerNumber, sortedNumber) => playerNumber === sortedNumber;

const result = (playerNumber, check) => {
  const sortedNumber = Math.floor(Math.random() * 5) + 1;
  return check(playerNumber, sortedNumber) ? 'Parabens você ganhou' : 'Tente novamente';
}

console.log(result(4, checkResult));

// ----------------------------------------------------------------------------------------------------

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const avaliationResult = (rightAnswers, studentAnswers, pointsCounter) => {
  return `Resultado final: ${pointsCounter(rightAnswers, studentAnswers)} pontos!`;
}

const checkAnswers = (rightAnswers, studentAnswers) => {
  let counter = 0;
  for (let index = 0; index <= 10; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      counter += 1;
    }
    if (studentAnswers[index] === 'N.A') {
      counter = counter;
    }
    if (rightAnswers[index] !== studentAnswers[index]) {
      counter -= 0.5;
    }
  }
  return counter
}

console.log(avaliationResult(rightAnswers, studentAnswers, checkAnswers));
