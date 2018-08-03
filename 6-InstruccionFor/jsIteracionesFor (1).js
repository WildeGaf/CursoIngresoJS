/*  
var contador; Se define la variable
	for (variable;condicion;se suma al contador){
	
	}
	El primer valor se ejecuta una vez, el ultimo por cada repeticion
	y el del medio es una condicion
	Se puede utilizar break para cortar la iteracion
*/

function mostrar()
{
var contador;
contador=0;
	for (;;){
		contador++
		console.log(contador);
		if (contador==5){
			break
		}
	}
	console.log("Final "+ contador);
}