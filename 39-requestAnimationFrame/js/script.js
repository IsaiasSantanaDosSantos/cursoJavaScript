//Curso JavaScript - Aula 39
//requestAnimationFrame


//Variáveis globais
var jog;
var vel; //Variável de velocidade
var dx;  //Variável de direção X
var dy;  //Variável de direção Y
var px;  //Variável de posição X
var py;  //Variável de posição Y
var anima;
var estado;


function inicia() {
    vel = 7
    dx = 1 //Direita valor positivo e esquerda valores negativos
    dy = 0
    px = 0
    py = 0
    estado = 1; // 1 = movendo - 0 = parada
    jog = document.getElementById("jogador");
    jog.addEventListener("click", moverParar);
    document.getElementById("btiniciar").addEventListener("click", mover);
    document.getElementById("btparar").addEventListener("click", parar);
    
    


   
    game(); //Chamar a função game
}

function moverParar() { //Função para Mover ou Parar
    if (estado) { //Se o estado for falso
        estado = 0 //Parar
        jog.style.backgroundColor = "#f00" //Mudar cor para vermelho
        cancelAnimationFrame(anima) //Cancelar animação
    } else {  //Se o estado for verdadeiro
        estado = 1 //Mover
        jog.style.backgroundColor = "#00f" //Mudar cor para azul
        anima = requestAnimationFrame(game) //Chamar função de animação
    }
}

function mover() { //Função para Mover ou Parar
    if (!estado) { //Se o estado for verdadeiro
        estado = 1 //Mover
        jog.style.backgroundColor = "#00f" //Mudar cor para azul
        anima = requestAnimationFrame(game) //Chamar função de animação
    } 
}

function parar() { //Função para Mover ou Parar
        estado = 0 //Parar
        jog.style.backgroundColor = "#f00" //Mudar cor para azul
        cancelAnimationFrame(anima) //Cancelar animação
    
}

function game() {
    px += dx * vel //px recebe px + dx * vel
    //py += dy * vel
    jog.style.left=px+"px"
    //jog.style.left=py+"px"
    if (px > 800) {
        dx= -1
    } else if (px < 0) {
        dx = 1
    }
    anima = requestAnimationFrame(game) //Iniciar função game
}

window.addEventListener("load", inicia) //Quanto a pagina for carregada, vai chamar a função Iniciar.