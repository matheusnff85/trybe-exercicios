const button = document.querySelector('#send-button');
const name = document.querySelector('#name');
const email = document.querySelector('#user-email');

function stopSubmit(event) {
  event.preventDefault();
} 

button.addEventListener('click', stopSubmit)

function validate() {
  const name = document.querySelector('#name').value.length;
  const email = document.querySelector('#user-email').value.length;
  if (name === 0 || email === 0 ) {
    window.alert('Dados Inválidos.')
  }
  else if ([name > 10 && name < 50] && [email > 10 && email < 50]) {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}

button.addEventListener('click', validate)