let userDigits = [];
userDigits = prompt("Please input digits seperated by comma.");
document.write(userDigits);

var intoNumbers = [];

for (let i = 0; i < userDigits.length; i++){
    intoNumbers[i] = userDigits[i].Number();
    document.write(intoNumbers.reverse());

}











