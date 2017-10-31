function getTriangleArea(a, h) {
    if ( (a <= 0) && (h <= 0) ) {
        // console.log('Nieprawidłowe dane');
    } else {
        var result = a*h/2;
        return result;
    }  
}
console.log( getTriangleArea(10, 6) );
console.log( getTriangleArea(0, 0) );
console.log( getTriangleArea(5, 4) );