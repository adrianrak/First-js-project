var withBtnClass = document.getElementsByClassName('button');
console.log(withBtnClass);

for (var x = 0 ; x < withBtnClass.length ; x++ ) {
    var btn = withBtnClass[x].innerHTML;
    alert(btn);
}