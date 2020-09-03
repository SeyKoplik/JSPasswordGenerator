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

function generatePassword() {
  var pw = ""

  /* ALL CODE HERE */
/* Setting up variables to use for password generating. */
  var num = ['0123456789'];
  var lower = ['abcdefghijklmnopqrstuvwxyz'];
  var upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  var special = ['!@#$%^&*()'];

/* Prompting user to enter number of characters for password then setting a variable for length of password. */
  var pwLength = prompt("How many characters would you like for your password to be?");

/* Setting up to continue through next steps after correct parameters are inputed. */
  if (pwLength <= 128 && pwLength >= 8) {
    alert("Great! Lets get you a password!");


    var yesLower = confirm("Does it have to include lowercase letters?");

    var yesUpper = confirm("Does it have to include uppercase letters?");

    var yesNum = confirm("Does it have to include numbers?");

    var yesSpec = confirm("Does it have to include special characters?");

    var characters = '';
    if (yesLower) { characters += lower; } 
    if (yesUpper) { characters += upper; } 
    if (yesSpec) { characters += special; } 
    if (yesNum) { characters += num; } 


/* Loop will start to generate a random password*/  
    for (var i = 0; i < pwLength; i++) {
      pw += characters.charAt(Math.floor(Math.random() * characters.length));
    }

/* When user hit cancel for every option, no password will be generated, need to start over. */
    if (!yesLower && !yesNum && !yesSpec && !yesUpper) {
      alert("You must include some parameters please! \nClick the Generate Password Button again"); 
    }

/* If password is too short, user will get prompt and have to try again*/
  } else if (pwLength <= 7) {
    alert("Sorry! Number of characters must be greater than 8.");
    generatePassword();
/* If password is too long, user wll get prompt and have to try again*/
  } else {
    alert("Sorry! Number of characters must be less than 128.");
    generatePassword();
  }

  return pw
}