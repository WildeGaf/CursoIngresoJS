function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
	if (edad >= 18){
		alert ("Usted es mayor");
	}
	if (edad>=13 && edad<=17){ 
		alert ("Usted es adolescente");
	}
	if (edad <= 12){
		alert ("Usted es menor")
	}
}//FIN DE LA FUNCIÓN