var peso = prompt("Ingrese peso:");
var estatura = prompt("Ingrese estatura:");

function imc(peso,estatura){
  //ponga aqui la funcion
  var calcular;
  calcular = peso/estatura;

  return (peso == 0 && estatura == 0) ? alert("Error") : alert("El IMC es : " + calcular);
}
imc(peso,estatura);
