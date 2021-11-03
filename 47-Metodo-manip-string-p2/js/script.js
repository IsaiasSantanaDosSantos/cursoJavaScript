//Curso JavaScript - Aula 47
//Método para manipular string - parte 2

var texto = document.getElementById("txt").innerHTML
var txt2 = "Texto de teste"

var res = texto.search(/aula/i) //O método "search" procura a posição da primeira ocorrência da pesquisa
document.write("método search <br>" + res + "<br><hr>")

var res = texto.replace(/curso/ig, "aula") //O método "replace" substitui uma string por outra. Se tiver com apenas o "i", substituirá apenas o da 1º string, agora se tiver com o "g" será subistituido todos as string que existir
document.write("método replace <br>" + res + "<br><hr>")


var res = texto.charAt(23) //Retorna o caractere que está na posição indicada
document.write("método charAt <br>" + res + "<br><hr>")

var res = texto.charCodeAt(5) //Retorna o código relacionado ao caractere

document.write("método charCodeAt <br>" + res + "<br><hr>")

document.write("método charCodeAt <br>" + String.fromCharCode(67) + "<br><hr>")

var res = texto.concat(" - aula 46 do curso de javascript " + txt2)
document.write("método concat <br>" + res + "<br><hr>")

