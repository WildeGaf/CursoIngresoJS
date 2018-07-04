/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt ("Ingrese su nombre");
	document.getElementById("elNombre").value = nombre;
	// Al utilizar el modo a la inversa, se toma el valor del document y se imprime
	
}

