function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var cantidadSuma = 0;
	var SumaPositivos = 0;
	var SumaNegativos = 0;
	var CantidadNegativos = 0;
	var CantidadCeros = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var cantidadPares = 0;
	var total = 0;

	while(respuesta!="no"){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if (numero > 0){
			cantidadSuma = cantidadSuma + 1;
			SumaPositivos = SumaPositivos + numero;
		}
		else if (numero < 0){
				CantidadNegativos = CantidadNegativos + 1;
				SumaNegativos = SumaNegativos + numero;
		}
		else if (numero == 0){
			CantidadCeros = CantidadCeros + 1; 
		}
		if (numero%2 == 0){
			cantidadPares = 0 + 1;
		}
	respuesta = prompt("Digite no para cerrar el programa,en otro caso se cerrara");
	}
	if (cantidadSuma > CantidadNegativos){
		Total = cantidadSuma - CantidadNegativos;
		document.write("Hay mas positivos que negativos, con una cantidad de "+ total);
	}
	else if (cantidadSuma < CantidadNegativos){
		total = CantidadNegativos - cantidadSuma;
		document.write("Hay mas negativos que positivos, con una cantidad de"+ total);
	}
	else {
		document.write("Hay misma cantidad de positivos y negativos");
	} 
promedioPositivos = SumaPositivos/cantidadSuma;
promedioNegativos = SumaNegativos/CantidadNegativos;
document.write("<br> Cantidad de positivos "+ cantidadSuma);
document.write("<br> Cantidad de negativos "+ CantidadNegativos);
document.write("<br> Cantidad de ceros "+ CantidadCeros);
document.write("<br> Suma de negativos "+ SumaNegativos);
document.write("<br> Suma de positivos "+ SumaPositivos);
document.write("<br> Promedio de positivos "+ promedioPositivos);
document.write("<br> Promedio de negativos "+ promedioNegativos);
document.write("<br> Cantidad de numeros pares"+ cantidadPares);
}//FIN DE LA FUNCIÓN