const a = 60 
const b = 60
const c = 60
let soma = (a + b) + c

if (a < 0 || b < 0 || c < 0) {
  console.log("valor invalido")
}

else if (soma == 180) {
  console.log("true")
}

else if (soma < 180 || soma > 180) {
  console.log("false")
}