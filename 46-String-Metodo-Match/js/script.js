//Curso JavaScript - Aula 46
//String -método Math

var texto = document.getElementById("txt").innerHTML

var res = texto.match(/[^a]/ig) //O método Metch procura a string que está como parâmentro na variável que está antes do match



document.write(res + "; " + res.length +"<br")

//Exemplos de pesquisas do método match:
//[abcd] → retorna os caracteres "a", "b", "c" e "d";
//[^ab]  → retorna todos os caracteres existentes, menos os "a" e "b";
//[a-f]  → retorna os caracteres de "a" até "f";
//[^a-f] → retorna todos os caracteres existentes menos os que estão entre o "a" e "f";
//[a|f]  →retorna os caracteres "a" e "f", semelhante á primeira opção.

//Por padrão o javascript é Case sensitive (faz diferença de maiúscula e minúscula). O "i" desativa o Case Sensitive e o "g" pesquisa por todos os itens existentes.

//Existe também os métodos de Metacaratere