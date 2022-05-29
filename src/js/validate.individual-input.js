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

function individualInputBundle() {
  const form = document.querySelector('form');
  const emailInput = document.querySelector('#email');
  const zipInput = document.querySelector('#zip');
  const passwordInput = document.querySelector('#password');
  const confirmationInput = document.querySelector('#confirmPassword');

  emailInput.addEventListener('focusout', () => {
    const data = new FormData(form);
    const [email] = data;
    if (!validateEmail(email[1])) {
      displayInvalid(emailInput);
    } else {
      displayValid(emailInput);
    }
  });

  zipInput.addEventListener('focusout', () => {
    const data = new FormData(form);
    const [, , zip] = data;
    if (!validateZip(zip[1])) {
      displayInvalid(zipInput);
    } else {
      displayValid(zipInput);
    }
  });

  passwordInput.addEventListener('focusout', () => {
    const data = new FormData(form);
    const [, , , password] = data;
    if (!validatePassword(password[1])) {
      displayInvalid(passwordInput);
      passwordInput.nextElementSibling.textContent = displayInvalidPassword(
        // eslint-disable-next-line comma-dangle
        password[1]
      );
    } else {
      displayValid(passwordInput);
    }
  });

  confirmationInput.addEventListener('focusout', () => {
    const data = new FormData(form);
    const [, , , password, passwordConfirmation] = data;
    if (!validatePasswordConfirmation(password[1], passwordConfirmation[1])) {
      displayInvalid(confirmationInput);
    } else {
      displayValid(confirmationInput);
    }
  });

  passwordInput.addEventListener('input', () => {
    const data = new FormData(form);
    const [, , , password] = data;
    if (!validatePassword(password[1])) {
      displayInvalid(passwordInput);
      passwordInput.nextElementSibling.textContent = displayInvalidPassword(
        // eslint-disable-next-line comma-dangle
        password[1]
      );
    } else {
      displayValid(passwordInput);
    }
  });

  confirmationInput.addEventListener('input', () => {
    const data = new FormData(form);
    const [, , , password, passwordConfirmation] = data;
    if (!validatePasswordConfirmation(password[1], passwordConfirmation[1])) {
      displayInvalid(confirmationInput);
    } else {
      displayValid(confirmationInput);
    }
  });
}

export default individualInputBundle;
