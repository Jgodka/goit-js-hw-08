import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(evt) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all fields.');
  }

  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  dataForm = {};
}
