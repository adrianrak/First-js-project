var drawTree = 7; 
for (var i = 1 ; i <= drawTree ; i++) {
    var star = ''; 
    for (var j = drawTree - 1 ; j >= i ; --j) {
        var star = star += ' ';
    }
    for (var j = 1 ; j <= (2 * i - 1) ; j++) {
        var star = star += '*';     
    } 
console.log(star);
}
    
