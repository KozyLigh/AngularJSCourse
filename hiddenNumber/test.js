/**
 * Created by kozy on 31/03/16.
 */
var minNumber=prompt('Type minimal number');
var maxNumber=prompt('Type max number');
var generatedRand=0;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(isNaN(minNumber)){
    alert(minNumber + ' is not a number!');
}
if(isNaN(maxNumber)){
    alert(maxNumber + ' is not a number!');
}
console.log(minNumber);
console.log(maxNumber);
generatedRand=getRandomInt(parseInt(minNumber), parseInt(maxNumber));

console.log('Number = ' + generatedRand);

var numbers=[];
var hint='low';
var xuserNumber=prompt('Find a number');
numbers.push(xuserNumber);
var userTry=1;
while (parseInt(xuserNumber) !== generatedRand && xuserNumber>= 0) {
    if(xuserNumber>generatedRand){
        console.log('high');
        hint='high';
    }else{
        console.log('to low');
        hint='low';
    }
    if(userTry!=1) {
        numbers.push(xuserNumber);
    }
    xuserNumber=prompt('Find a number, last one was too ' + hint + ', if you want to quit, just type -1');
    userTry++;
}
if(userTry!=1) {
    numbers.push(xuserNumber);
}
console.log('User tried the following numbers: ' + numbers);
console.log('User found the random number in ' + userTry + ' tries');

xuserNumber=prompt('Type a number between 1 and 100');

while(isNaN(xuserNumber) || xuserNumber <1 || xuserNumber >100 ){
    if (isNaN(xuserNumber)) {
        alert(xuserNumber + ' is not a number!');
    }
    if (xuserNumber <1 || xuserNumber >100 ) {
        alert(xuserNumber + ' is out of range!');
    }
    xuserNumber=prompt('Type a number between 1 and 100');
}
xuserNumber=parseInt(xuserNumber);
var minN=0;
var maxN=100;
var guess=0;
var compGuesses=[];
while (minN <= maxN) {
    guess = (minN + maxN) / 2 | 0;
    compGuesses.push(guess);
    if (guess == xuserNumber) {
        break;
    }
    else if (guess < xuserNumber) {
        minN = guess + 1;
    }
    else {
        maxN = guess - 1;
    }
}
console.log('Computer tried the following numbers: ' + compGuesses);
console.log('Computer found the random number in ' + compGuesses.length + ' tries');
