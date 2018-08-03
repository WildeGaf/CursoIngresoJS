function mostrar()
{
var numero;
var contador;
var divisor = 0;
numero = prompt("Ingrese el numero");
console.log("los numeros divisibles son: ")
	for (contador=1;contador!=numero;contador++){
		if (numero%contador==0){
			divisor = divisor + 1;
			console.log(contador)
		}
	}
	alert("La cantidad de divisores es de: "+ divisor);
}//FIN DE LA FUNCIÓN