var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var addList = document.getElementsByTagName('li');
    element.innerHTML = 'item ' +  addList.length;
    list.appendChild(element);
});