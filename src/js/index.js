import '../css/styles.css';
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
  console.log(data);
  data.forEach((value, name) => {
    console.log(`${name} : ${value}`);
  });

  form.childNodes.forEach((element) => {
    if (element.nodeName === 'INPUT') {
      if (element.value === '') {
        element.classList.add('invalid');
      }
    }
  });
  const [email, , zip, password, passwordConfirmation] = data;
  // EMAIL VALIDATION
  validateEmail(email[1]);
  validateZip(zip[1]);
  validatePassword(password[1]);
  validatePasswordConfirmation(password[1], passwordConfirmation[1]);
};
