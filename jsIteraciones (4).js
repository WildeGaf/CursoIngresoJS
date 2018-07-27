function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	while (numero<0 || numero>10){
		alert("Numero no valido")
		var numero = prompt("Ingrese otro numero")	
	}
document.getElementById('Numero').value = numero;	
}//FIN DE LA FUNCIÓN