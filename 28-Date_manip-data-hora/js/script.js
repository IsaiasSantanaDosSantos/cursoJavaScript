//Curso JavaScript - Aula 28
//Date() - Manipulando data e hora

var dt = new Date() //Pega data e hora atuais

var ndt = new Date()//Posso usar como parâmetro do Date() (Ano,Mês,Dia,Hora,Min,Seg,Milseg)

ndt.setHours(dt.getDate()+1) //Adicionar ou subtrair dias, anos, horas... (Nesse caso adicionei + 1 hora na data atual)

var diaSem = ndt.getDay() //Pega dia da semana (em forma de indece)
var dia = ndt.getDate() //Pega dia atual
var mes = ndt.getMonth() //Pega o mês atual (em forma de indece)
var ano = ndt.getFullYear() //Pega o ano atual

var horas = ndt.getHours() //Pega hora atual
var minutos = ndt.getMinutes() //Pega os minutos atuais
var segundos = ndt.getSeconds() //Pega os segundos atuais

var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

var semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']


document.write(semana[diaSem] +", "+ dia + " de " + meses[mes] + " de " + ano + "<br>") //Data completa
document.write(horas + ":" + minutos + ":" + segundos)
