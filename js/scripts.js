var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var addList = document.getElementsByTagName('li');
    
    if (addList.length >= 0 && addList.length%2 == 0) {
        element.innerHTML = ('item ' +  addList.length).fontcolor("red");
    } else {
        element.innerHTML = 'item ' +  addList.length;
    }

    list.appendChild(element);
});
