import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let dataForm = {};

formEl.addEventListener('input', throttle(onInputData, 500));
formEl.addEventListener('submit', onFormSubmit);

const onLoad = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    dataForm = JSON.parse(data);
    Object.entries(dataForm).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
};
window.addEventListener('load', onLoad);

function onInputData(evt) {
  dataForm[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(dataForm);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  dataForm = {};
}
