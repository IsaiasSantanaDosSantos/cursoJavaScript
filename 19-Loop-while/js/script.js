//Curso JavaScript - Aula 19
//Comando de loop while

//EXEMPLO BLOCO DE CÓDIGO PARA TABOADA
var numero
var tb = 8 //window.prompt('Digite um número: ')
numero = 0
while (numero <= 10) {
    document.write(numero + " X " + tb + " = " + (numero*tb) + "<br>")
    numero++
}

document.write("<br>"+"<hr>"+"<br>")

//OUTRO EXEMPLO
var num

num = 0
while (num < 10) { //Usado quando não sabemos o número de repetições
    document.write(num + "<br>")
    num++
}

document.write("<br>"+"<hr>"+"<br>")

//OUTRO EXEMPLO CONTANDO DO MAIOR PARA O MENOR
var n 

n = 10
while(n--) {
    document.write(n + "<br>")
}

document.write("<br>"+"<hr>"+"<br>")

//OUTRO EXEMPLO CONTANDO while com if

var n2
var c //Contador
n2 = true
c = 0
while(n2) {
    document.write("Contador número "+ c + "ª<br>")
    c++
    if(c > 10) {
        n2 = false
        document.write("Acabou...")
    }
}

document.write("<br>"+"<hr>"+"<br>")