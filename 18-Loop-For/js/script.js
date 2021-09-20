//Curso JavaScript - Aula 18
//Comando de loop for

/*
var num = []



for (cont = 0; cont < 5; cont++) { 
    //1º parâmetro = Valor da variável
    //2º parâmetro = Condição 
    //3º parâmetro = Incremento

    num.push(prompt('Digite um número: ', ""))
}

for (cont = 0; cont < 5; cont++) { 
     //1º parâmetro = Valor da variável
     //2º parâmetro = Condição 
     //3º parâmetro = Incremento

     document.write(num[cont] + '<br>')
     //Irá imprimir 5 vezes na tela
}
*/

//OUTRO EXEMPLO DE LOOP FOR
var mochila = [
    ["Corda",1],
    ["Cura",10], 
    ["Lanterna", 1], 
    ["Pilhas", 20]
]



for (var l = 0; l < 4; l++) { 
    //1º parâmetro = Valor da variável
    //2º parâmetro = Condição 
    //3º parâmetro = Incremento
    
    for (var c = 0; c < 2; c++) {
        //1º parâmetro = Valor da variável
        //2º parâmetro = Condição 
        //3º parâmetro = Incremento

        document.write(mochila[l][c] + " ")
    }
    document.write('<br>')
}