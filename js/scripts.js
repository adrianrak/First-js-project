
var ignored = ['#js-span1', '#js-span5'];

    var span = $('span');
// for (var span = 0 ; span < 3 ; span++) {
//     $(span).css('color', 'red');
// }   

// console.log(ignored);
// function red() {
//     $(span).css('color', 'red');
// }
// red();
span.each(function(index, element) {
    if (index == ['#js-span1']) {
        $(element).css('color', 'red');
    }
});


/*var span = $('span');
span.each(function(index, element) {
    if (index % 2 === 0) {
        $(element).css('color', 'red');
    };
});*/
    // or $("span:even").css('color', 'red');

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

$('button').click(function() {
    alert($(this).attr('data-tmp'));
});