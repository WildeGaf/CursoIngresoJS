function mostrar()
/* Bandera se utiliza por una unica vez, para dar una valor a una unica variable
12 tp Hacer
*/
{
	var respuesta="si";
	var numero;
	var mayor;
	var menor;
	var bandera;
	bandera = 0;
	while (respuesta == "si"){
		numero = prompt("Ingrese un numero que sea entre los naturales");
		numero = parseInt(numero);
		if (bandera == 0){
			menor = numero;
			mayor = numero;
			bandera = 1;
		}
		else{
			if (numero >= contador){
				mayor = numero;
			}
			if (numero <= menor){
				menor = numero;
			}
		}	
	respuesta = prompt("Ingrese Si para ingresar otro numero");
	}
document.getElementById("maximo").value = mayor;
document.getElementById("minimo").value = menor;
}//FIN DE LA FUNCIÓN



