function maskEmail(email) {
  let parts = email.split("@");
  let name = parts[0];
  let domain = parts[1];

  if (name.length <= 2) {
    return email; // optional safety
  }

  let masked =
    name[0] +
    "*".repeat(name.length - 2) +
    name[name.length - 1];

  return masked + "@" + domain;
}

// outside function
let email = "apple.pie@example.com";

// log output
console.log(maskEmail(email));
