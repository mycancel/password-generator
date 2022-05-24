// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  
  var input = parseInt(prompt("How many characters will be in your password?"));
  console.log(input);

  if (input >= 8 && input <= 128) {
    // Code in this portion of the template is my contribution.
    var acceptedCharacters = ""

    var promptLower = confirm("Will your password include lowercase letters?");
    console.log(promptLower);
    
    if (promptLower == true) {
      acceptedCharacters = acceptedCharacters.concat(lowercase);
      console.log(acceptedCharacters);
    } 

    var promptUpper = confirm ("Will your password include uppercase letters?");
    console.log(promptUpper);

    if (promptUpper == true) {
          acceptedCharacters = acceptedCharacters.concat(uppercase);
          console.log(acceptedCharacters);
        } 

    var promptNum = confirm ("Will your password include numbers?");
    console.log(promptNum);

    if (promptNum == true) {
      acceptedCharacters = acceptedCharacters.concat(numbers);
      console.log(acceptedCharacters);
    } 

    var promptSpecial = confirm ("Will your password include special characters?");
    console.log(promptSpecial);

    if (promptSpecial == true) {
      acceptedCharacters = acceptedCharacters.concat(special);
      console.log(acceptedCharacters);
    } 

    if (promptLower == false && promptUpper == false && promptNum == false && promptSpecial == false){
      alert("At least one character type must be selected.");
      return writePassword();
    } else {
      var passDraft = ""
      for (var i=0; i < input; i ++) {
        var random = Math.floor(Math.random() * acceptedCharacters.length);
        passDraft = passDraft + acceptedCharacters.slice(random,(random + 1));
        console.log(passDraft);
      }
    }

  } else {
    alert("Password length must a number between 8 and 128 characters.");
    return writePassword();
  }

  return passDraft;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


