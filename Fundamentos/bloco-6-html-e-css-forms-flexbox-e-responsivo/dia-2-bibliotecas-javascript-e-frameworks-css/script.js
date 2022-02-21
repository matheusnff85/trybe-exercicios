const button = document.querySelector('#send-button');
const name = document.querySelector('#name');
const email = document.querySelector('#user-email');
const dateButton = document.querySelector('#datepicker')

// function validate() {
//   const name = document.querySelector('#name').value.length;
//   const email = document.querySelector('#user-email').value.length;
//   if (name === 0 || email === 0 ) {
//     window.alert('Dados Inválidos.')
//   }
//   else if ([name > 10 && name < 50] && [email > 10 && email < 50]) {
//     window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
//   }
// }

dateButton.addEventListener('click', function() {
  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD/MM/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
  });
  
  var field = document.getElementById('datepicker');
  var picker = new Pikaday({
      onSelect: function(date) {
          field.value = picker.toString();
      }
  });
  field.parentNode.insertBefore(picker.el, field.nextSibling);
})

function stopSubmit(event) {
  event.preventDefault();
  window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
} 

button.addEventListener('click', stopSubmit)