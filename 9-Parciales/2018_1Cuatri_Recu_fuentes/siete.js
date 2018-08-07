function mostrar()
{
var nota;
var acumulador = 0;
var contador;
var min;
var minSexo;
var edad;
var edadContador = 0;
var primeraEdad;
var notaJoven;
var sexoJoven;
var notaMujer;
var edadMujer;
var primeraMujer = 0
	for (contador=0;contador!=5;contador++){
		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);
		while (nota < 0 || nota >10){
			nota = prompt("Ingrese la nota");
			nota = parseInt(nota);
		}
		sexo = prompt("Ingrese el sexo m o f");
		while (sexo!="f" && sexo !="m"){
			sexo = prompt("Ingrese el sexo m o f");
		}	
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while (edad < 0){
			edad = prompt("Ingrese la edad");
			edad = parseInt(edad);
		} 
		if (contador == 0){
		min = nota;
		primeraEdad = edad;
		notaJoven = nota;
		}	
		if (nota <= min){
			min = nota;
			minSexo = sexo;
		}
		if (edad >= 18 && nota >=6){
			edadContador = edadContador + 1;
		}
		if (primeraEdad <= edad){
			notaJoven = nota;
			sexoJoven = sexo;
		}
		if (sexo == "f"){
		primeraMujer = primeraMujer + 1;
		}
		if (primeraMujer == 1){
			notaMujer = nota;
			edadMujer = edad;
		}
	acumulador = nota + acumulador; 
	}
if (primeraMujer == 0){
	document.write("No se ingreso ninguna mujer");
}
promedio = acumulador/5;
document.write("<br> Promedio es de "+ promedio);
document.write("<br> Nota mas baja es de "+ min + " el sexo de esa persona es "+ minSexo);
document.write("<br> Varones mayores a 18 con nota mayor a 6, cantidad: "+ edadContador);
document.write("<br> Sexo del mas joven "+ sexoJoven + " y su nota es de "+ notaJoven);
document.write("<br> Nota de la primera mujer "+ notaMujer + " Edad de la primeraMujer "+ edadMujer);
}