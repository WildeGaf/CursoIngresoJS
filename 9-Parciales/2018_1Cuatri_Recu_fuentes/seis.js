function mostrar()
{
var nota;
nota = document.getElementById("laHora").value 
nota = parseInt(nota);
	switch (nota){
		case 0:
		case 1:
		case 2:
		case 3:
			msg = "La proxima se puede";
		break
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			if (nota > 8){
				msg = "Aprobaste, muy bien!";
			}
			else if (nota < 5){
				msg = "Raspando, Debes preocuparte mas";
			}
			else{
				msg = "Aprobaste";
			}
	}
	alert (msg);
}
