export function validateEmail(email) {
  const emailParts = email.split("@");

  if (
    emailParts.length == 2 &&
    emailParts[0].length > 1 &&
    emailParts[1].includes(".")
  ) {
    // console.log(email);
  } else {
    // console.log("Wrong email");
  }
}

export function validateName(name) {}

export function validatePhone(phone) {}
