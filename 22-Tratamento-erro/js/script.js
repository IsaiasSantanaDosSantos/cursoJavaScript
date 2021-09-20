//Curso JavaScript - Aula 22
//Tratamento de erros / try catch finally
var num
try { //Para tratamento de erros
    num = prompt("digite um valor: ")
    if (num > 10) {
        throw new Error("Valor inválido! O valor máximo é 10") //Mensagem de erro gerada
    }

}catch (e) { //O catch só será executado de o try for falso
    console.log("ERRO: "+ e.message) //Só mostrará a mensagem de erro gerada a cima no console
    num = 10 //Caso sejá digitado valor vaior que 10, será considerado o malor máximo que é 10.

    //console.log("Mensagem de erro: " + e.message)
} finally { //O finally sempre será executada

    document.write("Valor: " + num) //Essa variável num mostrará o valor digitado caso seja menor ou igual a 10, caso seja maior que 10, mostrará o valor máximo que é 10.
}




