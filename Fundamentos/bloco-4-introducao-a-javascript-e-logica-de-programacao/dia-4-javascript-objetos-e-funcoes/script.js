// let infos = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,
//   },
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// }

// console.log('A Jogadora ' + infos.name + ' ' + infos.lastName + ' tem ' + infos.age + ' anos de idade.')
// console.log('A Jogadora ' + infos.name + ' ' + infos.lastName + ' foi eleita a melhor do mundo por ' + infos.bestInTheWorld.length + ' vezes')
// console.log('A Jogadora possui ' + infos.medals.golden + ' medalhas de ouro e ' + infos.medals.silver + ' medalhas de prata.')

// --------------------- for/in for/off ----------------------------


// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let index in names) {
//   console.log('Olá ' + names[index])
// }


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log(index + ': ' + car[index])
}