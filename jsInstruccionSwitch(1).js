function mostrar()
//tomo la edad 
/* Switch (blabla) {
	case "1":
	If ...
	break;
}
default: (Es como un Else del IF, se utiliza al final)
2 == "2" V Si uno es string y otro es numero lo compara como verdadero
2 === "2" F Estricta, si uno es string y otro es numero es falso
Primero compara el tipo, despues los valores.

*/ 
{
	var mesDelAño = document.getElementById('mes').value;
		switch (mesDelAño){
			case "Enero":
			alert("Que comiences bien el año!!!");
			break;

			case "Marzo":
			alert("A clases !!!");
			break;

			case "Julio":
			alert("Se vienen las vacaciones");
			break;

			case "Diciembre":
			alert("Felices Fiestas!!");
			break;
			
			default: 
			alert("Selecciono una fecha erronea");
	}
}//FIN DE LA FUNCIÓN