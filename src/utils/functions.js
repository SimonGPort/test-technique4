export const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const ValidateName = (name) => {
  if (name === "") {
    return false;
  } else {
    return true;
  }
};

export const ValidateCompagny = (compagny) => {
  if (compagny === "") {
    return false;
  } else {
    return true;
  }
};

export const ValidateError = (value) => {
  debugger;
  let error = { name: false, compagny: false, email: false };
  let success = true;

  if (!ValidateName(value.name)) {
    error.name = true;
    success = false;
  }
  if (!ValidateCompagny(value.compagny)) {
    error.compagny = true;
    success = false;
  }
  if (!ValidateEmail(value.email)) {
    error.email = true;
    success = false;
  }

  return { success, error };
};
