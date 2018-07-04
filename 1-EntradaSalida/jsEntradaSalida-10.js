/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var imp;
	var cuenta;
	var resta;
	imp = parseInt (document.getElementById('importe').value);
	cuenta = imp*25/100;
	resta = imp-cuenta;
	document.getElementById('resultado').value = resta;
}
