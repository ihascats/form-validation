import '../css/styles.css';
import validate from './validate.bundle-validate';

const form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();

  form.childNodes.forEach((domElement) => {
    const element = domElement;
    if (element.nodeName === 'INPUT') {
      if (element.value === '') {
        element.classList.add('invalid');
        element.nextElementSibling.style.visibility = 'visible';
      }
    }
  });
  const data = new FormData(form);
  const [email, , zip, password, passwordConfirmation] = data;
  // VALIDATION
  validate(email, zip, password, passwordConfirmation);
};
