 // 8. Criar uma função que retorna a quantidade de caracteres
// de um texto qualquer.
// IMPORTANTE:  na contagem, não considere espaços em branco, como caracter!
 
 function caracteresDoTexto(texto) {
     texto = texto.replace(/\s/g, '');
     let tamanhoDoTexto = texto.length;
     console.log(tamanhoDoTexto);
 }
  caracteresDoTexto("Meu curso de js");