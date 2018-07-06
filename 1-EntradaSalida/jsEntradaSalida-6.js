/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var suma;
	var num1;
	var num2;
	num1 = document.getElementById('numeroUno').value;
	num2 = document.getElementById('numeroDos').value;
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	//Si no se usa el parseint se toma el valor como si fueran letras 
	//Poniendo una desp de la otra /(O.O)/
	suma = num1 + num2;
	alert ("La suma es: "+ suma);
}

