const user_informstions = [
  {
    email: "hdkkhd953@gmail.com",
  },
  {
    email: "hdh85tjd@gmail.com",
  },
  {
    email: "d938579@gmail.com",
  },
  {
    email: "jdsjdsj3@gmail.com",
  },
  {
    email: "abubejjdkra73hf@gmail.com",
  },
  {
    email: "abu93kra04@gmail.com",
  },
  {
    email: "abub0kmnra04@gmail.com",
  },
  {
    email: "ahrhdkrd@gmail.com",
  },
];

//acepting email value
//finding index of @
//starting form the 2nd value to index-2 gett it as middle part
//generating asrikses by the lenght of the middle part
//replacing by astirkses then addin git a masked email
//
function getmasked_email(email) {
  if (!email || !email.includes("@gmail.com")) {
    return 0;
  }
  let index_mid = email.indexOf("@");
  let middlepart = email.slice(2, index_mid - 2);
  let mask = "*".repeat(middlepart.length);
  let masked_email = email.replace(middlepart, mask);
  return masked_email;
}

function mask_all_user_emails(users_email) {
  for (let index = 0; index < users_email.length; index++) {
    const element = users_email[index];
    let masked = getmasked_email(element.email);
    if (masked != 0) {
      element.safe_email = masked;
    }
  }
}
mask_all_user_emails(user_informstions);
console.log(user_informstions);
