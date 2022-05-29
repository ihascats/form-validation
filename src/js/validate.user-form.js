function validateEmail(userEmail) {
  // eslint-disable-next-line operator-linebreak
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(userEmail).toLowerCase());
}

function validateZip(userZip) {
  const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

  return regex.test(String(userZip));
}

function validatePassword(userPassword) {
  // eslint-disable-next-line operator-linebreak
  const regex =
    /^.*(?=.{8,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;

  return regex.test(String(userPassword));
}

function validatePasswordConfirmation(userPassword, userConfirmation) {
  if (!validatePassword(userPassword)) {
    return false;
  }
  return userPassword === userConfirmation;
}

export {
  validateEmail,
  validateZip,
  validatePassword,
  validatePasswordConfirmation,
};
