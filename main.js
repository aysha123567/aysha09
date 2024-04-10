
function somar()    {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado = document.getElementById("res");
    num1 = Number(num1)
    num2 = Number(num2)
    resu = num1 + num2
    resultado.innerHTML = (`o resultado da soma entre ${num1} + ${num2} é: ${resu}`);

 }
  //variaveis,write  e concatenaçao
  var nome=window.prompt('qual seu nome?') // var guarda o nome
  document.write(`olá ${nome}. seu nome tem ${nome.lenght} letras <br>`)
  document.write(`olá ${nome}. seu nome tem ${nome.toLowerCase} letras <br>`)
  document.write(`olá ${nome}. seu nome tem ${nome.toLowerCase} letras <br>`)

  //organizar numeros 
  var n1 = 21.98563

  n1.toFixed(2) //quantidade de numeros apos a vírgula
  window.alert(n1.toFixed(2) . replace('.','.'))
  

  
    