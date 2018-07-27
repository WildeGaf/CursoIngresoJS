function mostrar()
{

var contador=0;
var acumulador=0;
var respuesta='si';
	while (respuesta == "si"){ 
		numero = prompt("Ingrese el numero");
		numero = parseInt(numero);
		acumulador = acumulador+numero;
		contador = contador+1;
		respuesta = prompt("si para ingresar otro numero, sino escriba cualquier simbolo");
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN