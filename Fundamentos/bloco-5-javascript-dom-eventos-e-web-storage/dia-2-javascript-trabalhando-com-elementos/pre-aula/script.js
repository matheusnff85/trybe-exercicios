document.querySelector("#elementoOndeVoceEsta").parentNode.style.background = "red"
document.querySelector("#primeiroFilhoDoFilho").innerText = "Olá mundo!"
document.querySelector("#pai").firstChild
document.querySelector("#elementoOndeVoceEsta").previousElementSibling
document.querySelector("#elementoOndeVoceEsta").nextSibling
document.querySelector("#elementoOndeVoceEsta").nextSibling.nextSibling
document.querySelector("#pai").lastElementChild.previousElementSibling

let irmao = document.createElement("section")
irmao.innerText = "novo irmão"
irmao.className = "irmao"

document.querySelector("#pai").appendChild(irmao)


let filhoOnde = document.createElement("section")
filhoOnde.innerText = "filho de onde"
filhoOnde.className = "ondeFilho"

document.querySelector("#elementoOndeVoceEsta").appendChild(filhoOnde)

let filhoFilho = document.createElement("p")
filhoFilho.innerText = "filho do filho"
filhoFilho.className = "filhoDoFilho"

document.querySelector("#primeiroFilhoDoFilho").appendChild(filhoFilho)

document.querySelector(".filhoDoFilho").parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling

let removedor = document.querySelector("#pai").children;

for (let index in removedor) {
  if (removedor[index] !== "elementoOndeVoceEsta") {
    removedor[index].remove();
  }
}

let removedor2 = document.querySelector("#elementoOndeVoceEsta").children;

for (let index2 in removedor2) {
  if (removedor2[index2] !== "primeiroFilhoDoFilho") {
    removedor2[index2].remove();
  }
}