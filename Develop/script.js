/* Password variable below */
/* button info and assignment code */
var generateBtn = document.querySelector("#generate");

//* User input */
function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Did you forget to put in a Number?");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("Reminder:password has to be at least 8  characters");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("Reminder:password has to be less than 128 characters");
    return false;
  }
  return true;
}

// Write password to the #password input
//* input for passwords */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
// //  generate btn
generateBtn.addEventListener("click", writePassword);

// Array of  characters */
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "*", "=", "?", ">", "<"];
