//Curso JavaScript - Aula 34
//addEventListener - P2 (Keydown)

var px = 0 //horizontal posição x
var py = 0 //vertical posição y


//Forma de movimentar a dv1 nas 4 direções
function move() {
    var obj = document.getElementById("dv1") //Elemento a ser trabalhado
    var tecla = event.keyCode //Código tecla a ser precionada
    var obj

    //37-esquerda / 38-cima / 39-direita -/ 40 - baixo
    if(tecla==37) {
        px -=10
        obj.style.left=px+'px'
    } else if(tecla==38){
        py -=10
        obj.style.top=py+'px'
    } else if(tecla==39) {
        px+=10
        obj.style.left=px+'px'
    } else if (tecla==40) {
        py+=10
        obj.style.top=py+'px'
    } else if (tecla==13) { //Remover função
        obj.style.backgroundColor="green"
        alert("Evento Keydown removido")
        document.removeEventListener("keydown", move)
    }
}


function addClique(){
    document.addEventListener("keydown", move)
    obj.style.backgroundColor="red"
}


function iniciar() {
    obj = document.getElementById('dv1')
    obj.addEventListener('click', addClique)
}

window.addEventListener('load', iniciar)


/*
//Outra forma de movimentar a dv1 nas 4 direções
//Função anônima
document.addEventListener("keydown", function(event){ //Parâmetro de propriedade de passagem "event"
    var obj = document.getElementById("dv1") //Elemento a ser trabalhado
    var tecla = event.keyCode //Código tecla a ser precionada

    //37-esquerda / 38-cima / 39-direita -/ 40 - baixo
    if(tecla==37) {
        px -=10
        obj.style.left=px+'px'
    } else if(tecla==38){
        py -=10
        obj.style.top=py+'px'
    } else if(tecla==39) {
        px+=10
        obj.style.left=px+'px'
    } else if (tecla==40) {
        py+=10
        obj.style.top=py+'px'
    }
    

})
*/