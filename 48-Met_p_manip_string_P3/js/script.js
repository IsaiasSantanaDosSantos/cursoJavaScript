//Curso JavaScript - Aula 48
//Método para manipular string - parte 3

//var texto1 = document.getElementById("txt").innerHTML;
//var texto2 = texto1;

// ## INDEXOF ##
/*
var res = texto1.indexOf("d") // Posição do PRIMEIRO elemento escolhido, no caso "J".



if (res < 0) {
    document.write("Letra não encontrada.") //Caso não encontre o elemento escolhido...
} else {
    document.write(res) //Sempre retorna a posição do primeiro elemento encontrado
}

if (res < 0) {
    document.write("Letra não encontrada.") //Caso não encontre o elemento escolhido...
} else {
    document.write(res) //Sempre retorna a posição do ULTIMO elemento encontrado
}
*/

// ## LASTINDEXOF ##
// var res = texto1.lastIndexOf("i") // Posição do ULTIMO elemento escolhido, no caso "J".

// ## LOCALECOMPARE ##
// var res = texto1.localeCompare(texto2)

//Se resultado == 0 significa que é iguais.
//Se resultado != 0 significa que é diferente.
/*
if (res == 0) {
    document.write("Strings iguais.") 
} else {
    document.write("Strings diferentes<br><hr>") 
}
*/

// ## Slice() ##
document.write("<strong>Método Slice()</strong><br>")

var texto = document.getElementById("txt").innerHTML;

var res = texto.slice(3,10); //Corta uma string de um ponto a outro escolhido.

document.write("<br>" + res + "<hr><br>")

// ## Método Split() ##
document.write("<strong>Método Split()</strong><br>")

var texto = document.getElementById("txt").innerHTML;

var resp = texto.split(" "); //Transforma a String em array e informa o elemento escolhido, nesse caso foi usado o espaço " " para ser divisor da string.

document.write("<br>" + resp[5] + "<hr><br>") //Retorna o elemento na posição "5".

// ## Método SBSTR() ##
document.write("<strong>Método SBSTR()<br></strong>(Pega o elemento apartir do indece indicado e quantos elementos indicados APARTIR DO INÍCIO DA STRING.)<br>")

var texto = document.getElementById("txt").innerHTML;

var respo = texto.substring(4,10); //Pega o elemento apartir do indece indicado e quantos elementos indicados APARTIR DO IÍCIO DA STRING.

document.write("<br>" + respo + "<hr><br>") //.

// ## Método toLawerCase() ##
//Transforma tudo em minúsculo
document.write("<strong>Método toLowerCase() </strong><br>(transforma tudo em minúscula)<br>")

var texto = document.getElementById("txt").innerHTML;

var respos = texto.toLocaleLowerCase(); //Pega o elemento apartir do indece indicado e quantos elementos indicados APARTIR DO IÍCIO DA STRING.

document.write("<br>" + respos + "<hr><br>");

// ## Método toUpperCase() ##
//Transforma tudo em minúsculo
document.write("<strong>Método toLowerCase() </strong><br>(transforma tudo em maiúscula)<br>")

var texto = document.getElementById("txt").innerHTML;

var respos = texto.toUpperCase(); //Pega o elemento apartir do indece indicado e quantos elementos indicados APARTIR DO IÍCIO DA STRING.
//Pode-se juntar vários métodos...

document.write("<br>" + respos + "<hr><br>");