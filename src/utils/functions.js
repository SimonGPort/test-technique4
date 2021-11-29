const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export function ValidateError(value) {
  let error = { name: false, compagny: false, email: false };
  let success = true;

  if (value.name === "") {
    error.name = true;
    success = false;
  }
  if (value.compagny === "") {
    error.compagny = true;
    success = false;
  }
  if (!ValidateEmail(value.email)) {
    error.email = true;
    success = false;
  }

  return { success, error };
}
