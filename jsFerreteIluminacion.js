/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{	
	var cantidadDeLamparas;
	var descuento;
	var precioFinal;
	var precioBruto;
	var marca;
	cantidadDeLamparas = document.getElementById('Cantidad').value;
	marca = document.getElementById("Marca").value;
	cantidadDeLamparas = parseInt(cantidadDeLamparas);
	descuento = 1

	precioBruto = 35 * cantidadDeLamparas;
	switch (cantidadDeLamparas){
		case 1:
		case 2:
		case 3:
			switch (marca){
				case "ArgentinaLuz":
				descuento = precioBruto * 0,85;
				break
				case "FelipeLamparas":
				descuento = precioBruto * 0,90;
				break
			}
		case 4:
			switch (marca){
				case "ArgentinaLuz":
				descuento = precioBruto * 0,75;
				break
				case "FelipeLamparas":
				descuento = precioBruto * 0,80;
				break
			}
		case 5:
			switch (marca){
				case "ArgentinaLuz":
				descuento = precioBruto * 0,60;
				break
				case "FelipeLamparas":
				descuento = precioBruto * 0,70;
				break
			}
		case 6:
			descuento = precioBruto * 0,5;
	}
  precioFinal = precioBruto * descuento;
  document.getElementById("precioDescuento").value = precioFinal;
}
 /*	
 	var = precio;
 	var = cantLamparas;
 	var = marca;
 	var = PrecioFinal;
 	var = descuento;
 	var = Unitario;
 	var = Bruto;
 	precio = 35;


 	If (cantLamparas >= 6){
 		Bruto = (precio * cantLamparas);
 		PrecioFinal = Bruto * 0,2;
	}
	else if (cantLamparas = 5 && marca=="ArgentinaLuz"){
		descuento = Bruto * 0,4;
	}
	else if (cantLamparas == 5){
		descuento = Bruto * 0,3;
	}
	else if (cantLamparas == 4 && marca =="ArgentinaLuz" || marca == "FelipeLamparas"){
		descuento = Bruto * 0,25;
	}
	else if (cantLamparas == 3 && marca =="ArgentinaLuz"){
		descuento = Bruto * 0,15
	}
	else if (cantLamparas == 3 && marca =="FelipeLamparas"){
		descuento = Bruto * 0,1;
	}
	else if (cantLamparas == 3){
		descuento = Bruto * 0,05
	}
	if (descuento => 120){
		descuento = bruto * 

	}
}
*/