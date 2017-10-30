var a = 3;
var b = 1;
var value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value >= 1) {
    console.log('wynik dodatni');
} else if (value <= -1) {
    console.log('wynik ujemny');
} else if (value == 0) {
    console.log('wynik = 0');
}


