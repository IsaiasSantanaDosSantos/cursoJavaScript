//Curso JavaScript - Aula 30
//Funções - Criando suas próprias funções

//Uma função bem simples
function escreve() {
    document.write("FUNÇÃO SIMPLES<br><br>Curso de JavaScript - CFB Cursos<br><br><hr><br>")
}


escreve()

//Função com parâmetros
document.write("FUNÇÕES COM PARÂMETROS<br><br>")
function soma(n1, n2) {
      var res = n1 + n2
      document.write(res + "<br>")
}

soma(5, 2)
soma(10, 20)
soma(0, 1)

document.write("<br><hr><br>")

//Funções que retorne os valores
document.write("FUNÇÕES QUE RETORNAM VALORES<br><br>")
function retorna(n1, n2) {
    return n1 + n2
}
var res = retorna(3, 8)
document.write(res) //É preciso o método write para retornar o valor

document.write("<br><hr><br>")


//Função com Array
document.write("FUNÇÃO COM ARRAY<br><br>")
var numeros = [10,2,5,30,25,19,20,50,40,120]

function media(nums) {
     var tam = nums.length
     var total = 0
     for (var i =0; i < tam; i++){
         total +=nums[i]
     }
     return Math.round(total/tam)
}
document.write(media(numeros))


document.write("<br><hr><br>")