import '../css/styles.css';

const form = document.querySelector('form');

form.onsubmit = (event) => {
  event.preventDefault();
  const data = new FormData(form);
  data.forEach((value, name) => {
    console.log(`${name} : ${value}`);
  });
};
