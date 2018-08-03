function mostrar()
{
var numero;
var contador;
var numerosPares = 0;
numero = prompt("Ingrese el numero");
console.log("los numeros pares son: ")
	for (contador=1;contador!=numero;contador++){
		if (contador%2==0){
			numerosPares = numerosPares + 1;
			console.log(contador)
		}
	}
	alert("La cantidad de numeros pares es de: "+ numerosPares);
}//FIN DE LA FUNCIÓN