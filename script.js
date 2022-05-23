// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  var input = parseInt(prompt("How many characters will be in your password?"));
  console.log(input);

  if (input >= 8 && input <= 128) {
    // Code in this portion of the template is my contribution.
    var promptLower= true;
    var promptLower = confirm("Will your password include lowercase letters?");
    console.log(promptLower);

  } else {
    alert("Password length must between 8 and 128 characters.");
    writePassword();
  }

  return "";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


