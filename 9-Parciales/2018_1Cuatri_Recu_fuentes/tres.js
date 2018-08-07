function mostrar()
{
var precio;
var porcentajeDescuento;
var cuenta;
var precioIva;
var PrecioDescuento;
precio = prompt("Ingrese el precio");
porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");
precio = parseInt(precio);
porcentajeDescuento = parseInt(porcentajeDescuento);
cuenta = porcentajeDescuento * precio / 100;
total = precio - cuenta;
precioIva = 21 * total / 100;
alert("1- Descuento en dinero "+ cuenta + " 2- El precio con descuento es de "+ total + " El IVA  es de "+ precioIva);
PrecioDescuento = total + precioIva;
document.getElementById("elPrecioFinal").value = PrecioDescuento;
}