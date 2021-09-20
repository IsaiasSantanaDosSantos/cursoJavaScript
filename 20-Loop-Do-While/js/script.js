//Curso JavaScript - Aula 20
//Comando de loop do while

//Esse bloco não será executado, pois o num já inicia maior que 10
var num = 15
while (num<10) { //Essa condição já inicia falsa
    document.write(num + "ª vez<br>")
    num++
}

document.write("<br>" + "<hr>" + "<br>")

//Exemplo com Do
var n = 15
do{ //O Do é bom quando não sabemos quantas vezes vai ser executado e precisamos executar pelo menos uma vez
    document.write(n + "ª vez<br>")
    n++
} while (n<10) //Com o do, mesmo o while sendo falso, o bloco do Do é executado pelo menos uma vez
