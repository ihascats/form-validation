import '../css/styles.css';
import {
  displayInvalid,
  displayInvalidPassword,
} from './validate.display-invalid';
import displayValid from './validate.display-valid';
import {
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
  validateZip,
} from './validate.user-form';

const form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();
  const data = new FormData(form);

  form.childNodes.forEach((domElement) => {
    const element = domElement;
    if (element.nodeName === 'INPUT') {
      if (element.value === '') {
        element.classList.add('invalid');
        element.nextElementSibling.style.visibility = 'visible';
      }
    }
  });
  const [email, , zip, password, passwordConfirmation] = data;
  // VALIDATION
  const emailInput = document.querySelector('#email');
  const zipInput = document.querySelector('#zip');
  const passwordInput = document.querySelector('#password');
  const confirmationInput = document.querySelector('#confirmPassword');
  if (!validateEmail(email[1])) {
    displayInvalid(emailInput);
  } else {
    displayValid(emailInput);
  }

  console.log(password[1], passwordConfirmation[1]);
  if (!validateZip(zip[1])) {
    displayInvalid(zipInput);
  } else {
    displayValid(zipInput);
  }
  if (!validatePassword(password[1])) {
    displayInvalid(passwordInput);
    passwordInput.nextElementSibling.textContent = displayInvalidPassword(
      // eslint-disable-next-line comma-dangle
      password[1]
    );
  } else {
    displayValid(passwordInput);
  }
  if (!validatePasswordConfirmation(password[1], passwordConfirmation[1])) {
    displayInvalid(confirmationInput);
  } else {
    displayValid(confirmationInput);
  }
};
