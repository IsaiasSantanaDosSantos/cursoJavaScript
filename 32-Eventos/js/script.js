//Curso JavaScript - Aula 32
//Eventos

function mudarCor(obj, cor){
    obj.style.backgroundColor=cor;
}

//função para mudar o elemento de posição, no caso o botão
function mudaPos(obj) {
    obj.style.position="absolute"
    obj.style.left=Math.random()*500+"px" 
    obj.style.top=Math.random()*500+"px"
}


//Função para dar Bom dia, boa tarde ou boa noite ao entrar na página
function ola(){
    var data = new Date()
    var hora = data.getHours()
    var txt = " "
    if (hora < 12) {
        txt = "Bom dia!"
    } else if (hora < 18) {
        txt="Boa tarte!"
    } else {
        txt="Boa noite!"
    }
    alert('Ola! ' +txt)
}