// Assignment code here
function generatePassword() {
  console.log("is it working?");
}
// 1. Need to do promt//
function generatePassword() {
  let passwordText = "";
  // get password length
  // TODO: only allow more than 8 characters and less than 128
  let charLength = prompt(
    "how many Characters would you like your password to conain?"
  );

  // Check if input can be converted into a Number

  if (Number(charLength)) {
    // check if number is >= 8 but <= 128
    charLength = Number(charLength);
    if (charLength >= 8 && charLength <= 128) {
      // Generate the password
      // a. get password conditions
      let hasSpecialCharacter = confirm(
        "Click ok to Confirm including special characters"
      );
      let hasNumCharacter = confirm(
        "Click ok to Confirm including numberic characters"
      );
      let hasLowerCase = confirm(
        "Click ok to Confirm including lowercase characters"
      );
      let hasUpperCase = confirm(
        "Click ok to Confirm including uppercase characters"
      );

      // while passwordText length is < charLength
      while (passwordText.length < charLength) {
        // **************************************
        if (hasSpecialCharacter && passwordText.length < charLength) {
          passwordText += generateSpecialCharacter();
        }
        if (hasNumCharacter && passwordText.length < charLength) {
          passwordText += generateRandumNumber();
        }
        if (hasLowerCase && passwordText.length < charLength) {
          passwordText += generateRandomLowercaserLetter();
        }
        if (hasUpperCase && passwordText.length < charLength) {
          passwordText += generateRandomUppercaserLetter();
        }
      }
      return passwordText;
    } else {
      alert(
        "Please correct it, no less than 8 character and no greater than 128"
      );
    }
  } else {
    alert("Please correct it, you must enter numeric values");
  }
}

/* TODO: Create functions to generate the characters needed for the password
 * 1. a function that returns a random special character
 * 2. a function that returns a random number (0 - 9)
 * 3. a function that returns a random lowercase letter
 * 4. a function that returns a random upppercase letter
 */

function generateSpecialCharacter() {
  // store characters
  let specialChars = '!@#$%^&*()_+{}|:"<>?';

  // get random number
  let randNum = Math.floor(Math.random() * specialChars.length);

  // return charArr[randomNum]
  return specialChars[randNum];
}

function generateRandumNumber() {
  return Math.floor(Math.random() * 9);
}

let letters = "abcdefghijklmnopqrstuvwxyz";
function generateRandomLowercaserLetter() {
  let randNum = Math.floor(Math.random() * letters.length);
  return letters[randNum];
}

function generateRandomUppercaserLetter() {
  let uppercase = letters.toUpperCase();
  let randNum = Math.floor(Math.random() * uppercase.length);
  return uppercase[randNum];
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  document.querySelector("#password").innerHTML = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
