var salarioBruto = 3000;

if (salarioBruto <= 1556.94 ) {
  var INSS = salarioBruto * 0.08;
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  var INSS = salarioBruto * 0.09;
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5.189,82) {
  var INSS = salarioBruto * 0.11;
}

else if (salarioBruto > 5189.82) {
  var INSS = 570.88;
}

var salarioINSS = salarioBruto - INSS;

if (salarioINSS <= 1903.98) {
  var IR = 0;
}

else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
  var IR = (salarioINSS * 0.075) - 142.80;
}

else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
  var IR = (salarioINSS * 0.15) - 354.80;
}

else if (salarioINSS >= 3751.06 && salarioINSS <= 4.664,68) {
  var IR = (salarioINSS * 0.225) - 636.13;
}

else if (salarioINSS > 4664.68) {
  var IR = (salarioINSS * 0.275) - 869.36;
}

var salarioLiquido = salarioINSS - IR;
console.log(salarioLiquido)