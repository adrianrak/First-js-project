var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    console.log('Powtórzone imię: ' + newName + '. Wpisz inne imię!');
}
console.log(allNames);