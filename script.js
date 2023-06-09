var generateBtn = document.querySelector("#generate");

//* User input */
function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Did you forget a number?");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("password has to be 8 characters");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("pw has to be less than 128 characters");
    return false;
  }
  return true;
}

// random char  */
function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

// #password input */

/* if and else section*/
function generatePassword() {
  var userNumCharacters = prompt(
    "How many characters would you like your password to be? Pick a number between 8-128."
  );
  /* Confirm area */
  var passwordValid = getPasswordOptions(userNumCharacters);
  if (passwordValid) {
    var hasSpecialChar = confirm(
      "This will include special characters in password?"
    );
    var hasNumbers = confirm("This will include numbers in password?");

    var hasLowerCase = confirm(
      "This will include lowercase characters in password?"
    );
    var hasUpperCase = confirm(
      "This will include uppercase characters in password?"
    );
  }
  //Sentence to check  */
  if (
    [hasSpecialChar, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  )
    //Array to store char into pw */
    var chosenChar = [];

  //  type of char to ensure used */
  var guaranteedChar = [];

  // add array to all char  */
  if (hasSpecialChar) {
    chosenChar = chosenChar.concat(specialChar);
    guaranteedChar.push(
      specialChar[Math.floor(Math.random() * specialChar.length)]
    );
  }
  if (hasNumbers) {
    chosenChar = chosenChar.concat(numbers);
    guaranteedChar.push(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
  if (hasLowerCase) {
    chosenChar = chosenChar.concat(lowerCase);
    guaranteedChar.push(
      lowerCase[
        Math.floor(Math.random() * lowerCase.length)
      ]
    );
  }
  if (hasUpperCase) {
    chosenChar = chosenChar.concat(upperCase);
    guaranteedChar.push(
      upperCase[
        Math.floor(Math.random() * upperCase.length)
      ]
    );
  }

  //*  pw loop */
  var randomChar = [];
  for (var i = 0; i < userNumCharacters; i++) {
    var index = Math.floor(Math.random() * chosenChar.length);
    randomChar.push(chosenChar[index]);
  }
   
  var replacedPosition = {};
  while (guaranteedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = guaranteedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}

// //* input pw */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// //  generate btn
generateBtn.addEventListener("click", writePassword);

// Array of  characters */
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "%", "*", "=", "?", ">", "<"];