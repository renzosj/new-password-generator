// Variable Assignment Code
var generateBtn = document.querySelector("#generate");
const specialChars = " !@#$%^&*()_+}{][':;?\/><.,`~\"|-";

function generatePassword() {

  // Choose password length, 8 - 128 characters
  let passwordLength = parseInt(prompt("Password Length: Please choose a character count between 8 and 128"));
  
  //recode idea, set validity reqs into their own bools, then use one while loop
  // Checks if prompt input is a number 
  while (isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("Invalid input. Please choose a character count (number) between 8 and 128"));
  }
  // Checks if input is more than 8 but less than 128 characters
 while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid input. Please choose a character count between 8 and 128");
  }
  alert("Password length chosen: " + passwordLength);

  // Check for input validation, AT LEAST one of these should be true
  let noCharType = true;
  while (noCharType) {
    var incLowerCase = confirm("Would you like to include lowercase characters? (okay: yes) or (cancel: no)");
    var incUpperCase = confirm("Would you like to include uppercase characters? (okay: yes) or (cancel: no)");
    var incNumeric = confirm("Would you like to include numbers? (okay: yes) or (cancel: no)");
    var incSpecial = confirm("Would you like to include special characters? (okay: yes) or (cancel: no)");

    if (incLowerCase || incUpperCase) {
        noCharType = false;
    } else if (incNumeric || incSpecial) {
          noCharType = false; 
    } else {
          alert("No character criterion selected. Please confirm which character types you would like your new password generated with");
    }
  }

  // Display user char type preferences
  alert("Selected Criteria:\n" +
        "Include Lower Case: " + incLowerCase + "\n" +
        "Include Upper Case: " + incUpperCase + "\n" +
        "Include Numbers: " + incNumeric + "\n" +
        "Include Special Characters: " + incSpecial);
  alert("Generating password...")
    
  //Randomly select char types based on user preferences
  let password = "";
  let charSelect = "";
  let charType = "";
  for (var i = 0; i < passwordLength; i++) {
    charType = Math.floor(Math.random() * 4);
    switch (charType) {
      case 0: if (incLowerCase) {
        charSelect = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        break;
      }
      //if charType value refers to unwanted criterion, decrement i so the final char count matches set password length
      i--;
      break;
      case 1: if (incUpperCase) {
        charSelect = String.fromCharCode(Math.floor(Math.random() * 26) + 60);
        break;
      }   
      i--;
      break;
      case 2: if (incNumeric) {
        charSelect = Math.floor(Math.random() * 9);
        break;
      }
      i--;
      break;
      case 3: if (incSpecial) {
        charSelect = specialChars.charAt(Math.floor(Math.random() * 36));
        break;
      }
      i--;
      break;
    }
    //append selected chars onto password var
    password += charSelect;
    charSelect = "";
  }
  //return fully formed password
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
