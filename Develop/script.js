// Assignment code here
function generatePassword () {
  console.log ("is it working?");

// 1. Need to do promt//
var generatePassword = prompt("how many Characters would you like your password to conain?");

var generatePassword = prompt ("Click ok to Confirm including special characters"); { 
console.log("working");
};

var generatePassword = prompt ("Click ok to Confirm including numberic characters"); { 
  console.log("working");
  };

  var generatePassword = prompt ("Click ok to Confirm including lowercase characters"); { 
    console.log("working");
    };
    
    var generatePassword = prompt ("Click ok to Confirm including uppercase characters"); { 
      console.log("working");
      };

// A. Need to make password length between 8 and 28//
// B. lowercase uppercase numbers special characters//

// 2. need to validate input at least one character is selceted//

// 3. Generate password//



// 4. Display password to the page  

return "look at this" ;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    