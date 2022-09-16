"use strict";
// ./index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const enums_1 = require("./enums");
const monthsNames = Object.values(enums_1.yearMonths);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
const seasonsSouth = {
    [enums_1.yearSeasons.Fall]: [enums_1.yearMonths.March, enums_1.yearMonths.April, enums_1.yearMonths.May, enums_1.yearMonths.June],
    [enums_1.yearSeasons.Winter]: [enums_1.yearMonths.June, enums_1.yearMonths.July, enums_1.yearMonths.August, enums_1.yearMonths.September],
    [enums_1.yearSeasons.Spring]: [enums_1.yearMonths.September, enums_1.yearMonths.October, enums_1.yearMonths.November, enums_1.yearMonths.December],
    [enums_1.yearSeasons.Summer]: [enums_1.yearMonths.December, enums_1.yearMonths.January, enums_1.yearMonths.Febuary, enums_1.yearMonths.March],
};
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
const seasonsNorth = {
    [enums_1.yearSeasons.Spring]: seasonsSouth[enums_1.yearSeasons.Fall],
    [enums_1.yearSeasons.Summer]: seasonsSouth[enums_1.yearSeasons.Winter],
    [enums_1.yearSeasons.Fall]: seasonsSouth[enums_1.yearSeasons.Spring],
    [enums_1.yearSeasons.Winter]: seasonsSouth[enums_1.yearSeasons.Summer],
};
const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
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
    if (months.includes(month))
        console.log(seasons);
});
