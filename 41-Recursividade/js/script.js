//Curso JavaScript - Aula 41
//Recursividade
document.write("<br><hr><br> CONTADOR: <br>")
function contador(min, max) { //Valor mínimo e máximo
    document.write(min + "<br>")
    if (min < max){
        contador(++min,max) //Min com pré incrementado
    }
}

contador(0,12) //Chamando a função com os valores do parâmentros

document.write("<br><hr><br>FATORIAL:<br>")
function fatorial(n) {
    if (n == 1) {
        return 1
    }
    return n*fatorial(n -1)
}
document.write(fatorial(10))
document.write("<br><hr>")

var obj = document.getElementById("quad")
var ang = 0
var anima;
function gira(){
    obj.style.transform = "rotate("+ang+"deg)"
    ang++
    if (ang>360) {
        ang = 0
    }
    anima = requestAnimationFrame(gira)
}
gira();
