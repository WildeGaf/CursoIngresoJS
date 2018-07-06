/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var suma;
	var cuenta;
	sueldo = document.getElementById('sueldo').value;
	sueldo = parseint(sueldo);
	cuenta = 10*sueldo/100;
	suma = sueldo+cuenta;
	document.getElementById('resultado').value = suma;
}
