function displayValid(inputElement) {
  const element = inputElement;
  element.classList.add('valid');
  element.classList.remove('invalid');
  element.nextElementSibling.style.visibility = 'hidden';
}

export default displayValid;
