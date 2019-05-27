function hasUpperCase(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            return true;
        }
    }
}
  
function hasLowerCase(input) {
    for (var j = 0; j < input.length; j++) {
        if (input[j] === input[j].toLowerCase()) {
            return true;
        }
    }
}
  
function isLongEnough(input) {
    if (input.length >= 8) {
        return true;
    }
}

function hasSpecialCharacter(input) {
    var specialCharacters = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', ';', ':', '\'', '"', '\\', '|', ',', '<', '.', '>', '/', '?'];
    
    for (var k = 0; k < input.length; k++) {
        for (var l = 0; l < specialCharacters.length; l++) {
            if (input[k] === specialCharacters[l]) {
                return true;
            }
        }
    }
}

function hasNumber(input) {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    for (var m = 0; m < input.length; m++) {
        for (var n = 0; n < numbers.length; n++) {
            if (input[m] === numbers[n]) {
                return true;
            }
        }
    }
}

function isPasswordValid(input) {
    if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacter(input) && hasNumber(input)) {
        console.log("Your password is valid\n");
    } if (!hasUpperCase(input)) {
        console.log("Your password needs at least 1 capital letter\n");
    } if (!hasLowerCase(input)) {
        console.log("Your password needs at least one small letter\n");
    } if (!isLongEnough(input)) {
        console.log("Your password must be at least 8 characters long\n");
    } if (!hasSpecialCharacter(input)) {
        console.log("Your password needs at least 1 special character\n");
    } if (!hasNumber(input)) {
        console.log("Your password must have atleast 1 numeric character\n");
    }
}

var password = windowPrompt("Enter Your Password: ");
console.log('Validating Password: ' + password + "\n");
isPasswordValid(password);