//Curso JavaScript - Aula 35
//setTimeout e setInterval

var tmp //Variável global (sem o valor), para as funções poder acha-lá


//Função para mudar cor do elemento aleatóriamente
function mudaCor() {
    var obj = document.getElementById('dv1')
    var r =  Math.floor(Math.random()*255)
    var g =  Math.floor(Math.random()*255)
    var b =  Math.floor(Math.random()*255)
    obj.style.backgroundColor ="rgb("+ r +","+ g +","+ b +")"
}


function iniciar() {
    tmp = setInterval(mudaCor, 1000) //Chama a cada 1000 milesegundo (1 segundo)
}

function parar() {
    clearInterval(tmp)
}

//Chamando o botão e adicionando evento de 'click'
document.getElementById('bt1').addEventListener('click', iniciar)
document.getElementById('bt2').addEventListener('click', parar)

//var tmp = setTimeout(mudaCor, 1000) //Chama apenas uma vez

