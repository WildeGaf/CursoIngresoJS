/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadoCivil;
 var sueldoBruto;
 var numeroLegajo;
 var nacionalidad; 
 edad = prompt("Ingrese la edad");
 	while (edad<18 || edad >90){
 		edad = prompt("Ingrese la edad");
 	}
 	sexo = prompt("Ingrese la sexo");
 	while (sexo !="m" && sexo !="f"){
 		sexo = prompt("Ingrese la sexo");
 	}
 	estadoCivil = prompt("Ingrese el estado civil 1-soltero 2-casados 3-divorciados y 4-viudos");
 	while (estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4){
 		estadoCivil = prompt("Ingrese el estado civil 1-soltero 2-casados 3-divorciados y 4-viudos");
 	}
 	switch (estadoCivil){
 		case 1:
 		estadoCivil = "Soltero";
 		break
 		case 2:
 		estadoCivil = "Casados";
 		break
 		case 3:
 		estadoCivil = "Divorciados";
 		break
 		default:
 		estadoCivil = "Viudos";
 	}
 	sueldoBruto = prompt("Ingrese el sueldo bruto");
 	sueldoBruto = parseInt(sueldoBruto);
 	while (sueldoBruto < 8000){
 		sueldoBruto = prompt("Ingrese el sueldo bruto");
 	}
 	numeroLegajo = prompt("Ingrese el numero de legajo");
 	while (numeroLegajo < 1000 || numeroLegajo > 9999);{
 		numeroLegajo = prompt("Ingrese el numero de legajo");
 	}
 	nacionalidad = prompt("Ingrese la nacionalidad A=Argentinos E=Extranjeros N=Nacionalizados  ")
 	while (nacionalidad !="A" && nacionalidad !="E" && nacionalidad !="N"){
 		Nacionalidad = prompt("Ingrese la nacionalidad A=Argentinos E=Extranjeros N=Nacionalizados  ")
 	}
 	switch (nacionalidad){
 		case "A":
 		nacionalidad = "Argentino/a";
 		break
 		case "E":
 		nacionalidad = "Extranjero";
 		break
 		default:
 		nacionalidad = "Nacionalizado";
 	}
 	document.getElementById("Edad").value = edad;
 	document.getElementById("Sexo").value = sexo;
 	document.getElementById("EstadoCivil").value = estadoCivil;
 	document.getElementById("Sueldo").value = sueldoBruto;
 	document.getElementById("Legajo").value = numeroLegajo;
 	document.getElementById("Nacionalidad").value = nacionalidad;
}	

