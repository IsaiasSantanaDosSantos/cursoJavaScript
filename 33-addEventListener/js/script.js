//Curso JavaScript - Aula 33
//addEventListener - (Eventos)


//Função para quando clicar no quadrado vermelho aparece um alert na página
function msg() {
    alert('CFB Cursos')
}


//Mudar de cor ao passar o mouse dentro
function cor1(){
obj.style.backgroundColor="#fff"
}


//Mudar de cor ao sair com o mouse de dentro
function cor2(){
    obj.style.backgroundColor="blue"
    }


//Chamado função para o elemento
var obj = document.getElementById('dv1')
obj.addEventListener('click', msg)
obj.addEventListener('mouseover', cor1)
obj.addEventListener('mouseout', cor2)




