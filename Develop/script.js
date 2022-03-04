// Assignment code here
function generatePassword() {
    var upperCaseConfirm = window.confirm("Would you like to use Uppercase Letters?")
    if (upperCaseConfirm) {
      const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else {
      const upperCase = ""
    }
    var lowerCaseConfirm = window.confirm("Would you like to use Lowercase Letters?")
    if (lowerCaseConfirm) {
      const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    } else {
      const lowerCase = ""
    }
    var numbersConfirm = window.confirm("Would you like to use Numbers?")
    if (numbersConfirm) {
      const numbers = "0123456789"
    } else {
      const numbers = ""
    }
    var specialCharConfirm = window.confirm("Would you like to use Special Characters?")
    if (specialCharConfirm) {
      const specialChar = "\"\'\@\\!#$%()*+,-./:;<>=?[]^_~{|}`"
    } else {
      const specialChar = ""
    }

    
    var randomCharacter = function() {
      return (upperCase + lowerCase + numbers + specialChar)[Math.floor(Math.random() * (upperCase.length + lowerCase.length + numbers.length + specialChar.length))]
    }
    
      
    randomCharacter()
    return randomCharacter()

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
