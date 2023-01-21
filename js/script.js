let form = document.querySelector('.subscription-form');
let email = document.querySelector('.subscription-input-email');
let text = document.querySelector('.subscription-offer');

form.onsubmit = function (evt) {
  evt.preventDefault();
  text.textContent = 'Адрес ' + email.value + ' добавлен в список для рассылки!'
}
