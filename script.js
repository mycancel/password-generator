// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  
  var input;
  input = parseInt(prompt("How many characters will be in your password?"));
  console.log(input);

  if (input >= 8 && input <= 128) {
    // Code in this portion of the template is my contribution.
    // Variable acceptedCharacters will hold the possible character options for the desired password.
    var acceptedCharacters = ""

    // Confirmation prompts for each character type.
    var promptLower = confirm("Will your password include lowercase letters?");
    console.log(promptLower);

    var promptUpper = confirm ("Will your password include uppercase letters?");
    console.log(promptUpper);

    var promptNum = confirm ("Will your password include numbers?");
    console.log(promptNum);

    var promptSpecial = confirm ("Will your password include special characters?");
    console.log(promptSpecial);

    // If the user confirms the character type, the associated variable string is added to the acceptedCharacter string.
    if (promptLower == true) {
      acceptedCharacters = acceptedCharacters.concat(lowercase);
      console.log(acceptedCharacters);
    } 

    if (promptUpper == true) {
      acceptedCharacters = acceptedCharacters.concat(uppercase);
      console.log(acceptedCharacters);
    } 

    if (promptNum == true) {
      acceptedCharacters = acceptedCharacters.concat(numbers);
      console.log(acceptedCharacters);
    } 

    if (promptSpecial == true) {
      acceptedCharacters = acceptedCharacters.concat(special);
      console.log(acceptedCharacters);
    } 

    // If no character type is selected, an alert is given and the user will be prompted again.
    if (promptLower == false && promptUpper == false && promptNum == false && promptSpecial == false){
      alert("At least one character type must be selected. \nPlease try again.");
      return "";
    } else {
      // However, if at least one of the character types are selected, the password is created using those selected types.
      // Variable passDraft will hold the password created by the randomizer.
      var passDraft = ""
      // For each character in the password, a random character is selected from the acceptedCharacter list and added to passDraft until the length inputed by the user is reached.
      for (var i=0; i < input; i ++) {
        var random = Math.floor(Math.random() * acceptedCharacters.length);
        passDraft = passDraft + acceptedCharacters.slice(random,(random + 1));
        console.log(passDraft);
      }
    }

  } else {
    alert("Password length must a number between 8 and 128 characters. \nPlease try again.");
    return "";
  }

  // Variable passDraft is returned by the function to be written using writePassword().
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


