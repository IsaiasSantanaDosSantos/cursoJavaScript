//Curso JavaScript - Aula 43
//Slider em JavaScript

var imgs = []
var slider;
var imgAtual
var maxImg
var tmp
var tempoTroca

function preCarregamento() {
    var s = 1
    for(var i=0; i<5; i++) {
    imgs[i] = new Image()
    imgs[i].src="img/s"+s+".jpg"
    s++
}
}


function carregarImg(img) {
    slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function inicia() {
    preCarregamento()
    imgAtual = 0
    maxImg=imgs.length-1
    slider=document.getElementById("dvslider")
    carregarImg(imgAtual)
    tempoTroca=4000
    tmp = setInterval(troca, tempoTroca)
}
 function troca() {
     imgAtual++
     if(imgAtual>maxImg) {
         imgAtual=0
     }
     carregarImg(imgAtual)
 }

 function mudarProxima() {
     var proxima = document.getElementById('direita')
     proxima.addEventListener('click', troca)
 }

 /*
 Não conseguo fazer o botão de rertonar ao slider anterior
 function mudarAnterior() {
     var anterior = document.getElementById('esquerda')
     anterior.addEventListener('click', voltarImg)
 }


    function voltarImg() {
        if(imgAtual) {
            imgs[0]
        }
    
    
    }

*/


window.addEventListener('load', inicia) //Qunado iniciar a página





