var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var textChange = text.replace('Velociraptor', [dinosaurUpperCased]);

console.log(textChange.substr(0, textChange.length / 2));