function mostrar()
{
var numeroUno;
var numeroDos;
numeroUno = prompt("Ingrese numero uno");
numeroDos = prompt("Ingrese numero dos");
	if (numeroUno == numeroDos){
		cuenta = numeroUno + numeroDos;
		alert ("Numero concatenados "+ cuenta);
	}
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	if (numeroUno > numeroDos){
		cuenta = numeroUno / numeroDos;
		alert ("La division es de "+ cuenta);
	}
	else {
		cuenta = numeroUno + numeroDos;
		if (cuenta < 50){
			alert ("La suma es "+ cuenta + " y es menor a 50");
		}
	}
	
}
