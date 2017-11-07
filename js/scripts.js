var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var addList = document.getElementsByTagName('li');
    var innerElement = 'item ' +  addList.length;
    if (addList.length >= 0 && addList.length%2 == 0) {
        element.innerHTML = innerElement.fontcolor("red");
    } else {
        element.innerHTML = innerElement;
    }

    list.appendChild(element);
});
