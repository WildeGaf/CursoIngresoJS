/* jose m 25
maria f 16
jesus m 33
fer f 81 
Ingreso de datos y desp resolver el ejercicio */
function mostrar()
{
var nombre;
var edad;
var sexo;
var contador = 0;
var contadorMujeres = 0;
var contadorHombres = 0;
var mayoresEdad = 0;
var menoresEdad = 0;
	while (contador != 4){
	nombre = prompt("Ingrese el nombre");
	sexo = prompt("Ingrese el sexo");
		while (sexo!="f" && sexo!="m"){
			sexo = prompt("Ingrese el sexo");
		}
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while (isNaN(edad) || edad < 0 || edad >100){
			edad = prompt("Ingrese la edad");
			edad = parseInt(edad);
		}
		if (sexo == "f"){
			contadorMujeres = contadorMujeres+1;
		}
		else {
			contadorHombres = contadorHombres + 1;
		}
		if (edad > 18){
			mayoresEdad = mayoresEdad + 1;
		}
		else {
			menoresEdad = menoresEdad + 1; 
		}
	if (contador == 0){
		edadAlta = edad; 
		edadMenor = edad;
	}
	else if (edad > edadAlta){
		edadAlta = edad
	}
	else if (edad < edadMenor){
		edadMenor = edad
	}
	contador++
	}	
document.write("Cantidad de mujeres: "+ contadorMujeres);
document.write("<br> Cantidad de Hombres: "+ contadorHombres);
document.write("<br> Cantidad de mayores de edad: "+ mayoresEdad);
document.write("<br> Cantidad de menores de edad: "+ menoresEdad);
document.write("<br> La edad mas alta es de: "+ edadAlta);
document.write("<br> La edad mas baja es de: "+ edadMenor);

}
