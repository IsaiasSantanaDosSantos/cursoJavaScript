//Curso JavaScript - Aula 45
//Manipulando atributos Html com JavaScript


function trocaCarro(c) {
    var obj = document.getElementById("carro")
    if (c==1) {
        obj.setAttribute("class", "c1")
    } else if (c==2){
        obj.setAttribute("class", "c2")
    }  else if (c==3){
        obj.setAttribute("class", "c3")
    } 
}

function removerCarro() {
    var obj = document.getElementById("carro")
    obj.removeAttribute("class")
}

function verifica(){
    var obj = document.getElementById("carro")
    if(obj.hasAttribute("class")){
        alert("Atributo class está na tag")
    } else {
        alert("Sem atributo class")
    }
}
//MOVIMENTAÇÂO

//Variáveis globais
var dx  //Direção x
var dy  //Direção y
var px  //Posição x
var py  //Posição y
var vel //Velocidade
var obj1 //Objeto movimentado
var tmp //Tempo

function  inicia(){
    dx = 0
    dy = 0
    px = 0
    py = 0
    vel = 1
    obj1 = document.querySelector('#carro')[0]
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
    obj1.style.left=px+"px"
    obj1.style.top=py+"px"
}

window.addEventListener('load', inicia)