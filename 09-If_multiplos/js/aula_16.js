//TRABALHANDO COM MATRIZ - ARRAY MULTIDIMENCIONAIS


var mochila = new Array() //lista/array

//Itens que vamos adicionar na lista recem criada
var item1 = ["Cordas", 2], item2 = ["Faca", 1], item3 = ["Cura", 5], item4 = ["Prego", 35]

//Adicionando itens na muchila(lista)
mochila.push(item1)
mochila.push(item2)
mochila.push(item3)
mochila.push(item4)

//Mostrará itens adicionado...
document.write(mochila[0][0] + "-" + mochila[0][1] +"<br>") 
document.write(mochila[1][0] + "-" + mochila[1][1] +"<br>")
document.write(mochila[2][0] + "-" + mochila[2][1] +"<br>")
document.write(mochila[3][0] + "-" + mochila[3][1] +"<br>")