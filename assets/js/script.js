// Assignment code here
function generatePassword() {

  // Password Length
  var passwordLength = parseInt(window.prompt("Enter Password Length (8-128 Characters", ""), 10);
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  var passwordLength = parseInt(window.prompt("Enter Password Length (8-128 Characters", ""), 10);
  } 
  
  // Included Character Prompts
  var upperCaseConfirm = window.confirm("Would you like to use Uppercase Letters?")    
  var lowerCaseConfirm = window.confirm("Would you like to use Lowercase Letters?")    
  var numbersConfirm = window.confirm("Would you like to use Numbers?")
  var specialCharConfirm = window.confirm("Would you like to use Special Characters?")    
  
  // Character Arrays
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const specialChar = "\"\'\@\\!#$%()*+,-./:;<>=?[]^_~{|}`"

  // If Statements for Character Prompts
    if (upperCaseConfirm && lowerCaseConfirm && numbersConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (upperCase + lowerCase + numbers + specialChar)[Math.floor(Math.random() * (upperCase.length + lowerCase.length + numbers.length + specialChar.length))]
        return character
      }
    } else if (lowerCaseConfirm && numbersConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (lowerCase + numbers + specialChar)[Math.floor(Math.random() * (lowerCase.length + numbers.length + specialChar.length))]
        return character
      }
    } else if (upperCaseConfirm && lowerCaseConfirm && numbersConfirm){
      var randomCharacter = function() {
        var character = (upperCase + lowerCase + numbers)[Math.floor(Math.random() * (upperCase.length + lowerCase.length + numbers.length))]
        return character
      }  
    } else if (upperCaseConfirm && numbersConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (upperCase + numbers + specialChar)[Math.floor(Math.random() * (upperCase.length + numbers.length + specialChar.length))]
        return character
      }
    } else if (lowerCaseConfirm && upperCaseConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (lowerCase + upperCase + specialChar)[Math.floor(Math.random() * (lowerCase.length + upperCase.length + specialChar.length))]
        return character
      }
    } else if (upperCaseConfirm && lowerCaseConfirm){
      var randomCharacter = function() {
        var character = (upperCase + lowerCase)[Math.floor(Math.random() * (upperCase.length + lowerCase.length))]
        return character
      }
    } else if (numbersConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (numbers + specialChar)[Math.floor(Math.random() * (numbers.length + specialChar.length))]
        return character
      }
    } else if (lowerCaseConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (lowerCase + specialChar)[Math.floor(Math.random() * (lowerCase.length + specialChar.length))]
        return character
      }
    } else if (lowerCaseConfirm && numbersConfirm){
      var randomCharacter = function() {
        var character = (lowerCase + numbers)[Math.floor(Math.random() * (lowerCase.length + numbers.length))]
        return character
      }
    } else if (upperCaseConfirm && numbersConfirm){
      var randomCharacter = function() {
        var character = (upperCase + numbers)[Math.floor(Math.random() * (upperCase.length + numbers.length))]
        return character
      }
    } else if (upperCaseConfirm && specialCharConfirm){
      var randomCharacter = function() {
        var character = (upperCase + specialChar)[Math.floor(Math.random() * (upperCase.length + specialChar.length))]
        return character
      }
    } else if (upperCaseConfirm){
      var randomCharacter = function() {
        var character = (upperCase)[Math.floor(Math.random() * (upperCase.length))]
        return character
      }
    } else if (lowerCaseConfirm){
      var randomCharacter = function() {
        var character = (lowerCase)[Math.floor(Math.random() * (lowerCase.length))]
        return character
      }
    } else if (numbersConfirm){
      var randomCharacter = function() {
        var character = (numbers)[Math.floor(Math.random() * (numbers.length))]
        return character
      }
    } else if (specialCharConfirm){
      var randomCharacter = function() {
        var character = (specialChar)[Math.floor(Math.random() * (specialChar.length))]
        return character
      }
    } else {
      generatePassword()
    }
    var randomPassword = ""
    for (var i = 0; i < passwordLength; i++) {
      randomPassword += randomCharacter();
    }
    return randomPassword
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
