document.write(document.getElementById('curso1').elements[0].value + " → antes do 'for'<br>")

var fm = document.forms[0]
var el = fm.elements

for (var i = 0; i < el.length -1; i++) {
    el[i].style.backgroundColor = "#ddd"
    el[i].value = "CFB Cursos"
}

document.write(document.getElementById('curso1').elements[0].value + " → Depois do 'for")


//document.write(fm)