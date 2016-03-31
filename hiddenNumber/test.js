/**
 * Created by kozy on 31/03/16.
 */
var minNumber=prompt('Vpisi min stevilo');
var maxNumber=prompt('Vpisi max stevilo');
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

var stevila=[];
var hint='premala';
var xuserNumber=prompt('Ugotovi stevilko');
stevila.push(xuserNumber);
var userTry=1;
while (parseInt(xuserNumber) !== generatedRand && xuserNumber>= 0) {
    if(xuserNumber>generatedRand){
        console.log('preveliko');
        hint='prevelika';
    }else{
        console.log('premalo');
        hint='premala';
    }
    if(userTry!=1) {
        stevila.push(xuserNumber);
    }
    xuserNumber=prompt('Ugotovi stevilko, prejsnja je bila ' + hint);
    userTry++;
}
if(userTry!=1) {
    stevila.push(xuserNumber);
}
console.log('Uporabnik je tipkal: ' + stevila);
console.log('Uporabnik je lociral stevilko v ' + userTry + ' poizkusu');



