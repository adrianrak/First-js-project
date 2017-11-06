function drawTree(line) { 
    for (var i = 1 ; i <= line ; i++) {
        var star = ''; 
        for (var j = line - 1 ; j >= i ; --j) {
            var star = star += ' ';
        }
        for (var j = 1 ; j <= (2 * i - 1) ; j++) {
            var star = star += '*';     
        } 
    console.log(star);
    }
}
drawTree(30);