function mostrar()
{
var precio;
var descuento;
var cuenta;
var	iva;
var total;
var resta;
precio = prompt ("Ingrese el precio");
descuento = prompt ("Ingrese el % de descuento");
iva = (precio * 21 / 100);
cuenta = (precio * descuento / 100);
resta = (precio - cuenta);
total = (precio - cuenta - iva);
alert("el descuento es de "+cuenta+" $ el precio con el descuento es de "+resta+" $ El iva es de"+iva);
document.getElementById('elPrecioFinal').value = total;
}