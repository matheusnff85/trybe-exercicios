// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevent1(event) {
  event.preventDefault()
}

HREF_LINK.addEventListener('click', prevent1)

function prevent2(event) {
  event.preventDefault()
}

INPUT_CHECKBOX.addEventListener('click', prevent2)

function prevent3(event) {
  event.preventDefault()
  let verifica = event.key
  if (verifica === 'a') {
    texto = INPUT_TEXT.value + 'a'
  }
  else if (verifica != 'a'){
    INPUT_TEXT.value = texto
  }
}

INPUT_TEXT.addEventListener('keyup', prevent3)