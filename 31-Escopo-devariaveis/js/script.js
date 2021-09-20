//Curso JavaScript - Aula 31
//Escopo de variáveis

var nomeCor = "Vermelho"
var i

function cor() {
    var nomeCor = "Azul"
    document.write(nomeCor+'<br>')
}

cor()

document.write(nomeCor+'<br>')
for(i=0;i<10;i++){}

document.write(i+'<br>')


