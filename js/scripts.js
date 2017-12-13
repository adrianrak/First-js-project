// 1
const hello = 'Hello';
const world = 'World';

const helloWorld = `${hello} ${world}`;
console.log('zad 1: ' + helloWorld);

//2
const multiply = (a, b = 1) => a * b;

console.log('zad 2 przykład 1: ' + multiply(5, 3));
console.log('zad 2 przykład 2: ' + multiply(6, 5));
console.log('zad 2 przykład 3: ' + multiply(4));

//3
const average = ( ...args) => args.reduce((a, b) => a + b) / args.length;

console.log('zad 3 przykład 1: ' + average(5, 6));
console.log('zad 3 przykład 2: ' + average(5, 6, 4, 3, 2));

//4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log('zad 4: ' + average(...grades));

//5

const table = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, ,lastName] = table;

console.log('zad 5: ' + `${firstName} ${lastName}`);