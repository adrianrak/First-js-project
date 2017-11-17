function Phone(brand, price, color, warranty) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.warranty = price / 10;
}
Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.' + ' Cost of extended warranty: ' + this.warranty);
}
var samsungGalaxyS6 = new Phone('Samsung', 1200, 'black');
var iPhone6S = new Phone('Apple', 2250, 'silver');
var onePlusOne = new Phone('OnePlus', 1800, 'white');

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

//Proszę dorób jeszcze wyświetlanie ceny przedłużonej gwarancji, która równa jest 10% ceny telefonu. 
//Stwórz do tego metodę getWarrantyCost(), którą użyjesz potem w printInfo()