const preco = 50
const venda = 100

var precoFinal = preco + (preco * 0.2);

if (preco == 0 || venda == 0) {
  console.log("Valor invalido");
}

var lucro = venda - precoFinal;

console.log(lucro * 1000);