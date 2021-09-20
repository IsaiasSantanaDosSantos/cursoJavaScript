
/*
let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()
let sec = data.getSeconds()
horaAtual = hora + ":" + min + ":" + sec
*/

/*
//Carregar a página a cada 1 secundo
setTimeout(function(){
    window.location.reload(1);
 }, 1000);


//Para carregar 
setInterval(horaAtual, 900)
*/


//Aula 10
/*
var nota = 70
var res

if (nota >= 60){
    res = "Aprovado "
    if (nota >= 95) {
        res += "com louvor"
    }else {
    res += "com nota normal"
    } 
} else if (nota >= 40) {
    res = "Recuperação"
} else {
    res = "Reprovado "
    if (nota >= 20) {
        res += "por nota baixa"
    }else {
    res += "com louvor"
    }
    
    } 

document.write(res)
*/
/*
//Aula 11 Blocos de comandos
 var num = 9

 if (num > 10) {
     res = 'Maior que 10'
 } else {
     res = "Menor que 10"
 }
  document.write(res)
  */

//Aula 12 - Estruturas Switch case

/*
var pos, msg
pos = 3

switch(pos) {
    case 1 :
        msg = "Primeiro lugar"
        break
    case 2 :
        msg = "Segundo lugar"
        break
    case 3 :
        msg = "Terceiro lugar"
        break
    default:
        msg = "Não alcançou posição"
}

document.write(msg)
*/
/*
//Aula 13 Array / Vetor - Parte 1

//var cor = new Array() //Também cria um array
var cor = []

//Inserindo elementos no Array 1º forma
/*
cor.push('Preto')
cor.push('Branco')
cor.push('Vermelho')
cor.push('Verde')
cor.push('Azul')
*/
/*
//Inserindo elementos no Array 2º forma
cor[0] = 'Preto' 
cor[1] = 'Branco'
cor[2] = 'Vermelho'
cor[3] = 'Verde' 
cor[4] = 'Azul'


//Chamando um elemento pelo indece do Array
//document.write(cor[3])


var itens = ["Faca", "Pederneira", "Corda", "Lanterna", "Luvas", "Chave", "Arame"]
*/
//var mochila = [], mochila1 = [], pos, mochila2 = []
//var num = [5,8,4,9,7,6,3,0,2,1]
/*
mochila1.push("Faca")
mochila1.push("Corda")
mochila1.push("Perdeneira")
mochila1.push("Chave")
mochila1.push("Lanterna")
mochila1.unshift("Pedra") //Inserir elemento no inicio
mochila1.push("Espada ")

mochila2.push("Arame")
mochila2.push("Luvas")
mochila2.push("Joelheira")
mochila2.push("Meias")
mochila2.push("Moeda")
mochila2.unshift("Canivete") 


//mochila.pop() //Remove o ultimo elemento do Array
//mochila.shift() //Remove o primeiro elemento do Array
//mochila.splice(2,1) //Remove elementos a escolha (Ex. .splice(2,3) a partir do indece 2, remove 3 elementos)
/*
document.write(mochila[0] + "<br>")
document.write(mochila[1] + "<br>")
document.write(mochila[2] + "<br>")
document.write(mochila[3] + "<br>")
document.write(mochila[4] + "<br>")
document.write(mochila[5] + "<br><br>")
*/
/*
mochila = mochila1.concat(mochila2) //Juntando os items de duas listas em uma diferente

document.write(mochila + '<br>')

pos = mochila.indexOf("Chave<br>")

document.write(mochila + '<br>')

mochila.splice(2,3)

document.write(mochila + '<br>')

if (pos < 0) { document.write("Item não está na mochila<br>") } else { document.write("Item está na mochila<br>Posição: "+ pos) }

document.write("Quantidade itens mochila: " + mochila.length + "<br>Quantidade itens mochila 1 : " + mochila1.length + "<br> Quantidade itens mochila 2: " + mochila2.length)
/*
var num = [5,8,4,9,7,6,3,0,2,1]
var numeros

numeros = num.join()

document.write(numeros + "<br><br>")

document.write(num[0] + "<br>")
document.write(num[1] + "<br>")
document.write(num[2] + "<br>")
document.write(num[3] + "<br>")
document.write(num[4] + "<br>")
document.write(num[5] + "<br>")
document.write(num[6] + "<br>")
document.write(num[7] + "<br>")
document.write(num[8] + "<br>")
document.write(num[9] + "<br><br>")

document.write(num + "<br>")

document.write(num.sort() + "<br>")

document.write(num.reverse() + "<br>")
*/