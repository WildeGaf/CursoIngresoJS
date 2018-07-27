function mostrar()
{
// NaN es distinto de Nan 
//isNan(num) verifica si la variable es un Nan.NaN, proviene del acrónimo en inglés Not a Number (en español: no es un número).
// Este acrónimo se usa generalmente en algunos lenguajes 
//de programación para expresar un resultado imposible de calcular, como el caso de las raíces negativas, indeterminaciones
	var contador=0;
	var numero;
	var multiplacion = 1;
	var acumulador = 0;
	var respuesta='si';
		while (respuesta == "si"){
			numero=prompt("Ingrese el numero");
			numero = parseInt(numero);
			while (numero > 0){
				acumulador = acumulador + numero;
				numero = 0;
			}
			while (numero < 0){
				multiplacion = multiplacion * numero;
				numero = 0;
			}
		respuesta = prompt("Ingrese si, para continuar");
		}

if (multiplacion == 1){
	multiplacion = 0;
}

document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=multiplacion;

}//FIN DE LA FUNCIÓN