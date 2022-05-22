// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Opens the first popup. Code inspired by Easy Tutorials Youtube video: https://youtu.be/AF6vGYIyV8M.
function openCharacter() {
  characterPopup.classList.add("popup-open");
  console.log("hello 1");
}
