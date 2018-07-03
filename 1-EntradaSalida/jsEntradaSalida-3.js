/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;
	// Se trae el elemento con un valor, el cual se guarda en Nombre, luego se imprime
	// document.getElementById Forma de traer un elemento 
	// get + tab + Shift i 
	alert (nombre);
}