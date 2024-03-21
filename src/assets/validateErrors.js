/** @format */

export const validateNumber = (number, setFormErrors) => {
  if (!/^\d+$/.test(number)) {
    setFormErrors("number", "incorrect phone number! just numbers! ");
    return false;
  }

  const cleanedNumber = number.replace(/[-\s()+]/g, "");

  if (cleanedNumber.length < 7) {
    setFormErrors("number", "incorrect phone number! just numbers!");
    return false;
  } else {
    setFormErrors("number", "");
    return true;
  }
};

export const validateName = (fname, setFormErrors) => {
  if (fname.length < 3) {
    setFormErrors("fname", "name must have at least 3 characters");
  } else {
    setFormErrors("fname", "");
    return true;
  }
};

export const validateMessage = (message, setFormErrors) => {
  if (message.length < 3) {
    setFormErrors("message", "write something more...");
  } else {
    setFormErrors("message", "");
    return true;
  }
};

export const validateEmail = (email, setFormErrors) => {
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    setFormErrors("email", "invalid email");
  } else {
    setFormErrors("email", "");
    return true;
  }
};
