/**
 * Created by kozy on 31/03/16.
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var words=[
    "gather","tested",
    "lick",
    "relieved",
    "ossified",
    "ashamed",
    "macho",
    "expert",
    "hop",
    "appliance",
    "tough",
    "cheer",
    "omniscient",
    "wall",
    "guiltless"];

var randomIndex=getRandomInt(0,14);
var word=words[randomIndex];
var wordLength = word.length;

var hiddenword='';

for(var i=0;i<word.length;i++){
    hiddenword=hiddenword+ '*';
}
var tries=0;
var triedCharacters=[];
var character=prompt('Type a a character for the hidden word (' + hiddenword + '), word has a length or ' + wordLength + ' characters');
triedCharacters.push(character);
while (hiddenword.indexOf('*')!=-1) {
    tries++;
    var charIndexes = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i] === character) charIndexes.push(i);
    }

    for (var i = 0; i < charIndexes.length; i++) {
        hiddenword = hiddenword.substr(0, charIndexes[i]) + character + hiddenword.substr(charIndexes[i] + 1);
    }
    if (hiddenword.indexOf('*') != -1) {
        character = prompt('Type a a character for the hidden word (' + hiddenword + '), word has a length or ' + wordLength + ' characters');
    }
    if(triedCharacters.indexOf(character) == -1) {
        triedCharacters.push(character);
    }
}

console.log('User tried ' + tries + ' times');
console.log('User tried this characters ' + triedCharacters );

