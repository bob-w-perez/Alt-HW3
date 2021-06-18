// Assignment Code
var generateBtn = document.querySelector("#generate");

var generateBtn = document.querySelector("#generate");
var lowerLetters = [ 'a','b','c','d','e','f','g','h','i','j',
                    'k','l','m','n','o','p','q','r',
                  's','t','u','v','w','x','y','z' ];

var upperLetters = [];

for (i=0; i < lowerLetters.length; i++) {
    upperLetters.push(lowerLetters[i].toUpperCase())
}


var numList = ['1','2','3','4','5','6','7','8','9','0'];

var specChars = [' ', '!','"','#','$','%','&',"'",'(',')','*','+',',','-',
                  '.','/',':',';','<','=','>','?','@','[', '\\',  
                  ']', '^','_','`','{','|','}','~'];

var passOptions = [];
var passCheck = [];
var madePassword = "";        
                  
var subBtn = document.getElementById("sub-but")


function generatePassword (event){
  passOptions = [];
  passCheck = [];

  var passLen = document.getElementById("pass-len").value
  
  
  if (!passLen) {
    return;
  }
  if (passLen == undefined ) {
    return;
  }
  
  
  passLen = Number(passLen)
  

    if (document.getElementById("lowercase").checked){
      passOptions = passOptions.concat(lowerLetters);
      passCheck.push(lowerLetters);
    }
    if (document.getElementById("uppercase").checked){
      passOptions = passOptions.concat(upperLetters);
      passCheck.push(upperLetters);
    }
    if (document.getElementById("numeric").checked){
      passOptions = passOptions.concat(numList);
      passCheck.push(numList);
    }
    if (document.getElementById("spec-char").checked){
      passOptions = passOptions.concat(specChars);
      passCheck.push(specChars);
    }
    if (passOptions.length == 0) {
      alert("You must select at least one character type. Please try again.");
      return;
    }
    if (passLen < 8 || passLen > 128) {
      alert("Password length must be between 8 and 128. Please try again.");
      return;
    }

    for (i = 0; i < passLen; i++) {
      madePassword = madePassword.concat(passOptions[Math.floor(Math.random()*passOptions.length)]);
    }

    makePassword(passLen);

};

function findCommonElements(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

function makePassword(passLen) {
  var newLen = passLen;
  madePassword = "";
  for (i = 0; i < passLen; i++) {
    madePassword = madePassword.concat(passOptions[Math.floor(Math.random()*passOptions.length)]);
  }
  
  console.log(madePassword)

  for (i = 0; i < passCheck.length; i++){
    if(!findCommonElements(madePassword.split(''), passCheck[i])){
        makePassword(newLen);
        return;
    }
  }
  writePassword(madePassword);
}

function layoutChange () {
  var pBox = document.getElementById("password");
  var cBox = document.getElementById("hide-div");
  pBox.style.display = 'none';
  cBox.style.display = 'block';
  return;
}
function layoutChangeBack () {
  var pBox = document.getElementById("password");
  var cBox = document.getElementById("hide-div");
  pBox.style.display = 'block';
  cBox.style.display = 'none';
  return;
}

// Write password to the #password input
function writePassword(madePassword) {
  
  layoutChangeBack()
  var passwordText = document.querySelector("#password");

  passwordText.value = madePassword;   
}

generateBtn.addEventListener("click", layoutChange);
subBtn.addEventListener("click", generatePassword);
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

