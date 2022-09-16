// ./index.ts

import { exit } from "process";
import readline from "readline-sync";
import { yearMonths, yearSeasons } from './enums'

const monthsNames = Object.values(yearMonths);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const seasonsSouth = {
    [yearSeasons.Fall]: [yearMonths.March, yearMonths.April, yearMonths.May, yearMonths.June],
    [yearSeasons.Winter]: [yearMonths.June, yearMonths.July, yearMonths.August, yearMonths.September],
    [yearSeasons.Spring]: [yearMonths.September, yearMonths.October, yearMonths.November, yearMonths.December],
    [yearSeasons.Summer]: [yearMonths.December, yearMonths.January, yearMonths.Febuary, yearMonths.March],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [yearSeasons.Spring]: seasonsSouth[yearSeasons.Fall],
    [yearSeasons.Summer]: seasonsSouth[yearSeasons.Winter],
    [yearSeasons.Fall]: seasonsSouth[yearSeasons.Spring],
    [yearSeasons.Winter]: seasonsSouth[yearSeasons.Summer],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

const month = monthsNames[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});