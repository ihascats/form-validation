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

function validate(email, zip, password, passwordConfirmation) {
  const emailInput = document.querySelector('#email');
  const zipInput = document.querySelector('#zip');
  const passwordInput = document.querySelector('#password');
  const confirmationInput = document.querySelector('#confirmPassword');
  if (!validateEmail(email[1])) {
    displayInvalid(emailInput);
  } else {
    displayValid(emailInput);
  }

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
}

export default validate;
