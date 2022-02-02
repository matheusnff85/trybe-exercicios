let peça = ("RaiNha".toLowerCase());

if (peça == "cavalo") {
  console.log("Movimentos em L");
}

else if (peça == "bispo") {
  console.log("diagonais");
}

else if (peça == "peao") {
  console.log("linhas");
}

else if (peça == "torre") {
  console.log("Linhas e colunas");
}

else if (peça == "rainha") {
  console.log("Linhas, colunas, diagonais");
}

else if (peça == "rei") {
  console.log("linhas, colunas, diagonais");
}

else {
  console.log("Peça inválida, tente novamente!");
}