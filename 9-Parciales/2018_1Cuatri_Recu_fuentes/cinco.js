function mostrar()
{
var dia;
var msg;
dia = prompt("Ingrese dia de la semana, iniciando la primera letra con Mayuscula");
	switch (dia){
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			msg = "A trabajar";
			break
		case "Sabado":
		case "Domingo":
			msg = "Buen finde";
		break
		default:
			msg = "Ese dia no es valido";
	}
alert (msg);	
}
