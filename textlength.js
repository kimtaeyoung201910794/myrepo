function counter() {
var content = document.getElementById('jasosel').value;
if (content.length > 200) {
    content = content.substring(0,200);
    document.getElementById('jasosel').value = content;

}

document.getElementById('count').innerHTML = '(' + content.length + '/200)'
}
counter();