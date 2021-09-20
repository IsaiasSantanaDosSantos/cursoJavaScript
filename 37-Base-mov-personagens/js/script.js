//Curso JavaScript - Aula 37
//Base para movimentação de personagens em games


//Variáveis globais
var dx  //Direção x
var dy  //Direção y
var px  //Posição x
var py  //Posição y
var vel //Velocidade
var obj //Objeto movimentado
var tmp //Tempo

function  inicia(){
    dx = 0
    dy = 0
    px = 0
    py = 0
    vel = 1
    obj = document.getElementById('dv1')
    document.addEventListener('keydown', teclaDw) //Tecla pressionada
    document.addEventListener('keyup', teclaUp)   //Tecla liberada
    tmp = setInterval(enterFrame, 1)
}

function teclaDw() {
    var tecla =event.keyCode
    if(tecla==37) {
        dx =-1
    } else if (tecla==38) {
        dy=-1
    } else if(tecla==39){
        dx=1
    } else if(tecla==40) {
        dy=1
    }
}

function teclaUp() {
    var tecla =event.keyCode
    if(tecla==37) {
        dx =0   //Tudo '0' para parar de deslocar 
    } else if (tecla==38) {
        dy=0
    } else if(tecla==39){
        dx=0
    } else if(tecla==40) {
        dy=0
    }
}

function enterFrame() {
    px+=dx*vel
    py+=dy*vel
    obj.style.left=px+"px"
    obj.style.top=py+"px"
}

window.addEventListener('load', inicia)