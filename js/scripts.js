
var ignored = ['js-span1', 'js-span4'];

var span = $('span');
span.each(function(index, element) {
    var foundIgnored = ignored.indexOf(element.id);
    
    if (foundIgnored === -1) {
        $(element).css('color', 'red');
    };
});


var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(button);
});

$('button').click(function() {
    alert($(this).attr('data-tmp'));
});